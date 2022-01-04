import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"
import Navbar from "./Components/Navbar/Navbar.jsx"
import NavMine from './Page/NavMine';
import HomePage from './Page/HomePage';
import Services from './Components/Services/Services';
import BookingFram from './Components/Booking/BookingFram';
import Calender from './Components/Calender/Calender';
import Footer from '../src/Components/Footer/Footer'
import Profile from './Components/Profile/Profile';
import CheckOut from './Components/CheckOut/CheckOut';



// <Navbar/>
function App() {
  return (
    <BrowserRouter>
    
    <button className="menuPage">
      <Link to="/NavMine" className="menuNav">MENU</Link>
    </button>
    <Routes>
    <Route path='/' element={<HomePage/> }/>
    <Route path="/Login" element={<Login />}/>
    <Route path="/Register" element={<Register />}/>
    <Route path='/NavMine' element={<NavMine/>}/>
    <Route path="/Services" element ={<Services/> } />
    <Route path='/BookingFram' element ={<BookingFram/> }/>
    <Route path='/Calender' element={<Calender/>}/>
    <Route path='/Profile' element ={<Profile/>}/>
    <Route path='/CheckOut' element={<CheckOut/>}/>
    
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
