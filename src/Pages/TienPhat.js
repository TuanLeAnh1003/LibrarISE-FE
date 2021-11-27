import React, {useEffect, useState} from 'react';
import './TienPhat.css';
import PhieuThuTienPhat from '../Components/PhieuThuTienPhat';
import axios from 'axios';

function TienPhat() {
  const [isAdd, setIsAdd] = useState(false);
  const [list, setList] = useState([]);

  const handleAdd = () => {
    setIsAdd(true);
  }

  const childState = (state) => {
    setIsAdd(state)
  }

  useEffect(() => {
    // axios.get()
    // .then()
  }, [list])

  return (
    <div className="container-PTTP">
        <div className="container__table">
            <table className="table__book">
                <thead>
                    <tr className="table__book-header">
                        <th></th>
                        <th className="table__stt">STT</th>
                        <th className="table__col">ID độc giả</th>
                        <th className="table__col">Họ tên</th>
                        <th className="table__col">Tổng nợ</th>
                        <th className="table__col">Số tiền thu</th>
                        <th className="table__col">Còn lại</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="table__check"><input type="checkbox" /></td>
                        <td className="table__stt">1</td>
                        <td>0001</td>
                        <td>Jane Cooper</td>
                        <td>5000đ</td>
                        <td>5000đ</td>
                        <td>0đ</td>
                    </tr>
                </tbody> 
            </table>
        </div>

        <div className="container__button">
            <button className="button" onClick={handleAdd}>Thêm</button>
            <button className="button">Xóa</button>
            <button className="button">Sửa</button>
        </div>

      {isAdd ? <PhieuThuTienPhat handleClick={childState}/> : ""}
    </div>

  )
}

export default TienPhat
