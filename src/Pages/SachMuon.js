import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PhieuMuonSach from '../Components/PhieuMuonSach';
import './SachMuon.css';

function SachMuon() {
  const [listBorrowedBooks, setListBorrowedBooks] = useState([]);
  const [isBorrow, setIsBorrow] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/admin/sachmuon')
    .then(data => {
      if(data.data.length >= 1) {
        setListBorrowedBooks([...data.data]);
      } else {
        alert("Không có sách đang được mượn!");
      }
    })
    .catch(err => alert('Có lỗi xảy ra. Hãy thử tải lại trang!'));
  },[])

  const handleAdd = () => {
    setIsBorrow(true);
  }

  const childState = (state) => {
    setIsBorrow(state)
  }

  return (
    <div className="container-PMS">
      <div className="container__table">
          <table className="table__book">
              <thead>
                  <tr className="table__book-header">
                      <th></th>
                      <th className="table__stt">STT</th>
                      <th className="table__col-3">Tên sách</th>
                      <th className="table__col-4">Thể loại</th>
                      <th className="table__col-5">Tác giả</th>
                      <th className="table__col-6">Trị giá</th>
                      <th className="table__col-7">Nhà xuất bản</th>
                  </tr>
              </thead>

              <tbody>
                {listBorrowedBooks.map((item, index) => (
                  <tr key={index}>
                      <td className="table__check"><input type="checkbox"/></td>
                      <td className="table__stt">{index+1}</td>
                      <td >{item.TenSach}</td>
                      <td >{item.TenTheLoai}</td>
                      <td >{item.TenTacGia}</td>
                      <td >{item.TriGia}đ</td>
                      <td >{item.TenNXB}</td>
                  </tr>
                ))}
              </tbody> 
          </table>
      </div>

      <div className="container__button">
          <button className="button" onClick={handleAdd}>Thêm</button>
          <button className="button">Xóa</button>
          <button className="button">Sửa</button>
      </div>

      {isBorrow ? <PhieuMuonSach handleClick={childState}/> : ""}
  </div>

  )
}

export default SachMuon
