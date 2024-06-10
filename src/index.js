import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';

import Login from './pages/auth/Login';
import Home from './pages/auth/Home';
import Register from './pages/auth/Register';
import Pets from './pages/owner/Pets';
import NewPet from './pages/owner/NewPet';
import Admin from './pages/admin/Admin';
import AdminNewPet from './pages/admin/NewPet';
import AdminEditPet from './pages/admin/EditPet';
import AdminNewUser from './pages/admin/NewUser';
import AdminEditUser from './pages/admin/EditUser';
import AdminNewVaccine from './pages/admin/NewVaccine';
import AdminEditVaccine from './pages/admin/EditVaccine';
import NewVaccination from './pages/admin/AddVaccination'

const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <UserProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />

            <Route path='/pets' element={<Pets/>} />
            <Route path='/pets/new' element={<NewPet/>} />

            <Route path='/manager' element={<Admin/>} />
            <Route path='/manager/new-pet' element={<AdminNewPet/>} />
            <Route path='/manager/edit-pet' element={<AdminEditPet/>} />
            <Route path='/manager/new-vaccination' element={<NewVaccination/>} />
            <Route path='/manager/new-user' element={<AdminNewUser/>} />
            <Route path='/manager/edit-user' element={<AdminEditUser/>} />
            <Route path='/manager/new-vaccine' element={<AdminNewVaccine/>} />
            <Route path='/manager/edit-vaccine' element={<AdminEditVaccine/>} />
          </Routes>
        </Router>
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
