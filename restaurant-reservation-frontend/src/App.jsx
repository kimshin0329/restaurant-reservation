
import './App.css'
import Home from './pages/Home/Home.jsx';
import Login from './pages/Auth/Login.jsx'
import Signup from './pages/Auth/Signup.jsx'
import RestaurantApply from './pages/Restaurant/RestaurantApply.jsx';
import AdminDashboard from './pages/Admin/AdminDashboard.jsx';
import RestaurantApplications from './pages/Admin/RestaurantApplications.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/RestaurantApply" element={<RestaurantApply />} />
      <Route path="/AdminDashboard" element={<AdminDashboard />} />
      <Route path="/Admin/RestaurantApplications" element={<RestaurantApplications />} />
    </Routes>
    </BrowserRouter>
    

    
    
  );
}


export default App;
