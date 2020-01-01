import React from 'react';
import MainPage from './Components/MainPage.js';
import InvitePage from './Components/InvitePage.js';
import MenuToolbar from './Components/MenuToolbar.js';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme();
theme.palette.background.paper = '#444a56';
theme.palette.text.primary = '#ffffff'

function App() {
	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<MenuToolbar></MenuToolbar>
				<InvitePage />
			</ThemeProvider>
		</React.Fragment>
	);
}

export default App;
