import React from 'react';
import AddForm from './AddForm';

export default class AddContent extends React.Component {
    render() {
        return (
            <div className="container">
                <center><h1>Add new content</h1></center>
                <AddForm />
            </div>
        )
    }
}