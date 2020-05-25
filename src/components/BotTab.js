import React, { Component } from 'react'
import { Container, Pagination, Form, Button, Header } from 'semantic-ui-react';
import ItemList from './ItemList'

export default class BotTab extends Component {

    state = { result: [], found: 0, activePage: 0, url: ''};

    onSubmit = () => {
        let code = 76561198111434579;
        let url = 'https://cors-anywhere.herokuapp.com/https://steamcommunity.com/inventory/'+ code +'/570/2?l=english&count=5000'
        this.onRefresh(code);
    }

    onRefresh = async (code) => {
        await fetch('https://cors-anywhere.herokuapp.com/https://steamcommunity.com/inventory/76561198111434579/570/2?l=english&count=5000')
        .then(res => res.json())
        .then(data => {
            data.descriptions.forEach(e =>
                {
                    return {
                        name: e.name,
                        icon_url: e.icon_url
                    }
                });
            this.setState({ result: data.descriptions})
            })
        .catch(err => console.log(err))
    }

    handlePaginationChange = (e, {activePage}) => {
        this.setState({ activePage }, function() {
            console.log(activePage)
            this.onRefresh();
        })
    }

    render() {
        return (
            <div>
                <Container>
                    <Form>
                        <Form.Field>
                            <Header as='h3'>Điền ID 64</Header>
                            <label>Bot 1: </label>
                            <input placeholder='bot1' />
                            <label>Bot 2: </label>
                            <input placeholder='bot2' />
                            <label>Bot 3: </label>
                            <input placeholder='bot3' />
                            <br />
                            <Button type='submit' onClick={this.onSubmit}>Submit</Button>
                        </Form.Field>
                    </Form>
                    <br />
                    <Pagination activePage={this.state.activePage} onPageChange={this.handlePaginationChange} totalPages={3} />
                    <ItemList result={this.state.result}/>
                </Container>
            </div>
        )
    }
}
