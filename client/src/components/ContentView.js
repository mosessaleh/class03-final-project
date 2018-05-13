import React from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
export default class ContentView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'item':[],
            'toUpdate': [
            
            ],
            'modalIsOpen': false
        }
        this.like = this.like.bind(this);
        this.likeIt = this.likeIt.bind(this);
        this.unLikeIt = this.unLikeIt.bind(this);
        this.isReaded = this.isReaded.bind(this);
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    openModal() {
        this.setState({modalIsOpen: true});
      }
    
      afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#000';
      }
    
      closeModal() {
        this.setState({modalIsOpen: false});
      }
    componentDidMount() {
        var id = this.props.match.params.id;
        var type = this.props.match.params.type;
        fetch('/contents/'+type+'/'+id)
        .then(res => res.json())
        .then(item1 => this.setState({item: item1}))
        
    }
    componentWillUnmount() {
        this.isReaded();
    }
    like(send) {
        var id = this.props.match.params.id;
        var type = this.props.match.params.type;
        fetch('/contents/'+type+'/'+id, {
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
        fetch('/contents/'+type+'/'+id, {
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
                
                <Link to={'/contents/'+this.props.match.params.type}>Back</Link>
                {
                    
                    this.state.item.map(
                        (res) => (
                            <div key={res.id}>
                                <center>
                                    <h1>{res.title}</h1>
                                    <button onClick={this.openModal}>Edit</button>{' ------- '}
                                     <button >Remove</button>
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
                                <Modal
                                    isOpen={this.state.modalIsOpen}
                                    onAfterOpen={this.afterOpenModal}
                                    onRequestClose={this.closeModal}
                                    style={customStyles}
                                    contentLabel="Example Modal"
                                    >
                                    <h2 ref={subtitle => this.subtitle = subtitle}>Edit {res.title}</h2>
                                    <p>Make sure to fill all fields.</p><br/>
                                    <form>
                                        <table>
                                            <tbody>
                                            <tr>
                                                <td><label>Title: </label></td>
                                                <td><input name="title" value={res.title} type='text' /></td>
                                            </tr>
                                            <tr>
                                                <td><label>Category: </label></td>
                                                <td>
                                                <select name="category" value={res.category}>
                                                    <option value=""></option>
                                                    <option value="html">HTML</option>
                                                    <option value="css">CSS</option>
                                                    <option value="js">JAVASCRIPT</option>
                                                    <option value="others">Others</option>
                                                </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><label>Difficulty: </label></td>
                                                <td>
                                                    <select name="difficulty" value={res.difficulty}>
                                                        <option value=""></option>
                                                        <option value="basic">Basic</option>
                                                        <option value="intermediate">Intermediate</option>
                                                        <option value="high">High</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><label>Type: </label></td>
                                                <td>
                                                    <select name="type" value={res.type}>
                                                        <option value=""></option>
                                                        <option value="video">Video</option>
                                                        <option value="audio">Audio</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><label>Link: </label></td>
                                                <td><input name="link" type='text' value={res.link} /></td>
                                            </tr>
                                            <tr>
                                                <td><label>Description: </label></td>
                                                <td> <textarea className='editTexterea' name="description" value={res.description}/></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </form>
                                    <br /><hr />
                                    <button onClick={this.closeModal}>close</button>
                                    <button>Edit this</button>
                                    
                                </Modal>
                            </div>
                        )
                    )
                }
                
                
            </div>
            
        )
        
    }
    
}
