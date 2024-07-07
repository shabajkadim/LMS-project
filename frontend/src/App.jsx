import logo from './logo.svg';
import './App.css';
import { Route, Routes} from 'react-router-dom'
import Home from './Components/Home';
import Register from './Components/pages/Register';
import { Navbar } from './Components/Navbar/Navabr';
import Login from './Components/pages/Login';

function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='register' element={<Register/>} />
        <Route path='login' element={<Login/>} />
      </Routes>
      
    </div>
  );
}

export default App;
