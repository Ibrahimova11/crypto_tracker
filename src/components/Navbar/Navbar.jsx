import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


function Navbar() {
  return (
        <header>
 <nav>
        <div className='word'>
            <h2>Cyrpto Tracker Application</h2>
        </div>
        <div className='navbar'>
            <ul>
                <li>
                    <Link className='link' to='/'>Home</Link>
                    
                </li>
                <li>
                    <Link className='link' to='/favorites'>Favorites</Link>
                </li>
            </ul>
        </div>
    </nav>
        </header>
   
  )
}

export default Navbar

