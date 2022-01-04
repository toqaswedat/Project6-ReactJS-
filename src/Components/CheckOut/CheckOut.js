import React, { useState } from 'react'
import swal from 'sweetalert'
import './CheckOut.css'


export default function CheckOut() {
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [msgemail, setEmailmsg] = useState("");
    const [msgphoneNumber, setPhoneNumbermsg] = useState("");
    const [couponDeds,setcouponDeds ]=useState("")
    // const Coupon = "Toqa...";
    let bookings = JSON.parse(localStorage.getItem('TimeSelected'));
    let total = 0;
    const [result, setresult ]=useState();

    
     
    const bookingTable  = bookings.map((e,id)=>{

        total = total + Number(e.selectedFarm.price);

            return (
                <div>
                <div className="row">
                            <div >
                                
                               
                                    <div className='tebleitem'>
                                    <div>{e.selectedFarm.title1}</div>
                                    <div>{e.StartDate} </div>                                        
                                    <div>{e.Time} </div>  
                                    <div>{e.selectedFarm.price}</div>                               
                                    </div>
                             
                            </div>
                        </div>
                </div>
            )
        })
    


    let count = 0;
    const submitHandler = e => {
          e.preventDefault();


          count = 0
          if (!email.includes('@')) {
                setEmailmsg('The Email is Not Vaild')
                count = count + 1
          } else {
                setEmailmsg('')
          }
          if (phoneNumber.length < 10 || phoneNumber.length>10) {
                setPhoneNumbermsg("Number of Phone must be equal 10 digit")
                count = count + 1
          } else {
                setPhoneNumbermsg("")
          }
          if (phoneNumber.length === 10 && email.includes('@')) {
                swal({
                      title: 'Completed!',
                      text: 'Check your profile page',
                      buttons:"ok",

                })
                setTimeout(()=>{
                    //  props.handelUseNavigate();  
                },2000)
                
          } 
         
    }
    const subcopon = ()=> {
        let dis=0;

        if(couponDeds === "Toqa"){
            dis = total * 0.05
            setresult( total - dis)
             
             console.log(total)
             console.log(dis)
            //  console.log(result)
            //  alert({total})
        }
        // return result;
    }

    return (
        <div>
    
        <div className="container">
              <div >
                    <div className="col-md">
                    <div className='tableChoise'>
                    <div className='teblede'>
                    <div className='titletable'>
                    <div>Farm name</div>
                    <div>Start Date</div>
                    <div>Time</div>
                    <div>Price</div>

                    </div>
                    <div>
                    <div className='tablebooking'>{bookingTable} 
                    </div>
                    <div className='divtotalResult'>
                    <div className='totalResult1'>Total Coupon Apply : {result}$  </div>
                    <div className='totalResult'>Total : {total}$ </div>
                    </div>
                    </div>
                    </div>
                    </div>
              </div>

                          <div className="CheckoutContainer">
                                <div className='Copon'>
                                      
                                      <input  type="text" onChange={(e) => { setcouponDeds(e.target.value) }} placeholder="Enter Coupon Please"  />
                                      <button  onClick={subcopon}>Apply coupon</button> 
                                </div>
                                <form onSubmit={submitHandler} >
                                      <div className="flname">
                                            <input type="text" placeholder="First name" required id="fname" />
                                            <input type="text" placeholder="Last name" required id="lname" />
                                      </div>
                                      <div>
                                            <label htmlFor="email">Email</label>
                                            <input value={email} type="text" onChange={(e) => { setEmail(e.target.value) }} placeholder="you@example.com" id="email" />
                                            <p>{msgemail}</p>
                                      </div>
                                      <div>
                                            <label htmlFor="phoneNumber">Phone</label>
                                            <input type="tel" value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }} placeholder="+962XXXXXXXXX" required id="phoneNumber" />
                                            <p>{msgphoneNumber}</p>
                                      </div>
                                      <div>
                                            <label htmlFor="address">Address</label>
                                            <input type="text" id="address" required />
                                      </div>
                                     

                                      <button  >Submit</button>
                                </form>
                          </div>
                    </div>
                   
        </div>
  
        </div>
    )
}
