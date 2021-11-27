import React from 'react'
import './UsersRemove.css'
import {useState} from 'react'
import axios from 'axios'

function UsersRemove({users}) {
    // console.log(users);
    const handleExit = () => {
        const removeUser = document.querySelector('.users-remove-wrapper')

        removeUser.style.display = 'none'
    }

    const handleRemoveUser = () => {
        axios.post('http://localhost:5000/admin/docgia/xoa', {chosenUsers: users})
        .then(res => {
            // console.log(res);
            // console.log(res.data.rowsAffected);
            if(res.data.rowsAffected.length >= 1) {
                 
                handleExit();
            }
        })
        .catch(err => alert("Đã có lỗi xảy ra. Hãy thử lại!"));
    }

    return (
        <div className="users-remove-wrapper" onClick={handleExit}>
            <div className="container__remove-reader" onClick={e => e.stopPropagation()}>
                <h2 className="container__header">XÓA NGƯỜI DÙNG</h2>
                <p className="container-user-content">BẠN CÓ CHẮC CHẮN MUỐN XÓA NGƯỜI DÙNG ĐÃ CHỌN KHỎI HỆ THỐNG ?</p>
                <div className="container-book-btn">
                    <button className="container-book-btn-cancel" onClick={handleExit}>Hủy bỏ</button>
                    <button className="container-book-btn-remove" onClick={handleRemoveUser}>Xóa sách</button>
                </div>
            </div>    
        </div>
    )
}

export default UsersRemove