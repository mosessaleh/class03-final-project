import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Router, Switch} from 'react-router-dom';
import './../../styles/App.css';

import Home from './../../components/Home';
import NavBar from './../../components/NavBar';
import Contents from './../../components/Contents';
import AboutUs from './../../components/AboutUs';
import TypeView from './../../components/TypeView';
import AddContent from './../../components/AddContent';
import ContentView from './../../components/ContentView';
import AddCategory from './../../components/AddCategory';

// Just some contents
// one more
class App extends Component {

  render() {
    
    return (
      <div className='nav'>
        
        <BrowserRouter> 
          <div>
            <NavBar />
            <Switch>
                <Route path='/' exact render={(props) => <Home {...props}/>} />
                <Route path='/addContent' exact render={(props) => <AddContent {...props} />} />
                <Route path='/addCategory' exact render={(props) => <AddCategory {...props} />} />
                <Route path='/contents' exact render={(props) => <Contents {...props}/>} />
                <Route path='/aboutUs' exact render={(props) => <AboutUs {...props} />}/>
                <Route path='/contents/:type' exact render={(props) => <TypeView {...props} />}/>
                <Route path='/contents/:type/:id' exact render={(props) => <ContentView {...props} />}/>
            </Switch>
          </div>
          
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
