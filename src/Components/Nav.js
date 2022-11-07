import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <Link className='link' to='/'>
            <h3>Logo</h3>
            </Link>
            <ul className='nav-links'>
               <Link className='link' to='/shop'>
                <li>Shop</li>
                </Link> 
                <Link className='link' to='/tavern'>
                <li>Tavern</li>
                </Link> 
            </ul>
      </nav>
    );
}




export default Nav;