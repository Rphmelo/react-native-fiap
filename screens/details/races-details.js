import React from 'react';
import { FlatList} from 'react-native';
import { Container, Content, Card, CardItem, Text, Button } from 'native-base';
import Loading from '../../components/loading';

export default class RacesDetail extends React.Component {
  constructor(props){
    super(props);
   
    this.state = {
      loading: true,
      data: {}
    };

    this.getData = this.getData.bind(this);
    this.renderItemList = this.renderItemList.bind(this);
  }

  componentDidMount(){
      const { navigation } = this.props;
      const data = navigation.getParam('data');
      this.getData(data.season);
  }

  renderItemList(item){
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
                <Text>Resultados:</Text>   
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => `${item.season + index}`}
                    renderItem={({item}) => this.renderItemList(item)}
                />
              </Card>
            </Content>
        </Container>
      );
    }
  }
}