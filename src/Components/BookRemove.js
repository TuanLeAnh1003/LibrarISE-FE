import React, {useState} from 'react';
import axios from 'axios';
import './BookCreate.css';

function BookRemove({books}) {

    const handleRemoveBook = () => {
        console.log(books);
        axios.post('http://localhost:5000/admin/xoasach', {chosenBooks: books})
        .then(res => {
            if(res.data.rowsAffected.length >= 1) {
                alert('Đã xóa sách thành công!');
                handleExit();
            }
        })
        .catch(err => alert("Đã có lỗi xảy ra. Hãy thử lại!"));
    }

    const handleExit = () => {
        const RemoveBook = document.querySelector('.container-book-wrapper-remove')
        RemoveBook.style.display = 'none'
    }
 
    return (
        <div className="container-book-wrapper-remove" onClick={handleExit}>
            <div className="container-book-remove" onClick={e => e.stopPropagation()}>
                <h2 className="container__header">XÓA SÁCH</h2>
                <p className="container-book-content">BẠN CÓ CHẮC CHẮN MUỐN XÓA SÁCH ĐÃ CHỌN KHỎI HỆ THỐNG ?</p>
                <div className="container-book-btn">
                    <button className="container-book-btn-cancel" onClick={handleExit}>Hủy bỏ</button>
                    <button className="container-book-btn-remove" onClick={handleRemoveBook}>Xóa sách</button>
                </div>
            </div>    
        </div>
    )
}

export default BookRemove
