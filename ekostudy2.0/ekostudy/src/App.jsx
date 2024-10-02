import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Resources from './pages/Resources';
import Post from './pages/Post';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Error from './pages/404';
import Maintenance from './pages/Maintenance';
import StudentDashboard from './pages/StudentDashboard';
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword';


const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/blog/in-blog" element={<Post />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/student-dashboard" element={<StudentDashboard />}/>
          <Route path="/404" element={<Error />}/>
          <Route path="/maintenance" element={<Maintenance />}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
          <Route path="/academics" element={<Academics/>}/>
          <Route path="/resources" element={<Resources/>}/>
        </Routes>
    </div>
  )
}

export default App;