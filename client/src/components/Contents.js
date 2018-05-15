import React from 'react';
import { Link } from 'react-router-dom';

export default class Contents extends React.Component {
    render() {
        return (
            <div className="container">
            {console.log(this.props.itemsList)}
                    {
                        
                        this.props.itemsList.map(
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
            </div>
            
        )
    }
}