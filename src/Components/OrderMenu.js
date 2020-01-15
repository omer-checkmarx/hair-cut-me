import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import AlertMessage from './AlertMessage';
import axios from 'axios';

class OrderMenu extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			records : [],
				successOpen: false
		};
	}

	componentDidMount(){
		axios.get('http://localhost/v1/getinvitations/4cc90a87-b00f-4b01-bc69-86ab8fc21f25/2020-01-13')
			.then((response) => {
				this.setState({records: response.data});
			})
			.catch((response) => {
				console.log(response);
			})
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
		if(item.state === 0){
			button = <Button color='primary' variant='contained' onClick={this.handleInviteClick}>הזמן</Button>;
		}
		else if(item.byMe){
			button = <Button variant='contained' style={{'backgroundColor': 'orange'}}>בטל/החלף</Button>;
		}
		return (
			<ListItem key={item.id}>
				<ListItemText primary={item.description} />
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