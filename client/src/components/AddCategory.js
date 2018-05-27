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
  Modal.setAppElement('#root')

export default class AddCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            toRoute: '',
            modalIsOpen: false,
            categories: []
        }
        this.changeInput = this.changeInput.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.selectCat = this.selectCat.bind(this);
    }
    componentDidMount() {
        fetch('/categories')
        .then(res=>res.json())
        .then(cat => this.setState({categories: cat}))
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#000';
    }

    closeModal() {
        this.setState({modalIsOpen: false,name:"",toRoute:""});
    }

    submitForm(event) {
        if (this.state.name == '' || this.state.toRoute == '')  return alert('Please fill all fields')
        event.preventDefault()
        var data = {
            name: this.state.name,
            toRoute: this.state.toRoute
        }
        fetch('/newCategory', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(function(response) {
          if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
            return response.json();
        }).then(function(data) {
            console.log(data)    
            if(data.success == true){
               window.location.href = '/'; 
            }
            if(data.success == false){
                alert('This category is already exist'); 
             }
        }).catch(function(err) {
            console.log(err)
        });
    }
    changeInput(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    selectCat(event) {
        this.setState({name: event.target.name, toRoute: event.target.value}); 
    }
    render() {
        return (
            <div className='container'>
                <center>
                    <h1>Add new category</h1>
                </center>
                <form onSubmit={this.submitForm} className="addForm">
                    <table>
                        <tbody>
                            <tr>
                                <td><label>Category name: </label></td>
                                <td><input name="name" onChange={this.changeInput} type='text' /></td>
                            </tr>
                            <tr>
                                <td><label>Category tag: </label></td>
                                <td><input name="toRoute" type='text' onChange={this.changeInput} /></td>
                            </tr>
                        </tbody>
                    </table>
                    <input type="submit" value='Add category' />
                </form>

            </div>
        )
    }
}