import React from 'react';
import Logo from './Logo.js';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DelayLink from 'react-delay-link';

class RegisterPage extends React.Component{
	render() {
		return (
			<React.Fragment>
				<div className="App">
					<Box className="mainFlex"></Box>
					<Logo variant="big"></Logo>
					<TextField id="standard-basic" label="שם משתמש" style={{color: 'white'}}/>
					<br /><TextField id="standard-password-basic" type='Password' label="סיסמה" />
					<br /><TextField id="standard-phone-basic" label="מספר פלאפון"/>
					<br /><TextField id="standard-email-basic" label="אימייל"/>
					<br /><br />
					<DelayLink delay={250} to='/home'>
						<Button color='primary' variant='contained'>הרשם</Button>
					</DelayLink>
				</div>
			</React.Fragment>
		);
	}
}

export default RegisterPage;
