import React, { Component } from 'react'

import steambot from '../api/steambot';

export default class App extends Component {

    state = {};

    onRefresh = async () => {
        const res = await steambot
            .get('https://steamcommunity.com/inventory/76561199033120983/570/2?l=english&count=5000');
        console.log(res)
    }

    render() {
        return (
            <div>
                <h1>abc</h1>
                {/* {this.onRefresh()} */}
            </div>
        )
    }
}
