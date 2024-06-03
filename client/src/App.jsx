
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/registerpage/registerpage'
import LoginPage from './pages/loginpage/loginpage';
import CreateQuiz from './pages/createquiz/createquiz';
import Dashboard from './pages/dashboard/dashboard';
import ViewPage from './pages/viewpage/viewpage';

function App() {
 return <BrowserRouter>
  <Routes>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/register'element={<RegisterPage/>}/>
    <Route path='/job-details/:id'element={<CreateQuiz/>}/>
    <Route path='/job-post'element={<Dashboard/>}/>
    <Route path='/job-post'element={<ViewPage/>}/>

    
  </Routes>
  </BrowserRouter>

  
}<h1>hello </h1>

export default App;
