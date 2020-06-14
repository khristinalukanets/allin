import React  from 'react';
import './App.css';
import Layout from "./hoc/Layout/Layout";
import { StylesProvider } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom"

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<StylesProvider injectFirst>
					<Layout/>
				</StylesProvider>
			</div>
		</BrowserRouter>
	);
}

export default App;
