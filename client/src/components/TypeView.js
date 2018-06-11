import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class TypeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'content':[],
            loading: false
        }
        
    } 
    componentDidMount() {
        this.setState({loading: true})
        fetch('/contents/'+this.props.match.params.type)
        .then(res => res.json())
        .then(item => this.setState({content: item, loading: false}));
    }
    render() {
        return (
            <div className="container">
                <center>
                    <h1>Items</h1>
                    {
                        this.state.content == '' && 'No items to show'
                    }
                </center>
                {
                    this.state.content.map(
                        (item) => (
                            <div key={item.id} className='categoryDiv'>
                                <div className='leftDiv'>
                                    <label style={{fontSize:'25px'}}><Link style={{textDecoration:'none'}} to={'/contents/'+item.category+'/'+item.id}>{item.title}</Link></label>
                                    <p>{item.description.substr(0, 30)+' ...'}<Link to={'/contents/'+this.props.match.params.type+'/'+item.id}>Read more</Link></p>
                                </div>
                                <div className='rightDiv'>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i class="fas fa-eye" title='Readed'></i></td>
                                                <td><i class="fas fa-thumbs-up" title='Like'></i></td>
                                                <td><i class="fas fa-thumbs-down" title='Unlike'></i></td>
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