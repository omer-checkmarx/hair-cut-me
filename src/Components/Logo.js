import React from 'react';
import logo from '../Images/logo.png';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
	small: {
		height: '100px',
	},
	logosmall: {
		width: '100%',
		bottom: '0',
		position: 'absolute',
		background: '#282c34',
		'text-align': 'center'
	},
	toolbar:{    
		'font-weight': '800',
		'font-size': '28px',
		width: '100%',
		'text-align': 'center'
	}
  };

class Logo extends React.Component{
	big = () => {
		return (
			<div>
				<img src={logo} className="App-logo" alt="logo" />
			</div>
		);
	}
	
	little = () => {
		const { classes } = this.props;
		return (
			<div className={classes.logosmall}>
				<img src={logo} className={classes.small} alt="logo" />
			</div>
		);
	}

	toolbar = () => {
		const { classes } = this.props;
		return (
			<div className={classes.toolbar}>
				HairCutter
			</div>
		);
	};
	
	render(){
		if(this.props.variant === "big"){
			return this.big();
		} else if(this.props.variant == "toolbar") {
			return this.toolbar();
		} else {
			return this.little();
		}
	}
}


Logo.propTypes = {
	classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Logo);