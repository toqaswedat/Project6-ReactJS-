import React from 'react'
import { Link } from 'react-router-dom'
import './navmine.css'

// <button  className='menuExitPage' >
// <Link to="/">EXIT</Link>
// </button>
export default function NavMine() {
    return (
        <div className='menupage'>
        <div className='divmenuExitPage'>
        <div className='freemenu'>
        </div>
        </div>
            <div className='listmenu'>
            <ul>
            <li><Link to={'/'} > Home</Link></li>
            <li><Link to={'/Login'}> LogIn</Link></li>
            <li><Link to={'/Services'}> Services </Link></li>
            <li> <Link to={'/Profile'}> Profile </Link></li>
            <li> <Link to={'/CheckOut'}> CheckOut </Link></li>

            </ul>
            </div>

        <div className='socialMenu'>
        <div className="sociallinksmenu"> 
        <a href="https://twitter.com/" className="twitter">
        <i className="fab fa-twitter"></i></a> 
        <a href="https://www.facebook.com/" className="facebook">
        <i className="fab fa-facebook"></i></a> 
        <a href="https://www.instagram.com/" className="instagram">
        <i className="fab fa-instagram"></i></a> 
        </div>
        
        </div>    
        </div>
    )
}
