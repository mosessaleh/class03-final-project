import React from 'react';
import {Link} from 'react-router-dom';

export default class CategoryView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'item':[],
        }
    }
    componentDidMount() {
        var id = this.props.match.params.id;
        var type = this.props.match.params.type;
        fetch('/categories/'+type+'/'+id)
        .then(res => res.json())
        .then(item1 => this.setState({item: item1}))
        
    }
    render() {
        return(
            <div className='container'>
                {
                    this.state.item.map(
                        (res) => (
                            <div key={res.id}>
                                <center>
                                    <h1>{res.title}</h1>
                                    <Link to=''>Edit</Link>{' ------- '}
                                     <Link to=''>Remove</Link>
                                </center>
                                <br /><br />
                                <p>Caregory: <b>{res.category}</b></p>
                                <p>Type: <b>{res.type}</b></p>
                                <p>Difficulty: <b>{res.difficulty}</b></p>
                                <b>Description:</b><br />
                                <p>{res.description}</p>
                                <p>You can visit <a target='_blanck' href={res.link}>this</a> to get more information about this content</p>
                                <br /><br /><br /><br />
                                <button onClick={this.likeIt} >Like it ({res.voteUp})</button>{' '}
                                <button onClick={this.unLikeIt} >Unlike it ({res.voteDown})</button>
                            </div>
                        )
                    )
                }
            </div>
        )
    }
}