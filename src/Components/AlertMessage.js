import React from 'react';
import PropTypes from 'prop-types';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { withStyles } from '@material-ui/core/styles';


const styles = {
	success: {
		backgroundColor: '#3f51b5c7',
	  },
	  error: {
		backgroundColor: '#d657578f',
	  },
	  icon: {
		fontSize: 20,
	  },
	  iconVariant: {
		opacity: 0.9,
		marginRight: '10px',
	  },
	  message: {
		display: 'flex',
		alignItems: 'center'
	  },
	  margin: {
		  margin: '10px',
	  }
  };

class AlertMessage extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			variantIcon: {
				success: CheckCircleIcon,
				warning: WarningIcon,
				error: ErrorIcon,
				info: InfoIcon,
			},
			open: false
		};
	}
  
	handleClick = () => {
		this.setState({open: true});
	};
  
	handleClose = (event, reason) => {
	  if (reason === 'clickaway') {
		return;
	  }
	  this.setState({open: false});
	};

	render(){
		const { classes } = this.props;
		const { open, handleClose, message } = this.props;
		return (
			<Snackbar
			anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'left',
			}}
			open={open}
			autoHideDuration={6000}
			onClose={this.handleClose}>
				{() => (
						<SnackbarContent
						className={classes.success}
						aria-describedby="client-snackbar"
						message={
						<span id="client-snackbar" className={classes.message}>
							<h1>{message}</h1>
						</span>
						}
						action={[
						<IconButton key="close" aria-label="close" color="inherit" onClick={handleClose}>
							<CloseIcon className={classes.icon} />
						</IconButton>,
						]} />
					)
				}
			</Snackbar>
		);
	}
}

AlertMessage.propTypes = {
	classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(AlertMessage);