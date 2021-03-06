import React from 'react';
import Logo from './Logo.js';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DelayLink from 'react-delay-link';

class LoginPage extends React.Component{
	render() {
		return (
			<React.Fragment>
				<div className="App">
					<Box className="mainFlex"></Box>
					<Logo variant="big"></Logo>
					<TextField id="standard-basic" label="שם משתמש" style={{color: 'white'}}/>
					<br /><TextField id="standard-password-basic" type='Password' label="סיסמה" />
					<br /><br />
					<DelayLink delay={250} to='/home'>
						<Button color='primary' variant='contained'>התחבר</Button>
					</DelayLink>
					<br />
					<DelayLink delay={250} to='/register'>
						<Button color='primary' variant='outlined'>עדיין לא רשום</Button>
					</DelayLink>
				</div>
			</React.Fragment>
		);
	}
}

export default LoginPage;
