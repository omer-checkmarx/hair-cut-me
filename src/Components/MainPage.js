import React from 'react';
import Logo from './Logo.js';
import MainMenu from './MainMenu.js';
import Box from '@material-ui/core/Box';

class MainPage extends React.Component{
	render() {
		return (
			<div className="App">
				<Box className="mainFlex"></Box>
				<Logo variant="big"></Logo>
				<MainMenu></MainMenu>
			</div>
		);
	}
}

export default MainPage;
