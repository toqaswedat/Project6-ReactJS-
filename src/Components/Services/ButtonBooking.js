import React from 'react'
import { Link } from 'react-router-dom';
import './Services.css'

export default function ButtonBooking(props) {
    const handeleClick = ()=>{
        const obj1= props.obj;
        localStorage.setItem("NameFarm",JSON.stringify(obj1))
    }
    return (
        <div>
        <Link to={'/BookingFram'}>
        <button className='BooKingBtn' onClick={handeleClick}>
        Book Now
        </button>
        </Link>
        </div>
    )
}
