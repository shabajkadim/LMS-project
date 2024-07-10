import logo from './logo.svg';
import './App.css';
import { Route, Routes} from 'react-router-dom'
import Home from './Components/Home';
import Register from './Components/pages/Register';
import { Navbar } from './Components/Navbar/Navabr';
import Login from './Components/pages/Login';
import AddCourse from './Components/pages/AddCourse';

function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='register' element={<Register/>} />
        <Route path='login' element={<Login/>} />
        <Route path='addcourse' element={<AddCourse/>} />
      </Routes>
      
    </div>
  );
}

export default App;
