import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Logo from './Logo.js';
import OrderMenu from './OrderMenu.js';
import MenuToolbar from './MenuToolbar.js';

const styles = {
	card: {
	  margin: 25,
	  maxHeight: 350,
	  overflow: 'auto'
	},
	page: {
		maxHeight: 600,
		overflow: 'auto'
	}
  };

class InvitePage extends React.Component{
	render() {
		const { classes } = this.props;
		return (
			<React.Fragment>
				<MenuToolbar></MenuToolbar>
				<div className="App" className={classes.page}>
					<Card className={classes.card} variant="outlined">
						<CardContent>
							<OrderMenu title="Today"/>
						</CardContent>
					</Card>
					<Card className={classes.card} variant="outlined">
						<CardContent>
							<OrderMenu title="Tommorow"/>
						</CardContent>
					</Card>
				</div>
				<footer className="App-footer">
					<Logo variant="little" />
				</footer>
			</React.Fragment>
		);
	}
}

export default withStyles(styles)(InvitePage);

