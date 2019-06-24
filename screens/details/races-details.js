import React from 'react';
import { Container, Content, Card, Text } from 'native-base';

export default class RacesDetail extends React.Component {
  constructor(props){
    super(props);
   
    this.state = {
      race: {}
    };
  }

  componentDidMount(){
    const { navigation } = this.props;
    this.setState({
      race: navigation.getParam('data')
    });
  }

  render() {
    const { race } = this.state;
    return (
        <Container>
            <Content padder>
              <Card>
              <Text>Season: {race.season}</Text>
              <Text>Race Name: {race.raceName}</Text>
              <Text>Round: {race.round}</Text>
              </Card>
            </Content>
        </Container>
      );
    }
}