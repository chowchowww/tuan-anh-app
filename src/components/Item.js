import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }

    render() {
        const { name, icon } = this.props;
        let url2 = 'https://steamcommunity-a.akamaihd.net/economy/image/'+icon;

        return (
            <div>
                <Card>
                    <Image src={url2} size='small' />
                    <Card.Content>
                        <Card.Header textAlign='left'>
                            {name}
                        </Card.Header>
                    </Card.Content>
                    {/* <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        22 Friends
                    </a>
                    </Card.Content> */}
            </Card>
            </div>
        )
    }
}
