
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Toaster} from 'react-hot-toast'
import  {BrowserRouter}  from 'react-router-dom';
import AuthContextComponent from './Components/context/authContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Toaster
  position="top-center"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{ }}
  toastOptions={{
    // Define default options
    className: '',
    duration: 5000,
    style: {
      background: 'rgb(225 29 72)', 
      color: 'white', 
      width:"400px",
      height:"200px",
      fontSize:"30px",
      fontWeight:"bold",
      fontFamily:"cursive"
    },

    // Default options for specific types
    success: {
      duration: 3000,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }}
/>
  <AuthContextComponent>
    <App />
  </AuthContextComponent>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
