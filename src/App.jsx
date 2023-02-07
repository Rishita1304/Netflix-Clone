import "./app.scss"
import './App.css'
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";

const App = () => {
  const {user} = useContext(AuthContext)
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={user ? <Home /> : <Navigate to='/login'/>} />
      <Route path='/register' element={!user ? <Register /> : <Navigate to='/'/>} />
      <Route path='/login' element={!user ? <Login /> : <Navigate to='/'/>} />
      { user? (
        <>
      <Route path='/movies' element={<Home type='movies'/>} />
      <Route path='/series' element={<Home type='series'/>} />
      <Route path='/watch/:id' element={<Watch/>} />
      <Route path='/series/watch' element={<Watch/>} />
      <Route path='/movies/watch' element={<Watch/>} />
        </>
      ) :(
        <>
        <Route path='/series' element={<Navigate to='/login'/>} />
        <Route path='/movies' element={<Navigate to='/login'/>} />
        </>
      )}
      </Routes>
    </Router>
  );
};

export default App;