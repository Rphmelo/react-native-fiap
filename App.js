import Home from './screens/Home';
import Races from './screens/Races';

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