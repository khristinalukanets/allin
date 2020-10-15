import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {Provider} from "react-redux";
import notesReducer from './store/reducers/notes';
import eventsReducer from './store/reducers/events';
import thunk from 'redux-thunk';

let composeEnhancers = null;
if (process.env.NODE_ENV === 'development') {
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
} else {
	composeEnhancers = compose;
}

const rootReducer = combineReducers({
	notes: notesReducer,
	events: eventsReducer
});

const store = createStore(rootReducer, composeEnhancers(
	applyMiddleware(thunk)
));


ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App/>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
