import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Logo from './Logo.js';
import OrderMenu from './OrderMenu.js';

const styles = {
	card: {
	  margin: 25,
	  maxHeight: 350,
	  overflow: 'auto'
	}
  };

class InvitePage extends React.Component{
	render() {
		const { classes } = this.props;
		return (
			<React.Fragment>
				<div className="App">
				<Card className={classes.card} variant="outlined">
					<CardContent>
						<OrderMenu title="Today"/>
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

