import React from 'react';

export default class Categories extends React.Component {
    
    render() {
        return (
            <ul>
                {console.log(this.props.itemsList)}
                {this.props.itemsList.map(
                    item => <li key={item.id}>{item.title}</li>
                )}
            </ul>
        )
    }
}