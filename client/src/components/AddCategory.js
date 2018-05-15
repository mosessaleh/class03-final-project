import React from 'react';
import {Link} from 'react-router-dom';

export default class AddCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            toRoute: ''
        }
        this.changeInput = this.changeInput.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    submitForm(event) {
        if (this.state.title == '' || this.state.category == '' || this.state.difficulty == '' || this.state.type == '' || this.state.link == '' || this.state.description == '')  return
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
                </form><br />
                <Link to=''>Edit a category</Link>
            </div>
        )
    }
}