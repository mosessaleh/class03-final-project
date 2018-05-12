import React from 'react';
import {Link} from 'react-router-dom';

export default class CategoryView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'item':[],
            'toUpdate': [

            ]
        }
        this.like = this.like.bind(this);
        this.likeIt = this.likeIt.bind(this);
        this.unLikeIt = this.unLikeIt.bind(this);
        this.isReaded = this.isReaded.bind(this);
        
    }
    componentDidMount() {
        var id = this.props.match.params.id;
        var type = this.props.match.params.type;
        fetch('/categories/'+type+'/'+id)
        .then(res => res.json())
        .then(item1 => this.setState({item: item1}))
        
    }
    componentWillUnmount() {
        this.isReaded();
    }
    like(send) {
        var id = this.props.match.params.id;
        var type = this.props.match.params.type;
        fetch('/categories/'+type+'/'+id, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(send)
        }).then(function(response) {
          if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
            return response.json();
        }).then(function(data) {    
            if(data.success == true){
               
            }
        }).catch(function(err) {
            console.log(err)
        });
        
    }
    likeIt() {
        this.like({like:'likeIt',vote:this.state.item[0].voteUp});
        this.componentDidMount();  
    }
    unLikeIt() {
        this.like({like:'unlikeIt',vote:this.state.item[0].voteDown});
        this.componentDidMount();  
    }
    isReaded() {
        var id = this.props.match.params.id;
        var type = this.props.match.params.type;
        fetch('/categories/'+type+'/'+id, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({isreaded:true,readed:this.state.item[0].readed})
        }).then(function(response) {
          if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
            return response.json();
        }).then(function(data) {    
            if(data.success == true){
               
            }
        }).catch(function(err) {
            console.log(err)
        });
    }
    render() {
        return(
            
            <div className='container'>
                
                <Link to={'/categories/'+this.props.match.params.type}>Back</Link>
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
