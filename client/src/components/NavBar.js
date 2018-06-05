import React from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            userPass: ''
        }
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
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    New
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className='nav-link' to='/addContent'>Content</Link>
                                    <Link className='nav-link' to='/addCategory'>Category</Link>
                                </div>
                            </li>
                            <Link className='nav-link' to='/aboutUs'>About us</Link>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}