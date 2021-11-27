import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import './Account.css';

function Account({userName, userPass}) {
  const [readerName, setReaderName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const history = useHistory();

  const handleUpdate = () => {
    if(readerName !== "" && phone !== "" && email !== "" && address !== "") {
      // axios.post()
      // .then()
      history.push('/thuvien/')
    } else {
      alert('Có trường vẫn chưa được nhập!');
    }
  }

  const handleClose = () => {
    history.push('/thuvien/');
  }

  //mới đầu vào dùng useEffect để lấy thông tin user lên đưa vào placeholder
  useEffect(() => {
    axios.get('http://localhost:5000/admin/signin')
    .then(res => console.log(res))
    .catch(err =>  console.log(err))
  }, []);

  return (
    <div className="account-wrap">
    <div className="account">
        <div className="account__main">
            <div className="close">
              <i className="fas fa-times close-icon" onClick={handleClose}></i>
            </div>
            <div className="header">
               
                <div className="header__avatar">
                    <div className="header__avatar-edit">
                        <img src="./img/Edit.png" alt="photo"/>
                    </div>
                </div>
                <h3 className="header__name">{userName}</h3>
            </div>
            <form className="form">
                <div className="form-group">
                    <label for="fullname" className="form-label">Họ Tên</label>
                    <input 
                      type="text" 
                      value={readerName}
                      name="fullname" 
                      className="form-input"
                      onChange={e => setReaderName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label for="numberphone" className="form-label">Số điện thoại</label>
                    <input 
                      type="text" 
                      value={phone}
                      name="numberphone" 
                      className="form-input"
                      onChange={e => setPhone(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label for="Email" className="form-label">Email</label>
                    <input 
                      type="email" 
                      value={email}
                      name="email" 
                      className="form-input"
                      onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label for="address" className="form-label">Địa chỉ</label>
                    <input 
                      type="text" 
                      value={address}
                      name="address" 
                      className="form-input"
                      onChange={e => setAddress(e.target.value)}
                    />
                </div>
                <div className="btn">
                    <button className="btn-update" onClick={handleUpdate}>Cập nhật</button>
                </div>
            </form>
        </div>

    </div>
    </div>
      
  )
}

export default Account
