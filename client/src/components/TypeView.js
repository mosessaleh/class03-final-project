import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class TypeView extends React.Component {
    constructor(props) {
        super(props);   
    } 
    render() {
        return (
            <div className="container">
                <h2>This is: {this.props.match.params.type}</h2>
            </div>
        )
    }
}