import React from 'react';
import { StyleSheet, FlatList} from 'react-native';
import { Container, Content, Card, CardItem, Text, Button } from 'native-base';
import Loading from '../../components/loading';

export default class Home extends React.Component {
  constructor(props){
    super(props);
   
    this.state = {
      loading: true,
      data: {}
    };

    this.getData = this.getData.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  getData(season) {
    fetch(`http://ergast.com/api/f1/${season}/races.json`)
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

  renderItem(item){
      return (
        <CardItem footer bordered>
          <Button
              onPress={() => this.navigateToDetail(item)}
              >
              <Text>
                  {item.raceName}
              </Text>
          </Button>
        </CardItem>
      )
  }

  render() {
    const { loading, data } = this.state;
    if(loading){
      return (
        <Loading/>
      );
    } else {
      return (
        <Container>
            <Content padder>
              <Card>  
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => `${item.season + index}`}
                    renderItem={({item}) => this.renderItem(item)}
                />
              </Card>
            </Content>
        </Container>
      );
    }
  }
}