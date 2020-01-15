import React from 'react';
import Logo from './Logo.js';
import MainMenu from './MainMenu.js';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import MenuToolbar from './MenuToolbar.js';
import DelayLink from 'react-delay-link';
import { ApplicationContext } from '../ApplicationContext.js';

class MainPage extends React.Component{
	render() {
		return (
			<React.Fragment>
				<MenuToolbar></MenuToolbar>
				<div className="App">
					<Box className="mainFlex"></Box>
					<Logo variant="big"></Logo>
					<ApplicationContext.Consumer>
						{(context) => (
						<h1>{context.user.Name}</h1>
							)}
					</ApplicationContext.Consumer>
					<MainMenu></MainMenu>
				</div>
				<DelayLink delay={250} to="/invite">
					<Fab color='primary' className="addingFab" style={{'position': 'absolute', 'bottom': '20px', 'left': '20px'}}>
						<AddIcon />
					</Fab>
				</DelayLink>
			</React.Fragment>
		);
	}
}

export default MainPage;
