import logo from './logo.svg';
import './App.css';
import { Route, Routes} from 'react-router-dom'
import Home from './Components/Home';
import Register from './Components/pages/Register';
import { Navbar } from './Components/Navbar/Navabr';
import Login from './Components/pages/Login';
import AddCourse from './Components/pages/AddCourse';
import GetCourse from './Components/pages/GetCourse';
import Admin from './Components/pages/Admin';
import Instructor from './Components/pages/Instructor';

function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='register' element={<Register/>} />
        <Route path='login' element={<Login/>} />
        <Route path='addcourse' element={<AddCourse/>} />
        <Route path='getcourse' element={<GetCourse/>} />
        <Route path='admin' element={<Admin/>} />
        <Route path='instructor' element={<Instructor/>} />
      </Routes>
      
    </div>
  );
}

export default App;
