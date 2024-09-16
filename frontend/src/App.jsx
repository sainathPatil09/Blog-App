import { useState } from 'react'
import './App.css'
import Navbar from '../src/components/Navbar'
import Home from '../src/components/Home'
import Footer from '../src/components/Footer'
import Blogs from '../src/pages/Blogs'
import About from '../src/pages/About'
import Contact from '../src/pages/Contact'
import Creators from '../src/pages/Creators'
import Dashboard from '../src/pages/Dashboard'
import Login from '../src/pages/Login'
import Register from '../src/pages/Register'
import UpdateBlog from '../src/dashboard/UpdateBlog'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useAuth } from './context/AuthProvider'
import { Toaster } from 'react-hot-toast';
import Detail from './pages/Detail'
import NotFound from './pages/NotFound'

function App() {
  const location = useLocation();
  const hideNavbarFooter = ["/login", "/register","/dashboard"].includes(location.pathname);
  // const navigateTo = useNavigate()
  const{blogs, isAuthenticated, loading} = useAuth();  
  console.log(loading)
  if(loading){
    return <div>loading ...........</div>
  }
  let token = localStorage.getItem("jwt");
  console.log(token)
  console.log(blogs)
  
  console.log(isAuthenticated);
  return (
    <>
       {!hideNavbarFooter && <Navbar/>}
      <Routes>
        <Route exact path='/' element={isAuthenticated === true ? <Home/> :<Navigate to={'/login'}/>} />
        <Route exact path='/blogs' element={<Blogs/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/contact' element={<Contact/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/creators' element={<Creators/>} />
        <Route exact path='/register' element={<Register/>} />
        <Route exact path='/dashboard' element={<Dashboard/>} />
        <Route exact path='/blog/update/:id' element={<UpdateBlog/>} />
        <Route exact path='/blog/:id' element={<Detail/>} />

        <Route exact path='*' element={<NotFound/>} />


      </Routes>
      <Toaster />
      {!hideNavbarFooter && <Footer/>}
    </>
  )
}

export default App
