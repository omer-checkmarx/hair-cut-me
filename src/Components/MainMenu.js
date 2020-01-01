import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const styles = {
  root: {
	margin: '15px',
	width: '130px',
	height: '130px'
  }
};
			
class MainMenu extends React.Component{
	
	render(){
		const { classes } = this.props;
		return (
			<React.Fragment>
				<Button variant="outlined" className={classes.root} color="primary">
					History
				</Button>
				<Link to="/invite">
					<Button variant="outlined" className={classes.root} color="primary">
						Invite
					</Button>
				</Link>
			</React.Fragment>
		);
	}
}

MainMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainMenu);