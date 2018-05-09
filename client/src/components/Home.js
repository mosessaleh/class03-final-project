import React from 'react';
import { Link } from 'react-router-dom';
import CatItem from './CatItem';

export default class Home extends React.Component {
    render () {
        return (
            <div className="container">
                <center>
                    <h1>Welcome</h1>
                    <p>Please select your category.</p>
                </center>
                {CatItem('HTML','html')}
                {CatItem('CSS','css')}
                {CatItem('JAVA SCRIPT','js')}
            </div>
        )  
    }  
}