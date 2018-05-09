import React from 'react';

export default class Categories extends React.Component {
    
    render() {
        return (
            <div className="container">
                <ul>
                    {this.props.itemsList.map(
                        item => <li key={item.id}>{item.title}</li>
                    )}
                </ul>
            </div>
            
        )
    }
}