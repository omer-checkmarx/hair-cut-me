import React from 'react';
import Logo from './Logo.js';
import MenuToolbar from './MenuToolbar.js';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { ApplicationContext } from '../ApplicationContext.js';

class DetailPage extends React.Component{
	render() {
		let additionalInfo = <div></div>;
		if(this.props.additional !== undefined){
			additionalInfo = this.props.additional;
		}
		return (
			<React.Fragment>
				<MenuToolbar></MenuToolbar>
					<ApplicationContext.Consumer>
						{(context) => (
							<div className="App">
								<h1>{context.barber.name}</h1>
								<h4>{context.barber.address}</h4>
								{context.barber.locationImage}
								<Card variant="outlined" style={{"margin": "30px"}}>
									<CardContent>
										<Typography align="left">
											{context.barber.detail}
										</Typography>
									</CardContent>
								</Card>
								{additionalInfo}
							</div>
						)}
					</ApplicationContext.Consumer>
				<Logo variant="little" />
			</React.Fragment>
		);
	}
}

export default DetailPage;
