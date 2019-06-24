import Home from './screens/home';
import Races from './screens/races';
import RacesDetails from './screens/details/races-details';

import Selection from './screens/selection';

import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

const AppNavigator = createStackNavigator (
    {
      Home: {
        screen: Home
      },
      Races: {
        screen: Races
      },
      Selection: {
        screen: Selection
      },
      RacesDetails: {
        screen: RacesDetails
      }
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#333'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold' 
        }
      }
    }
  
);

export default createAppContainer(AppNavigator);