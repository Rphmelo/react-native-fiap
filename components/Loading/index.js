import React, {Component} from 'react';
import { Container, Content, Spinner } from 'native-base';

class Loading extends Component {

    render() {
        return (
            <Container>
                <Content>
                    <Spinner color='blue' />
                </Content>
            </Container>
        );
    }
}

export default Loading;