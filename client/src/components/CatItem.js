import React from 'react';
import { Link } from 'react-router-dom';

export default function CatItem(name,tag) {
    return (
        <Link to={'/categories/'+tag} style={{ textDecoration: 'none' }}>
            <div className='catItem'>
                <h1>{name}</h1>
            </div>
        </Link>
    )
}