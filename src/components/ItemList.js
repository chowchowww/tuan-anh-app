import React from 'react';
import Item from './Item';
import {Card} from 'semantic-ui-react'

const ItemList = props => {
    const items = props.result.map(
        (res) => <Item name={res.name} icon={res.icon_url} />
    );
    return <div>{items}</div>
}

export default ItemList;