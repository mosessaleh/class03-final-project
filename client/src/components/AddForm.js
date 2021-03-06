import React from 'react';


export default class AddForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            category: '',
            difficulty : '',
            type: '',
            link: '',
            description:'',
            categoriesList:[],
            loading: false
          }
          this.submitForm = this.submitForm.bind(this);
          this.changeData = this.changeData.bind(this);
    }
    componentDidMount() {
        fetch('categories')
        .then(res=>res.json())
        .then(result=>this.setState({categoriesList: result}))
    }
    submitForm(event) {
        if (this.state.title == '' || this.state.category == '' || this.state.difficulty == '' || this.state.type == '' || this.state.link == '' || this.state.description == '')  return alert('Please fill all fields')
        event.preventDefault()
        var data = {
            category: this.state.category,
            difficulty: this.state.difficulty,
            link: this.state.link,
            title: this.state.title,
            type: this.state.type,
            description:this.state.description
        }
        this.setState({loading: true})
        fetch('/newContent', {
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
                this.setState({loading: false})
                window.location.href = '/contents/'+data.category; 
            }
        }.bind(this)).catch(function(err) {
            console.log(err)
        });
        
    }
    changeData(event) {
        this.setState({[event.target.name]: event.target.value}); 
    }
    render(){
        return(
            <form onSubmit={this.submitForm} className="addForm">
                <table>
                    <tbody>
                    <tr>
                        <td><label>Title: </label></td>
                        <td><input name="title" className="form-control" onChange={this.changeData} type='text' /></td>
                    </tr>
                    <tr>
                        <td><label>Category: </label></td>
                        <td>
                        <select name="category" className="form-control" onChange={this.changeData}>
                            <option value=""></option>
                            {
                                this.state.categoriesList.map(
                                    res=>{
                                        return <option key={res.id} value={res.toRoute}>{res.name}</option>
                                    }
                                )
                            }
                        </select>
                        </td>
                    </tr>
                    <tr>
                        <td><label>Difficulty: </label></td>
                        <td>
                            <select name="difficulty" className="form-control" onChange={this.changeData}>
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
                            <select className="form-control" name="type" onChange={this.changeData}>
                                <option value=""></option>
                                <option value="video">Video</option>
                                <option value="audio">Audio</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><label>Link: </label></td>
                        <td><input name="link" className="form-control" onChange={this.changeData} type='text' /></td>
                    </tr>
                    <tr>
                        <td><label>Description: </label></td>
                        <td> <textarea className="form-control" onChange={this.changeData} name="description" /></td>
                    </tr>
                    </tbody>
                </table><br />
                <input type="submit" className="btn btn-success" disabled={ this.state.title =='' || this.state.difficulty == '' || this.state.type =='' || this.state.link ==''||this.state.category =='' || this.state.description == '' ? 'disabled' : '' } value='Add content' />
                {
                    this.state.loading ? <div className="loadingDiv"><img className="loading" src="http://www2.deq.idaho.gov/air/AQIPublic/Content/icons/spinner.gif" /></div> : ''
                }
            </form>
            
        )
    }
}