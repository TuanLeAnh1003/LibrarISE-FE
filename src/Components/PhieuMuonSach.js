import axios from 'axios';
import React, { useState } from 'react';
import './PhieuMuonSach.css';

function PhieuMuonSach({handleClick}) {
  const [idList, setIdList] = useState([]);
  const [bookList, setBookList] = useState([]);

  const [idReader, setIdReader] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [idBook, setIdBook] = useState('');
  const [number, setNumber] = useState(0);

  const handleClickOK = () => {
    console.log(bookList)
    if(idReader !== "" && day !== "" && month !== "" && year !== "") {
      axios.post('http://localhost:5000/admin/taophieumuonsach', {
        idDocGia: idReader,
        ngay: day,
        thang: month, 
        nam: year,
        listBooks: bookList,
      })
      .then(res => console.log(res))
      .catch(err => console.log(err))
    } else {
      alert('Có trường chưa được nhập!')
    }
  }

  const handleGetBook = async () => {
    await axios.get(`http://localhost:5000/admin/laysach/${idBook}`)
    .then(res => {
      res.data.recordset[0].soLuong = number;
      setBookList([...bookList,...res.data.recordset])
    })
    .catch(err => console.log(err))
  }

  const handleRemove = (i) => {
    setBookList(bookList.filter((item, index) => index !== i))
  }

  return (
    <div className="container-PMS__wrap" onClick={() => handleClick(false)}>
      <div className="container__PMS" onClick={e => e.stopPropagation()}>
        <h2 className="container__header">LẬP PHIẾU MƯỢN SÁCH</h2>
        <div className="container__form-section">
          <div className="form-section__element">
            <i className="fas fa-user-alt"></i>
            <label>Độc giả</label>
            <span className="element__button-wrapper">
              <input 
                type="text" 
                value={idReader}
                placeholder="Nhập ID độc giả" 
                onChange={e => setIdReader(e.target.value)}
              />
              <button className="button--submit">OK</button>
            </span>
          </div>

          <div className="form-section__element">
            <i className="fas fa-calendar-alt"></i>
            <label>Ngày lập thẻ</label>
            <span className="element__number-wrapper">
              <input 
                type="number" 
                value={day}
                min="1" 
                max="31" 
                onChange={e => setDay(e.target.value)}
              />
            </span>
            <span className="element__number-wrapper">
              <input 
                type="number" 
                value={month}
                min="1" 
                max="12" 
                onChange={e => setMonth(e.target.value)}
              />
            </span>
            <span className="element__number-wrapper">
              <input
                type="number"
                value={year}
                min="1899"
                max="2021"
                onChange={e => setYear(e.target.value)}
              />
            </span>
          </div>
        </div>

        <div className="form-section__element">
          <i className="fas fa-book-open"></i>
          <label>Sách mượn</label>

          <span className="element__button-wrapper">
            <input 
              type="text" 
              value={idBook}
              placeholder="Nhập ID sách" 
              onChange={e => setIdBook(e.target.value)}
            />
            <button className="button--submit" onClick={handleGetBook}>OK</button>
          </span>
        </div>
        <div className="form-section__element">
          <label>Số lượng</label>
          <span className="element__number-wrapper">
            <input 
              type="number" 
              value={number}
              min="1" 
              max="100" 
              onChange={e => setNumber(e.target.value)}
            />
          </span>
        </div>
        <div className="container__table-PMS">
          <table className="table__book-PMS">
            <tbody>
              {bookList.map((item, index) => (
                <tr key={index}>
                  <td className="table__book-id">{item.ID_Sach}</td>
                  <td className="table__book-name">{item.TenSach}</td>
                  <td>{item.TenTheLoai}</td>
                  <td>{item.TenTacGia}</td>
                  <td className="table__button-wrapper">
                    <button className="button--ignore" onClick={() => handleRemove(index)}>Xóa</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <span className="container__button-wrapper">
          <button className="button--submit" onClick={handleClickOK}>OK</button>
        </span>
      </div>
    </div>
    
  )
}

export default PhieuMuonSach
