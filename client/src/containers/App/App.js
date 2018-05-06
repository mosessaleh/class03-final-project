import React, { Component } from 'react';
import logo from './logo.svg';
import Categories from '../../components/Categories';
import './../../styles/App.css';


// Just some contents
// one more
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'categories': []
    }
  }
  componentDidMount() {
    fetch('/categories')
    .then(res => res.json())
    .then(items => this.setState({ categories: items }))
}
  render() {
    return (
      
      <div className="App">
        <Categories itemsList={this.state.categories}/>
      </div>
    );
  }
}

export default App;
