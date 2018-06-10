import React from 'react';
import AddForm from './AddForm';

export default class AddContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedAs: localStorage.getItem('logged')
        }
    }
    render() {
        return (
            <div className="container">
                {
                    this.state.loggedAs != 'visitor'
                    ?   
                        <div>
                            <center><h1>Add new content</h1></center>
                            <AddForm />
                        </div>
                    : window.location.href='/'
                }
                
            </div>
        )
    }
}