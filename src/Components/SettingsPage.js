import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Logo from './Logo.js';
import MenuToolbar from './MenuToolbar.js';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import EditIcon from '@material-ui/icons/Edit';
import ErrorIcon from '@material-ui/icons/Error';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PaletteIcon from '@material-ui/icons/Palette';
import DelayLink from 'react-delay-link';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

class SettingsPage extends React.Component{
	render() {
		const { classes } = this.props;
		return (
			<React.Fragment>
				<MenuToolbar></MenuToolbar>
				<div className={classes.page}>
					<h1>הגדרות</h1>
					<ExpansionPanel>
						<ExpansionPanelSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
						>
							<ListItemIcon>
								<PaletteIcon />
							</ListItemIcon>
							
							<Typography variant="h5">התאם אישית</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
						<Typography>
							החלף צבעי אפליקציה
						</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel>
						<ExpansionPanelSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"	>
							<ListItemIcon>
								<EditIcon />
							</ListItemIcon>
							<Typography variant="h5">פרטים אישיים</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
						<Typography>
							שינוי שם
							שינוי ספר
						</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel>
						<ExpansionPanelSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"	>
							<ListItemIcon>
								<ErrorIcon />
							</ListItemIcon>							
							<Typography variant="h5">פרטיות</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
						<Typography>
							שנה את הסיסמה
						</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<List>
						<Divider />
						<DelayLink delay={250} to='/'>
							<ListItem key="Logout" button>
								<ListItemIcon>
									<ExitToAppIcon />
								</ListItemIcon>
								<ListItemText primary="התנתק" />
							</ListItem>
						</DelayLink>
						<Divider />
					</List>
				</div>
				<footer className="App-footer">
					<Logo variant="little" />
				</footer>
			</React.Fragment>
		);
	}
}

export default withStyles(styles)(SettingsPage);
