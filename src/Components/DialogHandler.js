import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = {
	card: {
	  margin: 25,
	  maxHeight: 450,
	  overflow: 'auto'
	},
	page: {
		maxHeight: 600,
		overflow: 'auto',
		'text-align': 'center'
	}
  };

class DialogHandler extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			open: false
		};
	}

	handleClose = (comp) => {
		this.setState({
			open: false
		});
	}

	handleOpen = (comp) => {
		this.setState({
			open: true
		});
	};

	render() {
		const { classes } = this.props;
		
		return (
			<div>
				<Button variant="outlined" color="primary" onClick={this.handleOpen}>
					Open alert dialog
				</Button>
				<Dialog
					open={this.state.open}
					onClose={this.handleClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
					<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Let Google help apps determine location. This means sending anonymous location data to
						Google, even when no apps are running.
					</DialogContentText>
					</DialogContent>
					<DialogActions>
					<Button onClick={this.handleClose} color="primary">
						Disagree
					</Button>
					<Button onClick={this.handleClose} color="primary" autoFocus>
						Agree
					</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

export default withStyles(styles)(DialogHandler);
