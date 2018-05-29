import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Router, Switch} from 'react-router-dom';
import './../../styles/App.css';

import Home from './../../components/Home';
import Contents from './../../components/Contents';
import AboutUs from './../../components/AboutUs';
import TypeView from './../../components/TypeView';
import AddContent from './../../components/AddContent';
import ContentView from './../../components/ContentView';
import AddCategory from './../../components/AddCategory';

// Just some contents
// one more
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: [],
      loading: false
    }
  }
  componentDidMount() {
    this.setState({loading: true})
    fetch('/contents')
    .then(res => res.json())
    .then(items => this.setState({contents: items, loading: false}));
    
  }
  render() {
    
    return (
      <div className='nav'>
        
        <BrowserRouter> 
          <div>
            <ul className='navItems'>  
              <Link className='listItem' to='/'>Home</Link>
              <Link className='listItem' to='/addContent'>Add new content</Link>
              <Link className='listItem' to='/addCategory'>Add new category</Link>
              <Link className='listItem' to='/contents'>All contents</Link>
              <Link className='listItem' to='/aboutUs'>About us</Link>
            </ul>
            <Switch>
                <Route path='/' exact render={(props) => <Home {...props} catLength={this.state.contents.length}/>} />
                <Route path='/addContent' exact render={(props) => <AddContent {...props} />} />
                <Route path='/addCategory' exact render={(props) => <AddCategory {...props} />} />
                <Route path='/contents' exact render={(props) => <Contents {...props} itemsList={this.state.contents}/>} />
                <Route path='/aboutUs' exact render={(props) => <AboutUs {...props} />}/>
                <Route path='/contents/:type' exact render={(props) => <TypeView {...props} />}/>
                <Route path='/contents/:type/:id' exact render={(props) => <ContentView {...props} />}/>
            </Switch>
            {
              this.state.loading ? <div className="loadingDiv"><img className="loading" src="http://www2.deq.idaho.gov/air/AQIPublic/Content/icons/spinner.gif" /></div> : ''
            }
          </div>
          
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
