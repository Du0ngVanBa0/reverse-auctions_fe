import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import LoginForm from './LoginForm';
import Register from './Register'
import '../css/Head.css'
function Head() {
    const {user, logout} = useContext(AuthContext);
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());
    const handleCloseLoginForm = () => {
        setShowLoginForm(false);
    };
    const handleCloseRegister = () => {
        setShowRegister(false);
    };
    useEffect( () => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1);
        return () => {
            clearInterval(intervalId)
        };
    } , []);
    const formatTime = (date) => {
        const days = ['Chủ Nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
        const day = days[date.getDay()];
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const dayOfMonth = date.getDate();
        const month = date.getMonth() + 1; // Months are zero indexed, so add 1
        const year = date.getFullYear();
        return `${day} ${hours}:${minutes}:${seconds} ${dayOfMonth}/${month}/${year}`;
    };
    const handleLogout = () => {
        logout(); // Gọi hàm logout khi người dùng nhấn vào nút "Đăng xuất"
    };
    return (
        <div className='dn-dk'>
            <div className="info">
                <p id="location">Việt Nam</p>
                <p id="date">{formatTime(currentDate)}</p>
            </div>
            <div className="actions">
                {!user && (
                    <>
                        <a onClick={() => setShowLoginForm(true)} className="btn">Đăng nhập</a>
                        <a onClick={() => setShowRegister(true)} className="btn">Đăng ký</a>
    
                    </> )}
                {user && (
                    <>
                        <a className="me-3 text-success"><i className="fa-solid fa-truck text-muted me-1"></i>Xin chào, {user.name}</a>
                        <a onClick={handleLogout} className="btn">Đăng xuất</a>
                    </>
                )}
                {showLoginForm && <LoginForm onClose={handleCloseLoginForm} />}
                {showRegister && <Register onClose={handleCloseRegister} />}
            </div>
        </div>
    );
}

export default Head;
