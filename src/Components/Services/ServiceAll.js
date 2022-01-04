import React from 'react';
import ButtonBooking from './ButtonBooking';
import './servicesAll.css';

export default function ServiceAll(props) {
    return (
        <div className='servicesAllToqa'>
            <div className='servicesAllToqaImg'>
                <img src={props.src} />
            </div>

            <div className='servicesAllToqaInfo'>

            <div className='servicesAllToqaTitle1'>
            <p>{props.title1} </p>
            </div>
            
            <div className='servicesAllToqaTitle2' >
            <h4>{props.title2} </h4>
            </div>
            
            <div className='servicesAllToqaDescription'>
            <p>{props.description}</p>
            </div>
            
            <div className='servicesAllToqaPrice'>
            <p>{props.price} </p>
            </div>

            <div className='divbtnBooking'>
            <ButtonBooking obj={props} />
            </div>
            
            </div>
                
        </div>
    )
}
