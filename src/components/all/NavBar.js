import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function NavBar() {
    const {user, logout} = useContext(AuthContext);
    const [currentDate, setCurrentDate] = useState(new Date());
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
    return (
        <>
        <div className="superNav border-bottom py-2 bg-light">
        <div className="container">
            <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 centerOnMobile">
                <span  className="me-3 border-0 bg-light">
                Việt Nam
                </span>
                <span className="d-none d-lg-inline-block d-md-inline-block d-sm-inline-block d-xs-none me-3"><strong>{formatTime(currentDate)}</strong></span>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-none d-lg-block d-md-block-d-sm-block d-xs-none text-end">
                {!user && (
                    <>
                    <span className="me-3"><i className="fa-solid fa-truck text-muted me-1"></i><Link className="text-muted" to="/login">Đăng nhập</Link></span>
                    <span className="me-3"><i className="fa-solid fa-file  text-muted me-2"></i><Link className="text-muted" to="/register">Đăng ký</Link></span>
                    </>
                )}
                {user && (
                    <>
                    <span className="me-3 text-success"><i className="fa-solid fa-truck text-muted me-1"></i>Xin chào, {user.name}</span>
                    <span className="me-3"><i className="fa-solid fa-file  text-muted me-2"></i><button className="text-muted" onClick={() => logout()}>Đăng xuất</button></span>
                    </>
                )}
            </div>
            </div>
        </div>
        </div>
        <nav className="navbar navbar-expand-lg bg-white sticky-top navbar-light p-3 shadow-sm">
        <div className="container">
            <Link className="navbar-brand" to="/"><i className="fa-solid fa-shop me-2"></i> <strong>GEAR SHOP</strong></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="mx-auto my-3 d-lg-none d-sm-block d-xs-block">
            <div className="input-group">
                <span className="border-warning input-group-text bg-warning text-white"><i className="fa-solid fa-magnifying-glass"></i></span>
                <input type="text" className="form-control border-warning" style={{color:"#7a7a7a"}}/>
                <button className="btn btn-warning text-white">Search</button>
            </div>
            </div>
            <div className=" collapse navbar-collapse" id="navbarNavDropdown">
            <div className="ms-auto d-none d-lg-block">
                <div className="input-group">
                <span className="border-warning input-group-text bg-warning text-white"><i className="fa-solid fa-magnifying-glass"></i></span>
                <input type="text" className="form-control border-warning" style={{color:"#7a7a7a"}}/>
                <button className="btn btn-warning text-white">Search</button>
                </div>
            </div>
            <ul className="navbar-nav ms-auto ">
                <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase active" aria-current="page" href="#">Offers</a>
                </li>
                <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#">Products</a>
                </li>
                <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#">Catalog</a>
                </li>
                <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#">Services</a>
                </li>
                <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#">About</a>
                </li>
            </ul>
            <ul className="navbar-nav ms-auto ">
                <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#"><i className="fa-solid fa-cart-shopping me-1"></i> Cart</a>
                </li>
                <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#"><i className="fa-solid fa-circle-user me-1"></i> Account</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        </>
    )
}
