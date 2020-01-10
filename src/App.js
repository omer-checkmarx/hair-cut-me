import React from 'react';
import MainPage from './Components/MainPage.js';
import InvitePage from './Components/InvitePage.js';
import LoginPage from './Components/LoginPage.js';
import DetailPage from './Components/DetailPage.js';
import RegisterPage from './Components/RegisterPage.js';
import HistoryPage from './Components/HistoryPage.js';
import SettingsPage from './Components/SettingsPage.js';
import MapImage from './Images/map.png';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {HashRouter as Router, Route} from 'react-router-dom';import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Logo from './Components/Logo.js';

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
	constructor(props){
		super(props);
		let barberImage = <img src={MapImage} width="320" alt="devuse"/>;
		let contactApps = <div><FacebookIcon fontSize="large"/><span style={{'margin': '30px'}}><InstagramIcon fontSize="large"/></span><TwitterIcon fontSize="large"/></div>;
		let logo = <Logo variant="big" />;
		this.state = {
			barber: {
				name: "רון אליהו",
				address: "המרגלית 46 קרית גת",
				detail: "רון אליהו ספר מגיל 14, עובד בעיצוב שיער כבר למעלה מ20 שנה בעיר קרית גת. את המספרה הקים אבא שלו כשרון היה ילד ומאז כבר ידע שזה המקצוע שרוצה לעסוק בו כל חיו. רון מספר למעלה מ300 אנשים ביחודש. עושה גם תספורות נשים וגם גברים.",
				locationImage: barberImage
			},
			appContact: {
				name: "HairCutter",
				job: "פתרונות תורים עבור ספרים",
				details: "טלפון ליצירת קשר: 0546148812",
				appLogo: logo,
				apps: contactApps
			}
		};
	}

	render(){
		return (
			<React.Fragment>
				<ThemeProvider theme={theme}>
					<StylesProvider jss={jss}>
						<Router>
							<Route exact path="/home" component={MainPage} />
							<Route exact path="/" component={LoginPage} />
							<Route exact path="/register" component={RegisterPage} />
							<Route exact path="/invite" component={InvitePage} />
							<Route exact path="/detail" render={(props) => <DetailPage {...props} title={this.state.barber.name} subtitle={this.state.barber.address} details={this.state.barber.detail} media={this.state.barber.locationImage} />} />
							<Route exact path="/contact" render={(props) => <DetailPage {...props} title={this.state.appContact.name} subtitle={this.state.appContact.job} details={this.state.appContact.details} additional={this.state.appContact.apps} media={this.state.appContact.appLogo}/>} />
							<Route exact path="/settings" render={(props) => <SettingsPage {...props}/>} />
							<Route exact path="/history" render={(props) => <HistoryPage {...props}/>} />
						</Router>
					</StylesProvider>
				</ThemeProvider>
			</React.Fragment>
		);
	}
}

export default App;
