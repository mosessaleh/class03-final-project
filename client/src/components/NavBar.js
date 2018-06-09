import React from 'react';
import { Link } from 'react-router-dom';


if (!localStorage.getItem('logged')) {
    localStorage.setItem('logged','visitor')
}
export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            userPass: '',
            loggedAs: localStorage.getItem('logged'),
            loading: false
        }
        this.login = this.login.bind(this)
        this.logout = this.logout.bind(this)
        console.log(window.location.pathname)
    }
    login() {
        this.setState({loading:true})
        setTimeout(
            function() {
                localStorage.setItem('logged','admin')
                this.setState({loggedAs: localStorage.getItem('logged'),loading: false})
            }.bind(this), 2000);
    }
    logout() {
        this.setState({loading:true})
        setTimeout(
            function() {
                localStorage.setItem('logged','visitor');
            this.setState({loggedAs: localStorage.getItem('logged'),loading: false})
            }.bind(this), 1000);
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Let's learn</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <Link className='nav-link' to='/'>Home</Link>
                            <Link className='nav-link' to='/contents'>Contents</Link>
                            {
                                this.state.loggedAs != 'visitor'
                                ?   <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            New
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <Link className='nav-link' to='/addContent'>Content</Link>
                                            <Link className='nav-link' to='/addCategory'>Category</Link>
                                        </div>
                                    </li>
                                : ''
                            }
                            
                            <Link className='nav-link' to='/aboutUs'>About us</Link>
                        </ul>
                        
                        <ul className="navbar-nav">
                            {
                                (localStorage.getItem('logged') == 'user' || localStorage.getItem('logged') == 'admin')
                                ? (window.location.pathname == '/addContent' || window.location.pathname == '/addCategory' ) ? null : <a className='nav-link' onClick={this.logout} href='#'>logout</a>
                                : <a className='nav-link' onClick={this.login} href='#'>Admin login</a>
                            }
                        </ul>
                        
                    </div>
                </nav>
                <label className='nav-link' style={{width:'100%',textAlign:'center'}}>Welcome Mr. <b>{this.state.loggedAs}</b> {this.state.loggedAs == 'visitor' && ' login to add contents'}</label>
                {
                    this.state.loading ? <div className="loadingDiv"><img className="loading" src="http://www2.deq.idaho.gov/air/AQIPublic/Content/icons/spinner.gif" /></div> : ''
                }
            </div>
        )
    }
}