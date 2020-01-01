import React from 'react';
import logo from '../Images/logo.png';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
	small: {
		height: '70px',
	},
	logosmall: {
		display: 'inline-flex',
	    position: 'absolute',
		bottom: 0,
		left: '25%'
	}
  };

class Logo extends React.Component{
	big = () => {
		return (
			<div>
				<img src={logo} className="App-logo" alt="logo" />
				<h1>HairCutter</h1>
			</div>
		);
	}
	
	little = () => {
		const { classes } = this.props;
		return (
			<div className={classes.logosmall}>
				<h2>HairCutter</h2>
				<img src={logo} className={classes.small}  height="100%" alt="logo" />
			</div>
		);
	}
	
	render(){
		if(this.props.variant === "big"){
			return this.big();
		} else{
			return this.little();
		}
	}
}


Logo.propTypes = {
	classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Logo);