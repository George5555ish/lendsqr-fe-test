import React from "react";
import "./css/base.css";
import "./scss/base.scss";
import {   Route, BrowserRouter as Router,  Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import SingleUserPage from "./pages/Dashboard/SingleUserPage";
import UsersPage from "./pages/Dashboard/Users";
import Dexie from 'dexie'
import { DBConfig } from './config';
import { initDB } from 'react-indexed-db';
 
initDB(DBConfig);
 
function App() {
   
  return (
    <Router>
      <Routes>
    
        <Route path='/' element={<LoginPage />} /> 
        <Route path='dashboard' element={<Dashboard />}>
            <Route path='' element={<UsersPage />} />  
            <Route path=':postId' element={<SingleUserPage db={new Dexie('SingleUserDatabase')} />} />  
        </Route>
        <Route path="*" errorElement element={<ErrorPage />} />
    </Routes> 
    </Router>
   
 
  )
}

export default App;
