import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import AlertMessage from './AlertMessage';

class OrderMenu extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			records : [
				{id: "0", val: "10:00 - 10:30", avail: false, byMe: false},
				{id: "1", val: "10:30 - 11:00", avail: true, byMe: true},
				{id: "2", val: "11:00 - 11:30", avail: false, byMe: true},
				{id: "3", val: "11:30 - 12:00", avail: true, byMe: true},
				{id: "4", val: "12:00 - 12:30", avail: true, byMe: true},
				{id: "5", val: "12:30 - 13:00", avail: false, byMe: false}],
				successOpen: false
		};
	}
  
	handleInviteClick = () => {
		this.setState({alertMessage: "הוזמן בהצלחה", successOpen: true});
	};
  
	handleInviteClose = (event, reason) => {
	  if (reason === 'clickaway') {
		return;
	  }
	  this.setState({successOpen: false});
	};

	generateRecord(item){
		let button = <Button color='secondary' variant='contained' disabled>תפוס</Button>
		if(item.avail){
			button = <Button color='primary' variant='contained' onClick={this.handleInviteClick}>הזמן</Button>;
		}
		else if(item.byMe){
			button = <Button variant='contained' style={{'backgroundColor': 'orange'}}>בטל/החלף</Button>;
		}
		return (
			<ListItem key={item.id}>
				<ListItemText primary={item.val} />
				{button}
			</ListItem>
		);
	}

	render(){	
		return (
			<div style={{'textAlign': 'center'}}>
				{this.props.title}
				<List key={this.props.title} component="nav" aria-label="main mailbox folders">
					{this.state.records.map((rec) => this.generateRecord(rec))}
				</List>
				<AlertMessage message={this.state.alertMessage} open={this.state.successOpen} handleClose={this.handleInviteClose}/>
			</div>
		);
	}
}

export default OrderMenu;