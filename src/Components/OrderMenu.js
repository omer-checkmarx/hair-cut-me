import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

class OrderMenu extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			records : [
				{id: "0", val: "10:00 - 10:30", avail: false},
				{id: "1", val: "10:30 - 11:00", avail: true},
				{id: "2", val: "11:00 - 11:30", avail: false},
				{id: "3", val: "11:30 - 12:00", avail: true},
				{id: "4", val: "12:00 - 12:30", avail: true},
				{id: "5", val: "12:30 - 13:00", avail: false}]
		};
	}

	generateRecord(item){
		let button = <Button color='secondary' variant='contained' disabled>Not avail</Button>
		if(item.avail){
			button = <Button color='primary' variant='contained'>invite</Button>;
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
			<div>
				{this.props.title}
				<List key={this.props.title} component="nav" aria-label="main mailbox folders">
					{this.state.records.map((rec) => this.generateRecord(rec))}
				</List>
			</div>
		);
	}
}

export default OrderMenu;