import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Router, Switch} from 'react-router-dom';
import './../../styles/App.css';

import Home from './../../components/Home';
import Categories from './../../components/Categories';
import AboutUs from './../../components/AboutUs';
import TypeView from './../../components/TypeView';
import AddContent from './../../components/AddContent';
import CategoryView from './../../components/CategoryView';

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
      <div className='nav'>
        
        <BrowserRouter> 
          <div>
            <ul className='navItems'>  
              <Link className='listItem' to='/'>Home</Link>
              <Link className='listItem' to='/addContent'>Add new content</Link>
              <Link className='listItem' to='/categories'>All contents</Link>
              <Link className='listItem' to='/aboutUs'>About us</Link>
            </ul>
            <Switch>
                <Route path='/' exact render={(props) => <Home {...props} catLength={this.state.categories.length}/>} />
                <Route path='/addContent' exact render={(props) => <AddContent {...props} />} />
                <Route path='/categories' exact render={(props) => <Categories {...props} itemsList={this.state.categories}/>} />
                <Route path='/aboutUs' exact render={(props) => <AboutUs {...props} />}/>
                <Route path='/categories/:type' exact render={(props) => <TypeView {...props} />}/>
                <Route path='/categories/:type/:id' exact render={(props) => <CategoryView {...props} />}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
