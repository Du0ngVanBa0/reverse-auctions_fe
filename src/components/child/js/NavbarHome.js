import React from 'react';
import '../css/NavbarHome.css';

function NavbarHome({ loai, handleNavbarClick }) {
    return (
        <div className="btn-luachon">
            <div className="centered-buttons">
                <button id="da-ket-thuc" onClick={() => handleNavbarClick(1)} style={{ backgroundColor: loai === 1 ? '#34AEF1' : '#A5D6F1' }}>Đã kết thúc</button>
                <button id="dang-dien-ra" onClick={() => handleNavbarClick(2)} style={{ backgroundColor: loai === 2 ? '#34AEF1' : '#A5D6F1' }}>Đang diễn ra</button>
                <button id="sap-ket-thuc" onClick={() => handleNavbarClick(3)} style={{ backgroundColor: loai === 3 ? '#34AEF1' : '#A5D6F1' }}>Sắp bắt đầu</button>
            </div>
        </div>
    );
}

export default NavbarHome;
