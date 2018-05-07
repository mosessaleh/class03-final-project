import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './../../styles/App.css';

import Home from './../../Routes/Home';
import Categories from './../../components/Categories';

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
    .then(items => this.setState({categories: items}));
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
            <div className='container'>
              <Route path='/' exact render={props => <Home catLength={this.state.categories.length}/>} />
              <Route path='/categories' exact render={props => <Categories itemsList={this.state.categories}/>} />
            </div>
        </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
