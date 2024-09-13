import React from 'react';
import Login from "./Login/Login";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignUp from './Login/SignUp';
import Forgotpassword from './Login/Forgotpassword';
import Navbar from './Concepts/Routing/Navbar';
import Home from './Concepts/Routing/NavComonents/Home';
import About from './Concepts/Routing/NavComonents/About';
import Services from './Concepts/Routing/NavComonents/Services';
import Contact from './Concepts/Routing/NavComonents/Contact';
import LogOut from './Concepts/Authentication/LogOut';
import CrudHome from './CRUD/CrudHome';
import CrudPost from './CRUD/CrudPost';



const App =()=>{
  return(
    <>
   <BrowserRouter>
   <Login/>
   
   <Routes>
    <Route path ="/crud/get-data" element ={<CrudHome/>}/>
    <Route path ="/crud/get-post" element ={<CrudPost/>}/>
    <Route path ="/signup" element = {<SignUp/>}/>
    <Route path ="/forgotpassword" element = {<Forgotpassword/>}/>
    <Route path ="/navbarclass" element={<Navbar/>}/>
    <Route path ="/user-home" element={<Home/>}/>
    <Route path ="/user-about" element={<About/>}/>
    <Route path ="/user-services" element={<Services/>}/>
    <Route path ="/user-contact" element ={<Contact/>}/>
    <Route path ="/user-log-out" element ={<LogOut/>}/>




    </Routes> 
    </BrowserRouter>

   </>

  );
};
 export default App;

