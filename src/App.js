import React from 'react';
import MainPage from './Components/MainPage.js';
import InvitePage from './Components/InvitePage.js';
import LoginPage from './Components/LoginPage.js';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {HashRouter as Router, Route} from 'react-router-dom';

const theme = createMuiTheme();

theme.palette.background.paper = '#444a56';
theme.palette.type = 'dark';
theme.palette.text.primary = '#ffffff'

function App() {
	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<Router>
					<Route exact path="/home" component={MainPage} />
					<Route exact path="/" component={LoginPage} />
					<Route exact path="/invite" component={InvitePage} />
				</Router>
			</ThemeProvider>
		</React.Fragment>
	);
}

export default App;
