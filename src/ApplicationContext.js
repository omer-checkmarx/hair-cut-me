import React from 'react';
import MapImage from './Images/map.png';

export const ApplicationContext = React.createContext();

class AppContextProvider extends React.Component {
    constructor(props){
        super(props);
        let barberImage = <img src={MapImage} width="320" alt="devuse"/>;
		

        this.state = {
            user: {
                Id: "1121",
                Username: "OmerD",
                Name: "עומר דיין"
            },
            barber: {
				name: "רון אליהו",
				address: "המרגלית 46 קרית גת",
				detail: "רון אליהו ספר מגיל 14, עובד בעיצוב שיער כבר למעלה מ20 שנה בעיר קרית גת. את המספרה הקים אבא שלו כשרון היה ילד ומאז כבר ידע שזה המקצוע שרוצה לעסוק בו כל חיו. רון מספר למעלה מ300 אנשים ביחודש. עושה גם תספורות נשים וגם גברים.",
				locationImage: barberImage
			}
        }
    }

	render() {
        return (
		<ApplicationContext.Provider value={this.state}>
			{this.props.children}
        </ApplicationContext.Provider>
        );
	}
}

export default AppContextProvider;
