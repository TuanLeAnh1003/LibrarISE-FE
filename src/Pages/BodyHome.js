import React from 'react';
import './BodyHome.css';
import MainImg from '../Assets/Images/main-img.png';

function BodyHome() {
    return (
        <div className="body-home">
            <img className="body-home-img" src={MainImg} alt="main img"/>
            <p className="body-home-title">CHÀO MỪNG ĐẾN VỚI PHẦN MỀM QUẢN LÝ THƯ VIỆN TRỰC TUYẾN</p>
        </div>
    )
}

export default BodyHome
