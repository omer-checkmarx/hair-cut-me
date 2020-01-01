import React from 'react';
import Logo from './Logo.js';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';

class LoginPage extends React.Component{
	render() {
		return (
			<React.Fragment>
				<div className="App">
					<Box className="mainFlex"></Box>
					<Logo variant="big"></Logo>
					<TextField id="standard-basic" label="User" />
					<br /><TextField id="standard-password-basic" type='Password' label="Password" />
					<br /><br />
					<Link to='/home'>
						<Button color='primary' variant='contained'>Login</Button>
					</Link>
				</div>
			</React.Fragment>
		);
	}
}

export default LoginPage;
