import {Route, Routes, Navigate} from 'react-router-dom'
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Home from './components/all/Home';
import Head from '../src/components/child/js/Head';
import Menu from '../src/components/child/js/Menu';
import Banner from '../src/components/child/js/Banner';
import Footer from '../src/components/child/js/Footer';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Auction from './components/user/Auction';

function App() {
  const {user} = useContext(AuthContext);
  return <>
      <Head />
      <Banner />
      <Menu />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/auction' element={user ? <Auction/> : <Login/>}/>
        <Route path='*' element={<Navigate to="/"/>}/>
      </Routes>
      <Footer />
    </>
}

export default App;
