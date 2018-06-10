import React from 'react';
import { Link } from 'react-router-dom';

export default class Contents extends React.Component {
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
            <div className="container">
                <center>
                    <h1>All contents</h1>
                    
                    {
                         this.state.contents == '' && 'No items to show'
                    }
                </center>
                    {
                        
                        this.state.contents.map(
                            (item) => (
                                <div key={item.id} className='categoryDiv'>
                                    <div className='leftDiv'>
                                        <label style={{fontSize:'25px'}}><Link style={{textDecoration:'none'}} to={'/contents/'+item.category+'/'+item.id}>{item.title}</Link></label>{' - '+ item.category}
                                        <p>{item.description.substr(0, 30)+' ...'}<Link style={{textDecoration:'none'}} to={'/contents/'+item.category+'/'+item.id}>Read more</Link></p>
                                    </div>
                                    <div className='rightDiv'>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>Readed</td>
                                                    <td>Like</td>
                                                    <td>Unlike</td>
                                                </tr>
                                                <tr>
                                                    <td>{item.readed}</td>
                                                    <td>{item.voteUp}</td>
                                                    <td>{item.voteDown}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )
                        )
                    }
                    {
                        this.state.loading ? <div className="loadingDiv"><img className="loading" src="http://www2.deq.idaho.gov/air/AQIPublic/Content/icons/spinner.gif" /></div> : ''
                    }
            </div>
            
        )
    }
}