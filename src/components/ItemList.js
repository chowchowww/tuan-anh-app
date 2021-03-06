import React from 'react';
import Item from './Item';
import {Grid} from 'semantic-ui-react'

const ItemList = props => {
    const items = props.result.map(
        (res) => <Item name={res.name} icon={res.icon_url} />
    );
    return <div><Grid columns={4} centered>{items}</Grid></div>
}

export default ItemList;