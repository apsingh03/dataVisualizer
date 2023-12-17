import './App.css';
import HomePage from './pages/HomePage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file


function App() {
  return (

    <Routes>
    <Route path="/"  element={ <HomePage /> }  />
    <Route path="/signin"  element={ <SignIn /> }  />
    <Route path="/signup"  element={ <SignUp /> }  />
  </Routes>

  );
}

export default App;
