import React, { useState } from 'react';
import Title from '../child/js/Title';
import NavbarHome from '../child/js/NavbarHome';
import Navbar from '../child/js/Navbar';
import List from '../child/js/List';
import anh from '../../assets/img/image 4.png';
import '../../assets/css/Home.css';

function Home() {
    const [loai, setLoai] = useState(1);
    const handleNavbarClick = (buttonId) => {
        setLoai(buttonId);
    };
    return (
        <div>
            <div className="quang-cao">
                <div id="chu-qc">
                    <p>ĐẤU GIÁ T SHOP</p>
                    <p>MUA VỚI NHIỀU LOẠI GIÁ</p>
                    <button id="btn-thu_ngay">THỬ NGAY</button>
                </div>
                <div id="anh-qc">
                    <img src={anh} alt="laptop" />
                </div>
            </div>
            <Title key={1} de={"CÁC PHIÊN ĐẤU GIÁ"} />
            <NavbarHome loai={loai} handleNavbarClick={handleNavbarClick} /> {/* Truyền hàm và giá trị loại xuống NavbarHome */}
            <List key={1} loai={loai} />
            <Navbar />
        </div>
    );
}

export default Home;
