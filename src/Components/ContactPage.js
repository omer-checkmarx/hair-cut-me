import React from 'react';
import Logo from './Logo.js';
import MenuToolbar from './MenuToolbar.js';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

class ContactPage extends React.Component{
	render() {
		let additionalInfo = <div></div>;
		if(this.props.additional !== undefined){
			additionalInfo = this.props.additional;
		}
		return (
			<React.Fragment>
				<MenuToolbar></MenuToolbar>
				<div className="App">
					<h1>HairCutter</h1>
					<h4>פתרונות תורים עבור ספרים</h4>
					<Logo variant="big"/>
					<Card variant="outlined" style={{"margin": "30px"}}>
						<CardContent>
							<Typography align="left">
								טלפון ליצירת קשר: 0546148812
							</Typography>
						</CardContent>
					</Card>
					<div><FacebookIcon fontSize="large"/><span style={{'margin': '30px'}}><InstagramIcon fontSize="large"/></span><TwitterIcon fontSize="large"/></div>
				</div>
				<Logo variant="little" />
			</React.Fragment>
		);
	}
}

export default ContactPage;
