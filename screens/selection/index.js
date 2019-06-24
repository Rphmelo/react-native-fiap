import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';
import style from './style';

class Selection extends PureComponent {

    constructor(props){
        super(props);

        this.state = {
            racesTitle: 'Races',
            pilotsTitle: 'Pilots',
            data: {}
        };

        this.navigateToList = this.navigateToList.bind(this);
    }
    
    static navigationOptions = () => {
        return {
            title: 'Selection'
        }
    }
    
    navigateToList(screenName) {
        const { navigation } = this.props;
        const { season } = navigation.getParam('data');
        this.props.navigation.navigate(screenName, {
            data: {
                season
            }
        });
    }

    render() {
        const { racesTitle, pilotsTitle } = this.state;
        return (
           <View style={style.container}>
                <Button
                    style={style.button}
                    onPress={() => this.navigateToList(racesTitle)}
                    >
                    <Text>
                        {racesTitle}
                    </Text>
                </Button>
                <Button
                    style={style.button}
                    onPress={() => this.navigateToList(pilotsTitle)}
                    >
                    <Text>
                        {pilotsTitle}
                    </Text>
                </Button>
                {/* <Button
                    style={style.button}
                    onPress={() => this.props.handleClick(years)}
                    key={`season-${years}`}>
                    <Text>
                        {years}
                    </Text>
                </Button> */}
            </View>
        );
    }
}

export default Selection;