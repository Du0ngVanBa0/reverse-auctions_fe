import {Route, Routes, Navigate} from 'react-router-dom'
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Home from './components/all/Home';
import NavBar from './components/all/NavBar';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Auction from './components/user/Auction';

function App() {
  const {user} = useContext(AuthContext);
  return <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/auction' element={user ? <Auction/> : <Login/>}/>
        <Route path='*' element={<Navigate to="/"/>}/>
      </Routes>
    </>
}

export default App;
