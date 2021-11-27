import React from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <div className="nav">
            <ul className="nav-wrapper">
                <li className="nav-item">
                    <Link to="/thuvien/" className="nav-item-link">Trang chủ</Link>
                </li>
                <li className="nav-item">
                    <Link to="/thuvien/sach/" className="nav-item-link">Sách</Link>
                </li>
                <li className="nav-item">
                    <p className="nav-item-link">
                        Phiếu
                        <i className="nav-item-link-icon fas fa-chevron-down"></i>
                    </p>
                    <ul className="nav-item-list" id="nav-item-link-book">
                        <li className="nav-item-list-item">
                            <Link to="/thuvien/sachmuon" className="nav-item-list-item-link">Mượn sách</Link>
                        </li>
                        <li className="nav-item-list-item">
                            <Link to="/thuvien/sachtra" className="nav-item-list-item-link">Trả sách</Link>
                        </li>
                        <li className="nav-item-list-item">
                            <Link to="/thuvien/tienphat" className="nav-item-list-item-link">Thu tiền phạt</Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <Link to="/thuvien/nguoidung/" className="nav-item-link">Người dùng</Link>
                </li>
                <li className="nav-item">
                    <p className="nav-item-link">
                        Thống kê
                        <i className="nav-item-link-icon fas fa-chevron-down"></i>
                    </p>
                    <ul className="nav-item-list" id="nav-item-link-statistical">
                        <li className="nav-item-list-item">
                            <Link to="/thuvien/thongketheloai/" className="nav-item-list-item-link">Thể loại</Link>
                        </li>
                        <li className="nav-item-list-item">
                            <Link to="/thuvien/thongketratre/" className="nav-item-list-item-link">Trả không đúng hạn</Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <Link to="/thuvien/caidat" className="nav-item-link">Cài đặt</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigation
