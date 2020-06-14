import React  from 'react';
import './App.css';
import Layout from "./hoc/Layout/Layout";
import { StylesProvider } from "@material-ui/core/styles";

function App() {
	return (
		<div className="App">
			<StylesProvider injectFirst>
				<Layout>
					Route
				</Layout>
			</StylesProvider>
		</div>
	);
}

export default App;
