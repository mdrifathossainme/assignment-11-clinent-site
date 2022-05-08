import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../asscets/logo.png'
import { Icon } from 'react-icons-kit';
import {out} from 'react-icons-kit/entypo/out'
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import {  signOut } from 'firebase/auth';
import CustomLink from '../CustomLink/CustomLink';
import Loading from '../Loading/Loading';
const Header = () => {
const [user, loading, error] = useAuthState(auth);
const [showUser,setShowUser]=useState(false)
if(loading){
<Loading/>
}
if(error){
alert(error.message)
}
const handleUserLogout=()=>{
signOut(auth)
}
return (
<>
<Navbar  className='navbar' sticky='top' expand="lg">
   <Container>
      <Navbar.Brand href="#home">
         <Link to='/'>
         <img className='logo' src={logo} alt="" /></Link>
      </Navbar.Brand>
      <Navbar.Toggle className='toggle-icon ' aria-controls="basic-navbar-nav" />
      <Navbar.Collapse   id="basic-navbar-nav">
         <Nav className="me-auto ">
            <Nav.Link >
               <CustomLink className='nav-item'  to='/'>Home</CustomLink>
            </Nav.Link>
            <Nav.Link >
               <CustomLink className='nav-item' to='/manageinventories'>Manage Inventories</CustomLink>
            </Nav.Link>
            <Nav.Link >
               <CustomLink className='nav-item' to='/Blog'>Blog</CustomLink>
            </Nav.Link>
         </Nav>
         <Nav>
            {user? <>
            <img className='user-img' onClick={()=>setShowUser(!showUser)} src={user?.photoURL? user.photoURL:"https://i.ibb.co/TcFkJKX/download-1.png"} alt="" />
            </>:
            <div className='athenticationbtn'>
               <Nav.Link >
                  <Link className='nav-item login'  to='/login'>
                  Login</Link>
               </Nav.Link>
               <Nav.Link >
                  <Link className='nav-item signup'  to='/signup'>
                  Sign Up</Link>
               </Nav.Link>
            </div>
            }
         </Nav>
      </Navbar.Collapse>
   </Container>
   {user?<>
   <div className={showUser===true? "d-block":"d-none"}>
   <div className="user-menubar ">
      <div className="username">
         <h4>{user?.displayName}</h4>
      </div>
      <div className="underline"></div>
      <div className="user-page">
         <p>
            <CustomLink className='sinuplink'  to='/myitem'>My Item</CustomLink>
         </p>
         <p>
            <CustomLink className='sinuplink'  to='/additem'>Add Item</CustomLink>
         </p>
         <div className="underline"></div>
      </div>
      <div onClick={handleUserLogout} className="logout">
         <p>
            <Icon className='logout-icon'  size={20} icon={out} />
            <span>Logout</span>
         </p>
      </div>
   </div>
   </div>
   </>:<></>}
</Navbar>
</>
);
};
export default Header;