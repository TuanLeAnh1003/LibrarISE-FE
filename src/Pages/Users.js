import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Users.css'

function Users({userInfo}) {
    const [listReaderCards, setListReaderCards] = useState([]);
    const [isAble, setIsAble] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:5000/admin/docgia')
        .then(data => {
          if(data.data.length >= 1) {
            setListReaderCards([...data.data]);
          } else {
            alert("Không có thẻ độc giả nào!");
          }
        })
        .catch(err => alert('Có lỗi xảy ra. Hãy thử tải lại trang!'));
    }, []);

    const handleCreateUser = () => {
        const createUser = document.querySelector('.users-create-wrapper')

        createUser.style.display = 'block'
    }
    const handleRemoveUser = () => {
        var count = 0;
        var listUsers = document.getElementsByName('readerCard')
        listUsers = Array.from(listUsers)
        var chosenUsers = []
        for (var i = 0; i < listUsers.length; i++) {
            if (listUsers[i].checked) {
                chosenUsers.push(listUsers[i].value)
                count++;
            }
        }
        userInfo(chosenUsers)
        if (count >= 1) {
            const removeUser = document.querySelector('.users-remove-wrapper')

            removeUser.style.display = 'block'
        }
    }
    const handleUpdateUser = () => {
        var listCards = document.getElementsByName('readerCard');
        listCards = Array.from(listCards);
        let count = 0;
        for (var i = 0; i < listCards.length; i++) {
            if(listCards[i].checked === true) count++;
        }

        if(count <= 1) {
            const removeUser = document.querySelector('.users-update-wrapper')
            removeUser.style.display = 'block'
        } else {
            setIsAble(false);
        }
        
    }

    return (
        <div className="container">
            <div className="container__table">
                <table className="table__user">
                    <thead>
                        <tr className="table__user-header">
                            <th></th>
                            <th className="table__stt">STT</th>
                            <th className="table__col-2">Họ và tên</th>
                            <th className="table__col-3">Ngày sinh</th>
                            <th className="table__col-4">Ngày lập thẻ</th>
                            <th className="table__col-5">Email</th>
                            <th className="table__col-6">Địa chỉ</th>
                            <th className="table__col-7">Loại độc giả</th>
                        </tr>
                    </thead>

                    <tbody>
                        {listReaderCards.map((item, index) => (
                            <tr key={index}>
                                <td className="table__check"><input type="checkbox" name="readerCard" value={item.HoTen + "/" + item.DiaChi }/></td>
                                <td className="table__stt">{index+1}</td>
                                <td >{item.HoTen}</td>
                                <td >{item.NgSinh}</td>
                                <td >{item.NgLapThe}</td>
                                <td >{item.Email}</td>
                                <td >{item.DiaChi}</td>
                                <td >{item.LoaiDocGia}</td>
                            </tr>
                        ))}
                    </tbody> 
                </table>
            </div>

            <div className="container__button">
                <button className="button" onClick={handleCreateUser}>Tạo thẻ</button>
                <button className="button" onClick={handleRemoveUser}>Xóa thẻ</button>
                <button className="button" onClick={handleUpdateUser} disabled={isAble? "" : "disabled"}>Chỉnh sửa</button>
            </div>


        </div>
    )
}

export default Users
