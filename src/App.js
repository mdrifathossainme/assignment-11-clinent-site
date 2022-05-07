import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import ManageInventories from './Pages/ManageInventories/ManageInventories';
import Blog from './Pages/Blog/Blog'
import Inventory from './Pages/Inventory/Inventory';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Footer from './Components/Footer/Footer';
import RequierAuth from './Components/RequierAuth/RequierAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from './Components/Loading/Loading';
import MyItem from './Pages/MyItem/MyItem';
import AddItem from './Pages/AddItem/AddItem';

// #FFDD22
// font-family: 'Source Sans Pro', sans-serif;


function App() {

  
  return (
    <div className="App">

   <Header/>
   <ToastContainer/>
      <div className='Routes'>
          <Routes >
              <Route path='/' element={<Home/>}></Route>
              <Route path='/home' element={<Home/>}></Route>
              <Route path='/inventory/:id' element={
              <RequierAuth>
                  <Inventory/>
              </RequierAuth>
              }></Route> 
              <Route path='/manageinventories' element={<ManageInventories/>}></Route>
              <Route path='/blog' element={<Blog/>}></Route>
              <Route path='/myitem' element={
              <RequierAuth>
             <MyItem/>
          </RequierAuth>
              }></Route>
              <Route path='/additem' element={
              <RequierAuth>
              <AddItem/>
           </RequierAuth>
              }></Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/signup' element={<SignUp/>}></Route>
              <Route path='*' element={<NotFound/>}></Route>
          </Routes>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
