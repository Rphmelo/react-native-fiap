import React from 'react';
import { StyleSheet} from 'react-native';
import Seasons from '../../components/seasons';
import { SafeAreaView } from 'react-navigation'

export default class Home extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      data: {}
    };

    this.navigateToSelection = this.navigateToSelection.bind(this);
  }

  static navigationOptions = () => {
    return {
      title: 'Home'
    }
  }

  navigateToSelection(season) {
    this.props.navigation.navigate('Selection', {
      data: {
        season
      }
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Seasons handleClick={ this.navigateToSelection }></Seasons>
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