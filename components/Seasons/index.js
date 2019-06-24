import React, { PureComponent } from 'react';
import { View, ScrollView } from 'react-native';
import { Button, Text } from 'native-base';
import style from './style';

class Seasons extends PureComponent {

    constructor(props){
        super(props);
       
        this.state = {
          loading: true,
          data: {
            seasons: []
          }
        };
    
        this.getData = this.getData.bind(this);
    }

    renderSeasons() {
        let items = [];
        const { seasons } = this.state.data;
        for (let i = 0; seasons.length > i; i++) {
            const years = seasons[i].season;
            items.push(
                <Button
                    style={style.button}
                    onPress={() => this.props.handleClick(years)}
                    key={`season-${years}`}>
                    <Text>
                        {years}
                    </Text>
                </Button>
            );
        }

        return items;
    }

    getData() {
        let limit = 60;
        fetch(`http://ergast.com/api/f1/seasons.json?limit=${limit}`)
          .then((response) => response.json())
          .then((data) => {
            this.setState({ 
              data: {
                  seasons: data.MRData.SeasonTable.Seasons
              },
              loading: false
            })
          })
    }

    componentDidMount(){
        this.getData();
    }

    render() {
        return (
            <ScrollView>
                <View style={style.container}>
                    {this.renderSeasons()}
                </View>
            </ScrollView>
        );
    }
}

export default Seasons;