import React, {useState, useEffect} from 'react';
import { Modal } from '@material-ui/core';
import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponent, axios) => {
	return props => {
		const [error, setError] = useState(null);

		const reqInterceptor = axios.interceptors.request.use(req => {
			setError(null);
			return req;
		});
		const resInterceptor = axios.interceptors.response.use(res => res, error => {
			setError(error);
		});

		useEffect(() => {
			axios.interceptors.request.eject(reqInterceptor);
			axios.interceptors.response.eject(resInterceptor);
		}, [reqInterceptor, resInterceptor])

		const errorConfirmedHandler = () => {
			setError(null);
		}

		return (
			<Aux>
				<Modal
					open={!!error}
					onClose={errorConfirmedHandler}>
					<div>
						{error ? error.message : null}
					</div>
				</Modal>
				<WrappedComponent {...props} />
			</Aux>
		);

	}
}

export default withErrorHandler;
