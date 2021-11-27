import React from 'react';
import './BookCreate.css';
import axios from 'axios';
import {useState} from 'react';

function BookCreate() {
    const [bookName, setBookName] = useState('')
    const [author, setAuthor] = useState('')
    const [publisher, setPublisher] = useState('')
    const [publishedYear, setPublishedYear] = useState()
    const [money, setMoney] = useState()
    const [day, setDay] = useState()
    const [month, setMonth] = useState()
    const [year, setYear] = useState()
    const [style, setStyle] = useState('')

    const handleAddBook = async () => {
        if (bookName !== '' &&
            author !== '' &&
            publisher !== '' &&
            publishedYear !== '' &&
            money !== '' &&
            day !== '' &&
            month !== '' &&
            year !== '' &&
            style !== '') {
            
            let ngayTao = new Date();
            ngayTao.setDate(day);
            ngayTao.setMonth(month);
            ngayTao.setYear(year);
            console.log(bookName, author, publisher, publishedYear, money, ngayTao, style);
            axios.post('http://localhost:5000/admin/themsach', {
                tenSach: bookName,
                tacGia: author,
                nxb: publisher,
                namxb: publishedYear,
                triGia: money,
                ngayTao: ngayTao,
                theLoai: style,
            })
            .then(res => {
                console.log(res)
                if(res.data.rowsAffected.length >= 1 && res.data.rowsAffected[0] !== -1) {
                    alert('Thêm sách thành công!');
                    handleExit();
                    setAuthor('');
                    setBookName('');
                    setDay('');
                    setMonth('');
                    setYear('');
                    setPublisher('');
                    setPublishedYear('');
                    setStyle('');
                    setMoney('');
                } 
                if(res.data.rowsAffected[0] === -1) {
                    alert('Sách xuất bản hơn 8 năm hoặc sai thể loại hoặc sách đã tồn tại trong thư viện!')
                }
            })
            .catch(err => console.log(err))
        } else {
            alert("Vui lòng nhập đầy đủ thông tin!")
        }
    }

    const handleExit = () => {
        const AddBook = document.querySelector('.container-book-wrapper')
        
        AddBook.style.display = 'none'
    }
 
    return (
        <div className="container-book-wrapper" onClick={handleExit}>
            <div className="container-book" onClick={e => e.stopPropagation()}>
        <h2 className="container__header">THÊM SÁCH</h2>
        <div className="container__form-section">
            <div className="form-section__element">
            <i className="fas fa-id-badge"></i>
            <label>Tên sách</label><br />
            <input type="text" placeholder="CNPM" value={bookName} onChange={e => setBookName(e.target.value)}/>
            </div>
            <div className="form-section__element">
            <i className="fas fa-user"></i>
            <label>Tác giả</label><br />
            <input type="text" placeholder="Tên tác giả" value={author} onChange={e => setAuthor(e.target.value)}/>
            </div>
            <div className="form-section__element">
            <i className="fas fa-house-user"></i>
            <label>Nhà xuất bản</label>
            <input type="text" placeholder="Tên nhà xuất bản" value={publisher} onChange={e => setPublisher(e.target.value)} />
            </div>
            <div className="form-section__element-1">
            <div className="form-section__element form-section__element-3">
                <div className="form-section__element-wrapper">
                <i className="fas fa-calculator"></i>
                <label>Năm xuất bản</label>
                </div>
                <span className="element__number-wrapper"
                ><input
                    type="number"
                    min="1899"
                    max="2021"
                    placeholder="2021"
                    onChange={e => setPublishedYear(e.target.value)}
                /></span>
            </div>
            <div className="form-section__element form-section__element-3">
                <div className="form-section__element-wrapper">
                <i className="fas fa-coins"></i>
                <label className="fo">Trị giá</label>
                </div>
                <input
                className="form-section__element-input-gia"
                type="number"
                placeholder="30.000"
                onChange={e => setMoney(e.target.value)}
                />
            </div>
            </div>

            <div className="form-section__element">
            <i className="fas fa-business-time"></i>
            <label>Ngày lập thẻ</label>
            <span className="element__number-wrapper"
                ><input type="number" min="1" max="31" placeholder="1" onChange={e => setDay(e.target.value)}
            /></span>
            <span className="element__number-wrapper"
                ><input type="number" min="1" max="12" placeholder="1" onChange={e => setMonth(e.target.value)}
            /></span>
            <span className="element__number-wrapper"
                ><input
                type="number"
                min="1899"
                max="2021"
                placeholder="2021"
                onChange={e => setYear(e.target.value)}
            /></span>
            </div>
            <div className="form-section__element">
            <i className="fas fa-book-open"></i>

            <label>Thể loại</label>
            <input type="text" placeholder="A" onChange={e => setStyle(e.target.value)}/>
            </div>
        </div>
        
        <span className="container__button-wrapper">
          <button className="button--submit" onClick={handleAddBook}>Thêm</button>
        </span>
    </div>
    </div>
    )
}

export default BookCreate
