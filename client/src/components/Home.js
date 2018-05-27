import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            categories: []
        }
        
    }
    componentWillMount() {
        fetch('/categories')
        .then(res=>res.json())
        .then(result=>this.setState({categories: result}))
         
    }
    render () {
        return (
            <div className="container">
                <center>
                    <h1>Welcome</h1>
                    <p>Please select your category.</p>
                </center>
                
                {
                    
                    this.state.categories.map(
                        res => {
                            return (<Link key={res.id} to={'/contents/'+res.toRoute} style={{ textDecoration: 'none' }}>
                                <div className='catItem'>
                                    <h1>{res.name}</h1>
                                </div>
                            </Link>)
                        }
                    )
                }
            </div>
        )  
    }  
}