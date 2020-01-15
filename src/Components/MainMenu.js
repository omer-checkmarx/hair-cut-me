import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DelayLink from 'react-delay-link';
import AlertMessage from './AlertMessage.js';

const styles = {
  root: {
	margin: '15px',
	width: '120px',
	height: '120px'
  }
};
			
class MainMenu extends React.Component{
	
	render(){
		const { classes } = this.props;
		return (
			<div style={{'display': 'inline-flex'}}>
				<DelayLink delay={250} to="/detail">
					<Button variant="contained" className={classes.root} color="primary">
						פרטים
					</Button>
				</DelayLink>
				<DelayLink delay={250} to="/invite">
					<Button variant="contained" className={classes.root} color="primary">
						הזמן
					</Button>
				</DelayLink>
				<AlertMessage />
			</div>
		);
	}
}

MainMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainMenu);