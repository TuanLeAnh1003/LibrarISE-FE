import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import './SignIn.css';

function SignIn({getUserName, getUserPass}) {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const history = useHistory()

    const handleSignIn = () => {
        if(userName !== "" && userPassword !== "") {
            axios.post('http://localhost:5000/admin/signin', {
                userName: userName,
                userPassword: userPassword,
            })
            .then(res => {
                if(res.data.recordset.length === 1) {
                    getUserName(res.data.recordset[0].USERNAME);
                    getUserPass(res.data.recordset[0].USERPASS);
                    console.log(userName, userPassword);
                    history.push('/thuvien/');
                } else {
                    alert("Tài khoản này không tồn tại. Hãy thử lại!")
                    setUserName('');
                    setUserPassword('');
                }                    
            })
            .catch(err => alert("Có lỗi xảy ra, vui lòng đăng nhập lại!"))
        } else {
            alert('Có trường vẫn chưa được nhập!');
        }
    }



    useEffect(() => {
        return () => {
            setUserName('');
            setUserPassword('');
        }
    }, [])

    return (
    <div className="sign-in">
        <div className="sign-in__introduce">
            <h2 className="introduce__tittle">
            Chào mừng đến với LibrarISE !
            </h2>
            <p className="introduce__description">
            Nhằm khắc phục những hạn chế theo cách quản lý truyền thống, website quản lý thư viện được thiết kế với nhiều ưu điểm vượt trội, giúp chuẩn hóa và nâng cao công tác quản lý.
            </p>
        </div>

        <div className="sign-in__form">
            <div action="" className="form__infor">
                <h3 className="form__infor-title">Đăng nhập</h3>
                <p className="form__infor-description">Chuẩn hóa và nâng cao công tác quản lý</p>
                <input 
                    type="text" 
                    value={userName}
                    className="form__infor-input" 
                    placeholder="Tên người dùng" 
                    onChange={e => setUserName(e.target.value)}
                />
                <input 
                    type="password" 
                    value={userPassword}
                    className="form__infor-input" 
                    placeholder="Mật khẩu" 
                    onChange={e => setUserPassword(e.target.value)}
                />
                <a href="#" className="form__infor-forgot-password">Quên mật khẩu</a>
                <button className="form__btn-sign-in" onClick={handleSignIn}>Đăng nhập</button>
            </div>
        </div>
    </div>
  )
}

export default SignIn
