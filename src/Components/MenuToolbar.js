import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddCircleIcon from '@material-ui/icons/AddCircle'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import HistoryIcon from '@material-ui/icons/History';
import CallIcon from '@material-ui/icons/Call';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DelayLink from 'react-delay-link';

class MenuToolbar extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isMenuOpen: false
		}
	}

	toggleDrawer = (val) => {
		this.setState({
			isMenuOpen: val
		});
	}

	fullList = () => (
		<div>
			<List>
				<DelayLink delay={250} to="/invite">
					<ListItem button key='invite'>
						<ListItemIcon>
							<AddCircleIcon />
						</ListItemIcon>
						<ListItemText primary='הזמן תור' />
					</ListItem>
				</DelayLink>
				<ListItem button key='myOrders'>
					<ListItemIcon>
						<ShoppingCartIcon />
					</ListItemIcon>
					<ListItemText primary='ההזמנות שלי' />
				</ListItem>
				<DelayLink delay={250} to="/detail">
					<ListItem button key='details'>
						<ListItemIcon>
							<BookmarksIcon />
						</ListItemIcon>
						<ListItemText primary='פרטים על המספרה' />
					</ListItem>
				</DelayLink>
				<DelayLink delay={250} to="/history">
					<ListItem button key='history'>
						<ListItemIcon>
							<HistoryIcon />
						</ListItemIcon>
						<ListItemText primary='היסטורית ההזמנות שלי' />
					</ListItem>
				</DelayLink>
				<Divider />
				<DelayLink delay={250} to='/contact'>
					<ListItem button key='contact'>
						<ListItemIcon>
							<CallIcon />
						</ListItemIcon>
						<ListItemText primary='צור קשר' />
					</ListItem>
				</DelayLink>
				<DelayLink delay={250} to='/settings'>
					<ListItem button key='settings'>
						<ListItemIcon>
							<SettingsIcon />
						</ListItemIcon>
						<ListItemText primary='הגדרות' />
					</ListItem>
				</DelayLink>
				<DelayLink delay={250} to='/'>
					<ListItem button key='logout'>
						<ListItemIcon>
							<ExitToAppIcon />
						</ListItemIcon>
						<ListItemText primary='התנתק' />
					</ListItem>
				</DelayLink>
			</List>
		</div>
	  );

	render() {
		let sideMenu = this.fullList();

		return (
			<AppBar position="static">
				<Toolbar>
				  <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => this.toggleDrawer(true)}>
					<MenuIcon />
				  </IconButton>
				  <IconButton edge="start" color="inherit" aria-label="menu" style={{'marginRight': 'auto'}}>
					<NotificationsIcon />
				  </IconButton>
				</Toolbar>
				<Drawer open={this.state.isMenuOpen} onClose={() => this.toggleDrawer(false)}>
					{sideMenu}
				</Drawer>
			</AppBar>
		);
	}
}

export default MenuToolbar;
