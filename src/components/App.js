import React, { Component } from 'react';
import steambot from '../api/steambot';
import { Menu, Container, Header } from 'semantic-ui-react';

class App extends Component {

    state = {};

    onRefresh = async () => {
        const res = await steambot
            .get('https://steamcommunity.com/inventory/76561199033120983/570/2?l=english&count=5000');
        console.log(res)
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state

        return (
            <div>
                <Container>
                    <Header as='h1'>Tuấn Anh</Header>
                    <Menu>
                        <Menu.Item
                            name='home'
                            active={activeItem === 'home'}
                            onClick={this.handleItemClick}
                        >
                            Home
                        </Menu.Item>
                        <Menu.Item
                            name='bot'
                            active={activeItem === 'bot'}
                            onClick={this.handleItemClick}
                        >
                            Bot's inventory
                        </Menu.Item>
                    </Menu>
                </Container>
            </div>
        )
    }
};

export default App;
