import React from 'react'
import { Link } from 'react-router-dom';
import './profile.css'

export default function Profile() {

    let userInfo = JSON.parse(localStorage.getItem('uerLogin'));

    const Logout =()=>{
    localStorage.removeItem("uerLogin");
    localStorage.removeItem("UserSelected");
    localStorage.removeItem("NameFarm");
    }

    return (
        <div>
        <form className='contactForm'>
        <h1>Profile</h1>

        <div className='inputInfo'>
        <div className='labelwhithinput'>
        <label>Email
        </label>
        <input type='email'  value={userInfo.email}/>
        </div>
        <div className='labelwhithinput'>
        <label> Password
        </label>
        <input type='text'  value={userInfo.password} />
        </div>
        <div className='labelwhithinput'>
        <label>User Name
        </label>
        <input type='text'  value={userInfo.userName} />
        </div>
        <div className='btnLogOUt'>
        <Link to={'/'}>
        <button className='submitForm' onClick={Logout}>LogOut</button>
        </Link>
        </div>
        </div>

        
        
        </form>
        </div>
    )
}
