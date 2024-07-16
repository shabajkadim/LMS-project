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
import ScheduleTime from './Components/pages/ScheduleTime';
import { Footer } from './Components/footer/Footer';
import Aboute from './Components/pages/Aboute';
import WrongPage from './Components/pages/WrongPage';

function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='*' element={<WrongPage/>} />
        <Route path='/' element={<Home/>} />
        <Route path='register' element={<Register/>} />
        <Route path='login' element={<Login/>} />
        <Route path='addcourse' element={<AddCourse/>} />
        <Route path='getcourse' element={<GetCourse/>} />
        <Route path='admin' element={<Admin/>} />
        <Route path='instructor' element={<Instructor/>} />
        <Route path='scheduleTime' element={<ScheduleTime/>} />
        <Route path='aboute' element={<Aboute/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
