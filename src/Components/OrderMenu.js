import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class OrderMenu extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			records : ["10:00 - 10:30", "10:30 - 11:00", "11:00 - 11:30","10:00 - 10:30", "10:30 - 11:00", "11:00 - 11:30","10:00 - 10:30", "10:30 - 11:00", "11:00 - 11:30","10:00 - 10:30", "10:30 - 11:00", "11:00 - 11:30","10:00 - 10:30", "10:30 - 11:00", "11:00 - 11:30"]
		};
	}

	generateRecord(text){
		return (
			<ListItem key={text} button>
				<ListItemText primary={text} />
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