import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Logo from './Logo.js';
import MenuToolbar from './MenuToolbar.js';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
	card: {
	  margin: 25,
	  maxHeight: 450,
	  overflow: 'auto'
	},
	page: {
		maxHeight: 600,
		overflow: 'auto'
	}
  };

class HistoryPage extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			items: [
				{id: "0", date: "24/12/2019", time: "15:30 - 16:00"},
				{id: "3", date: "04/12/2019", time: "17:30 - 18:00"},
				{id: "2", date: "20/11/2019", time: "17:00 - 17:30"},
				{id: "1", date: "31/10/2019", time: "10:30 - 11:00"},
				{id: "4", date: "16/10/2019", time: "17:30 - 18:00"},
				{id: "5", date: "01/10/2019", time: "17:00 - 17:30"},
				{id: "6", date: "09/09/2019", time: "10:30 - 11:00"},
			]
		};
	}


	generateSingleItem = (item) => {
		return (
			<React.Fragment key={item.id}>
				<ListItem key={item.id}>
					<ListItemText primary={item.date} secondary={item.time}/>
				</ListItem>
				<Divider />
			</React.Fragment>
		);
	}

	gernerateItems = () => {
		return (
			<List>
				{ this.state.items.map((item) => this.generateSingleItem(item)) }
			</List>
		);
	};

	render() {
		const { classes } = this.props;
		let items = this.gernerateItems();
		return (
			<React.Fragment>
				<MenuToolbar></MenuToolbar>
				<div className='App'>
					<h1>הזמנות שביצעתי</h1>
					<Card variant="outlined" className={classes.card}>
						<CardContent>
							{items}
						</CardContent>
					</Card>
				</div>
				<footer className="App-footer">
					<Logo variant="little" />
				</footer>
			</React.Fragment>
		);
	}
}

export default withStyles(styles)(HistoryPage);
