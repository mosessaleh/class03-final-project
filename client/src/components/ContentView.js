import React from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';
import SweetAlert from 'react-bootstrap-sweetalert';

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
  Modal.setAppElement('#root')
export default class ContentView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'item':[],
            'toUpdate': [],
            'modalIsOpen': false,
            'categories': [],
            loading: false,
            loggedAs: localStorage.getItem('logged'),
            title: '',
            category: '',
            difficulty: '',
            type: '',
            link: '',
            description: ''
        }
        this.like = this.like.bind(this);
        this.likeIt = this.likeIt.bind(this);
        this.unLikeIt = this.unLikeIt.bind(this);
        this.isReaded = this.isReaded.bind(this);
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.editContentConfirm = this.editContentConfirm.bind(this)
        this.changeToEdit = this.changeToEdit.bind(this)
        }
    changeToEdit(event) {
        // console.log(event.target.value)
        this.setState({[event.target.name]: event.target.value})
        console.log(this.state[event.target.name])
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
        setInterval(() => {
            this.setState({loggedAs: localStorage.getItem('logged')})   
        }, 500);
        this.setState({loading: true})
        var id = this.props.match.params.id;
        var type = this.props.match.params.type;
        fetch('/contents/'+type+'/'+id)
        .then(res => res.json())
        .then(item1 => this.setState({
            item: item1,
            title: item1[0].title,
            category: item1[0].category,
            difficulty: item1[0].difficulty,
            type: item1[0].type,
            link: item1[0].link,
            description: item1[0].description,
        }))
        fetch('/categories')
        .then(res=>res.json())
        .then(cat=>this.setState({categories: cat,loading:false}))
        
    }
    componentWillUnmount() {
        this.isReaded();
    }
    like(send) {
        this.setState({loading:true})
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
    deleteFile() {
        var id = this.props.match.params.id;
        this.setState({loading: true})
        fetch('/removeContent/'+id, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: ''
        }).then(function(response) {
          if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
            return response.json();
        }).then(function(data) {    
            if(data.success == true){
               window.location.href='/'
            }
        }).catch(function(err) {
            console.log(err)
        });
    }
    cancelDelete() {
        console.log('Canceled')
    }
    editContentConfirm() {
        var id = this.props.match.params.id;
        var data = {
            id: id,
            title: this.state.title,
            category: this.state.category,
            difficulty: this.state.difficulty,
            type: this.state.type,
            link: this.state.link,
            description: this.state.description
        }
        fetch('/editContent', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(function(response) {
          if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
            return response.json();
        }).then(function(data) {   
            if(data.success == true){
                window.location.href = '/contents/'+this.props.match.params.type+'/'+id
            }
        }.bind(this)).catch(function(err) {
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
                                            <div>
                                                <button onClick={this.likeIt} >Like it ({res.voteUp})</button>{' '}
                                                <button onClick={this.unLikeIt} >Unlike it ({res.voteDown})</button>
                                            </div>
                                    
                                </center>
                                <div className='leftSide'>
                                    <p>Caregory: <b>{res.category}</b></p>
                                    <p>Type: <b>{res.type}</b></p>
                                    <p>Difficulty: <b>{res.difficulty}</b></p><br/><br/>
                                    <p><a target='_blank' href={res.link}>Learn more</a></p>
                                </div>
                                <div className='rightSide'>
                                    <p>{res.description}</p>
                                </div>
                                {
                                    this.state.loggedAs != 'visitor'
                                    ?
                                        <center>
                                            <button onClick={this.openModal}>Edit</button>{' '}
                                            <button onClick={
                                            () => {
                                                (window.confirm('Are you sure want to delete this content?')) ? this.deleteFile() : this.cancelDelete()
                                            }
                                            }>
                                                Remove
                                            </button>
                                        </center>
                                    :
                                    null
                                }
                               
                                
                                <Modal
                                    isOpen={this.state.modalIsOpen}
                                    onAfterOpen={this.afterOpenModal}
                                    onRequestClose={this.closeModal}
                                    style={customStyles}
                                    contentLabel="Example Modal"
                                    >
                                    <h2 ref={subtitle => this.subtitle = subtitle}>Edit {res.title}</h2>
                                    <p>Make sure to fill all fields.</p><br/>
                                    <form onSubmit={this.editContentConfirm}> 
                                        <table>
                                            <tbody>
                                            <tr>
                                                <td><label>Title: </label></td>
                                                <td><input name="title" defaultValue={res.title} onChange={this.changeToEdit} type='text' required /></td>
                                            </tr>
                                            <tr>
                                                <td><label>Category: </label></td>
                                                <td>
                                                <select name="category" defaultValue={res.category} onChange={this.changeToEdit}>
                                                    <option value=""></option>
                                                    {
                                                        this.state.categories.map(
                                                            res=> {
                                                                return (
                                                                    <option key={res.id} value={res.toRoute} >{res.name}</option>
                                                                )
                                                            }
                                                        )
                                                    }
                                                </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><label>Difficulty: </label></td>
                                                <td>
                                                    <select name="difficulty" defaultValue={res.difficulty} onChange={this.changeToEdit}>
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
                                                    <select name="type" defaultValue={res.type} onChange={this.changeToEdit}>
                                                        <option value=""></option>
                                                        <option value="video">Video</option>
                                                        <option value="audio">Audio</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><label>Link: </label></td>
                                                <td><input name="link" type='text' defaultValue={res.link} onChange={this.changeToEdit} /></td>
                                            </tr>
                                            <tr>
                                                <td><label>Description: </label></td>
                                                <td> <textarea className='editTexterea' name="description" onChange={this.changeToEdit} defaultValue={res.description}/></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </form>
                                    <br /><hr />
                                    <button onClick={this.closeModal}>close</button>
                                    <button onClick={this.editContentConfirm}>Edit this</button>
                                    
                                </Modal>
                            </div>
                        )
                    )
                }
                {
                    this.state.loading ? <div className="loadingDiv"><img className="loading" src="http://www2.deq.idaho.gov/air/AQIPublic/Content/icons/spinner.gif" /></div> : ''
                }
                
            </div>
            
        )
        
    }
    
}
