import React from 'react';
import { StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-navigation'
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';
import Loading from './../../components/Loading';

export default class Home extends React.Component {
  constructor(props){
    super(props);
   
    this.state = {
      loading: true,
      data: {
        Circuit: {}
      }
    };

    this.getData = this.getData.bind(this);
  }

  getData(season) {
    fetch(`http://ergast.com/api/f1/${season}.json`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ 
          data: data.MRData.RaceTable.Races,
          loading: false
        })
      })
  }

  componentDidMount(){
      const { navigation } = this.props;
      const data = navigation.getParam('data');
      this.getData(data.season);
  }

  render() {
    const { loading, data } = this.state;
    const { Circuit } = data;
    console.log(data);
    if(loading){
      return (
        <Loading/>
      );
    } else {
      return (
        <Container>
            <Header />
            <Content padder>
              <Card>
                <CardItem header bordered>
                  <Text>{Circuit.circuitName}</Text>
                </CardItem>
                <CardItem bordered>
                  <Body>
                    <Text>
                      NativeBase is a free and open source framework that enable
                      developers to build
                      high-quality mobile apps using React Native iOS and Android
                      apps
                      with a fusion of ES6.
                    </Text>
                  </Body>
                </CardItem>
                <CardItem footer bordered>
                  <Text>GeekyAnts</Text>
                </CardItem>
              </Card>
            </Content>
        </Container>
      );
    }
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