import React from 'react';
import { Link } from 'react-router-dom';

export default class Categories extends React.Component {
    
    render() {
        return (
            <div className="container">
                    {
                        this.props.itemsList.map(
                            (item) => (
                                <div key={item.id} className='categoryDiv'>
                                    <div className='leftDiv'>
                                        <label style={{fontSize:'25px'}}>{item.title}</label>
                                        <p>{item.description.substr(0, 30)+' ...'}<Link to={'/categories/'+item.type+'/'+item.id}>Read more</Link></p>
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
                                                    <td>30</td>
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