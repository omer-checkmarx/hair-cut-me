import React from 'react';
import Logo from './Logo.js';
import MenuToolbar from './MenuToolbar.js';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class DetailPage extends React.Component{
	render() {
		let additionalInfo = <div></div>;
		if(this.props.additional !== undefined){
			additionalInfo = this.props.additional;
		}
		return (
			<React.Fragment>
				<MenuToolbar></MenuToolbar>
				<div className="App">
					<h1>{this.props.title}</h1>
					<h4>{this.props.subtitle}</h4>
					{this.props.media}
					<Card variant="outlined" style={{"margin": "30px"}}>
						<CardContent>
							<Typography align="left">
								{this.props.details}
							</Typography>
						</CardContent>
					</Card>
					{additionalInfo}
				</div>
				<Logo variant="little" />
			</React.Fragment>
		);
	}
}

export default DetailPage;
