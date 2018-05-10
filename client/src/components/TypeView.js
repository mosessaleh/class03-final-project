import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class TypeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'category':[]
        }
    } 
    componentDidMount() {
        fetch('/categories/'+this.props.match.params.type)
        .then(res => res.json())
        .then(item => this.setState({category: item}));
    }
    render() {
        return (
            <div className="container">
                <center>
                    <h1>Items for caregoty: {this.props.match.params.type}</h1> 
                </center>
                {
                    this.state.category.map(
                        (item) => (
                            <div key={item.id} className='categoryDiv'>
                                <div className='leftDiv'>
                                    <label style={{fontSize:'25px'}}>{item.title}</label>
                                    <p>{item.description.substr(0, 30)+' ...'}<Link to={'/categories/'+this.props.match.params.type+'/'+item.id}>Read more</Link></p>
                                </div>
                                <div className='rightDiv'>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Readed</td>
                                                <td>Like</td>
                                                <td>Unlike</td>
                                            </tr>
                                            <tr>
                                                <td>30</td>
                                                <td>{item.voteUp}</td>
                                                <td>{item.voteDown}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        )
    }
}