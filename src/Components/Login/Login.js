import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
export default function NewPath() {
    const navigate = useNavigate();
    const handelUseNavigate = () => {
        localStorage.getItem("TimeSelected") ? navigate('/Checkout') : navigate("/")


    }
    return <Login handelUseNavigate={handelUseNavigate} />
}



function Login(props) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errorMessage, useerrorMessage] = useState();

    const submit = (e) => {
        e.preventDefault();
        // window.Location.reload();
        for (let i = 0; i <= localStorage.length; i++) {
            const emailLocalstorge = JSON.parse(localStorage.getItem(localStorage.key(i)));
            console.log(emailLocalstorge)

            if (emailLocalstorge.email === email && emailLocalstorge.password === password) {
                console.log('login TTTTTTT ')
                localStorage.setItem('uerLogin', JSON.stringify(emailLocalstorge))
                alert("successful login")
                props.handelUseNavigate();
            
                break;

            } else {
                useerrorMessage('The Email  or password incorrect !!')
            }
        }


    }
//     const handleSubmit=(e)=>{
// e.preventDefault();
// window.Location.reload()
//     }
// <div className="TitleLogInAndImg">
//     <h3>Own Your Digital Presence</h3>
//     <img src="../img/LogInImg.png" alt="Login picture" />
//     <p>Grow yourself by using our website as your foundation.</p>
// </div>
    return (
        <div>
        <div className="LogInToqa">


            

            <div className="LogInForm">
                <form className='contactLogInForm'>

                    <h1>SIGN IN</h1>
                    <p>WELCOME TO ,<span>BOOK MY FARM</span></p>
                    <input type='email' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' />
                    <input type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' />
                    <small>{errorMessage} </small>


                    <button onClick={submit} className='submitLoginForm'>Submit</button>

                    
                    
                    </form>
                    <p className='LoginFormMe'>You dont have already account ?
                    <Link to="/register"> Sign Up</Link>
                </p>
            </div>
            </div>
        </div>
    )
}
