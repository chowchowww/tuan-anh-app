import React, { Component } from 'react';
import { Menu, Container, Header } from 'semantic-ui-react';
import BotTab from './BotTab';

class App extends Component {

    state = {};

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
                    <BotTab />
                </Container>
            </div>
        )
    }
};

export default App;
