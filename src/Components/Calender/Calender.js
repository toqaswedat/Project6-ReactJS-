import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import swal from 'sweetalert'
import './calender.css'
export default function NewPath() {
    
    const navigate = useNavigate();
    const checkLogInUser = localStorage.getItem("uerLogin");
    const handelUseNavigate = () => {
    if (checkLogInUser !== null) navigate("/Checkout");
    else {
        navigate("/Login");
        
    }
    };
    return <Calender handelUseNavigate={handelUseNavigate} />;
  }

function Calender(props) {
    const selectedFarm =JSON.parse( localStorage.getItem("NameFarm"))

    
    const [ StartDateEnter,setStartDateEnter]=useState();
    const [Form,setForm]=useState(
    {
        StartDate:'',
        Time:'',
        selectedFarm:selectedFarm
    } 
    )

    const AllTime=[
    {text:'Please Select',value:''},
    {text:'12--3',value:'12--6'},
    {text:'6--9',value:'6--12'},
    ]


    const TimeSelected=localStorage.getItem('TimeSelected')
        ?JSON.parse(localStorage.getItem('TimeSelected')):
        localStorage.setItem('TimeSelected',JSON.stringify([]));

    const handleStartDate=(e,attr)=>{
    setStartDateEnter(e.target.value);
    setForm({...Form , [attr]:e.target.value})
    }


const handleSelect=(e,attr)=>{
setForm({...Form,[attr]:e.target.value})
}

const handleSubmit=(e)=>{

    e.preventDefault();
    console.log(Form.Time) 
    TimeSelected.push(Form);
    const newArray = [{
        timet: Form.time,
        Date : Form.StartDate
    }]

    for(let i=0;i<TimeSelected.length-1;i++){

        if(StartDateEnter===TimeSelected[i].StartDate && TimeSelected[i].Time===Form.Time){
            console.log('yes')
            console.log(i)
            swal({
                title: 'Oops!This time has already been booked!',
                text: 'Choose another time',
                icon: "warning",
                buttons:"ok",

            })
            break;
        }
        else{
                console.log('no');
                console.log(i)
                // console.log(UserSelected)
                localStorage.setItem('UserSelected',JSON.stringify(newArray))
                swal({
                    title: 'Completed!',
                    text: 'Check your CheckOut page',
                    buttons:"ok",

            })
            props.handelUseNavigate();
        }
    }

    localStorage.setItem('TimeSelected',JSON.stringify(TimeSelected)); 
}

    return(
    <div className="renderCalender">

    
    <div >
    <form onSubmit={handleSubmit} className='CalenderForm'>
    
    <label className='labelainput'>Start Date</label><br/>
        <input type='date' onChange={(e)=>{handleStartDate(e,'StartDate')}} className='selectTime' /><br/>
        <label className='labelainput'>Select Time</label>
        <select onChange={(e)=>{handleSelect(e,'Time')}} className='selectTime'>
        {AllTime.map((time)=>{
        return  <option value={time.value}>{time.text}</option>
        })}
        </select>

        <button type='submit' className='CalenderSubmit'>Submit</button>
        </form>
    </div>

    </div>
)
}
