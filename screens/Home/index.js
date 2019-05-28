import React from 'react';
import { StyleSheet} from 'react-native';
import Seasons from '../../components/Seasons';
import { SafeAreaView } from 'react-navigation'

export default class Home extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      data: {}
    };

    this.navigateToRaces = this.navigateToRaces.bind(this);
  }

  static navigationOptions = () => {
    return {
      title: 'Home'
    }
  }

  navigateToRaces(season) {
    this.props.navigation.navigate('Races', {
      data: {
        season
      }
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Seasons handleClick={ this.navigateToRaces }></Seasons>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});