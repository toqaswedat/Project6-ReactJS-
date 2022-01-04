import React from 'react';
import Calender from '../Calender/Calender';
import './Bookingfarm.css'

export default function BookingFram() {
    const infofram=JSON.parse( localStorage.getItem("NameFarm"));
    return (
      <div>
      <div className='TitlefarmMain'>
      <h1>Booking</h1>
      </div>
      
      <div className='mainBooking'>

        <div className='InfoFarmSelectMain'>
        <div className='InfoFarmSelect'>
        <div className="servicesAllToqa">
        <div className="servicesAllToqaImg">
          <img src={infofram.src} alt={infofram.title} />
        </div>
  
        <div className="servicesAllToqaInformation">
          <div className="servicesAllToqaTitle1">
            <p>{infofram.title1}</p>
          </div>
  
          <div className="servicesAllToqaTitle2">
            <h4>{infofram.title2}</h4>
          </div>
  
          <div className="servicesAllToqaDescription">
            <p>{infofram.description}</p>
          </div>
  
          <div className="servicesAllToqaPrice">
            <p>{infofram.price}</p>
          </div>

        </div>
    
      </div>
      </div>
      <div className='calenderBooking'>
      <Calender />
      </div>
      </div>
      </div> 
        </div>
    )
}
