import React from 'react';
import MainPage from './Components/MainPage.js';
import InvitePage from './Components/InvitePage.js';
import LoginPage from './Components/LoginPage.js';
import DetailPage from './Components/DetailPage.js';
import RegisterPage from './Components/RegisterPage.js';
import HistoryPage from './Components/HistoryPage.js';
import SettingsPage from './Components/SettingsPage.js';
import ContactPage from './Components/ContactPage.js';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {HashRouter as Router, Route} from 'react-router-dom';import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import Logo from './Components/Logo.js';
import AppContextProvider from './ApplicationContext.js';

const theme = createMuiTheme({
	direction: 'rtl',
	palette: {
		type: 'dark',
		background: {
			paper: '#444a56'
		},
		text: {
			primary: '#ffffff'
		}
	}
});

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

class App extends React.Component {
	render(){
		return (
			<AppContextProvider>
				<React.Fragment>
					<ThemeProvider theme={theme}>
						<StylesProvider jss={jss}>
							<Router>
								<Route exact path="/home" component={MainPage} />
								<Route exact path="/" component={LoginPage} />
								<Route exact path="/register" component={RegisterPage} />
								<Route exact path="/invite" component={InvitePage} />
								<Route exact path="/detail" component={DetailPage} />
								<Route exact path="/contact" component={ContactPage} />
								<Route exact path="/settings" render={(props) => <SettingsPage {...props}/>} />
								<Route exact path="/history" render={(props) => <HistoryPage {...props}/>} />
							</Router>
						</StylesProvider>
					</ThemeProvider>
				</React.Fragment>
			</AppContextProvider>
		);
	}
}

export default App;
