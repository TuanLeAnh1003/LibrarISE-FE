import React from 'react'
import { useState } from 'react'
import './UsersCreate.css'
import axios from 'axios'

function UsersCreate() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [birthday, setBirthday] = useState()
    const [birthmonth, setBirthmonth] = useState()
    const [birthyear, setBirthyear] = useState()
    const [address, setAddress] = useState('')
    const [cardDay, setCardDay] = useState()
    const [cardMonth, setCardMonth] = useState()
    const [cardYear, setCardYear] = useState()
    const [styleUser, setStyleUser] = useState('')

    const handleExit = () => {
        const createUser = document.querySelector('.users-create-wrapper')

        createUser.style.display = 'none'
    }

    const handleCreateUser = async () => {
        const ngSinh = new Date()
        const ngLapThe = new Date()

        ngSinh.setDate(birthday)
        ngSinh.setMonth(birthmonth)
        ngSinh.setYear(birthyear)
        ngLapThe.setDate(cardDay)
        ngLapThe.setMonth(cardMonth)
        ngLapThe.setYear(cardYear)

        console.log(ngSinh, ngLapThe);

        if (name !== '' && 
            email !== '' && 
            birthday != null &&
            birthmonth != null &&
            birthyear != null &&
            address !== '' && 
            cardDay != null &&
            cardMonth != null &&
            cardYear != null &&
            styleUser !== '') {

                await axios.post('http://localhost:5000/admin/docgia/tao', {
                    hoTen: name,
                    ngSinh: ngSinh,
                    ngLapThe: ngLapThe,
                    email: email,
                    diaChi: address,
                    loaiDocGia: styleUser,
                })
                .then(data => {
                    alert("Thêm thành công")
                    handleExit();
                })
            } else {
                alert('Có trường chưa được nhập')
            }
    }

    return (
        <div className="users-create-wrapper" onClick={handleExit}>
                <div className="container__create-reader" onClick={e => e.stopPropagation()}>
                <h2 className="create-reader__header">LẬP THẺ ĐỘC GIẢ</h2>
                <div className="create-reader__form">
                    <div className="form__element">
                        <i className="fas fa-id-badge"></i>
                        <label>Họ và tên</label>
                        <input type="text" placeholder="Nguyen Duy An" onChange={e => setName(e.target.value)}/>
                    </div>
                    <div className="form__element">
                        <i className="far fa-envelope"></i>
                        <label>Email</label>
                        <input type="text" placeholder="19521179@gm.uit.edu.vn" onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="form__element">
                        <i className="fas fa-birthday-cake"></i>
                        <label>Ngày sinh</label>
                        <span className="element__number-wrapper"><input type="number" min="1" max="31" onChange={e => setBirthday(e.target.value)}/></span>
                        <span className="element__number-wrapper"><input type="number" min="1" max="12"  onChange={e => setBirthmonth(e.target.value - 1)}/></span>
                        <span className="element__number-wrapper"><input type="number" min="1899" max="2021" onChange={e => setBirthyear(e.target.value)}/></span>
                    </div>
                    <div className="form__element">
                        <i className="fas fa-map-marker-alt"></i>
                        <label>Địa chỉ</label>
                        <input type="text" placeholder="Go Vap District, HCM city" onChange={e => setAddress(e.target.value)}/>
                    </div>
                    <div className="form__element">
                        <i className="fas fa-calculator"></i>
                        <label>Ngày lập thẻ</label>
                        <span className="element__number-wrapper"><input type="number" min="1" max="31" onChange={e => setCardDay(e.target.value)}/></span>
                        <span className="element__number-wrapper"><input type="number" min="1" max="12" onChange={e => setCardMonth(e.target.value - 1)}/></span>
                        <span className="element__number-wrapper"><input type="number" min="1899" max="2021" onChange={e => setCardYear(e.target.value)}/></span>
                    </div>
                    <div className="form__element">
                        <i className="fas fa-user"></i>
                        <label>Loại độc giả</label>
                        <span className="element__radio-wrapper">
                            <input type="radio" name="reader-type" value="X" onChange={e => setStyleUser(e.target.value)}/>
                            <label>X</label>
                        </span>
                        <span className="element__radio-wrapper">
                            <input type="radio" name="reader-type" value="Y" onChange={e => setStyleUser(e.target.value)}/>
                            <label>Y</label>
                        </span>
                    </div>
                </div>
                <span className="create-reader__button-wrapper">
                    <button className="button--submit" onClick={handleCreateUser}>Tạo thẻ</button>
                </span>
                <span className="create-reader__note-wrapper">
                    <p>*Thẻ có giá trị trong vòng 06 tháng kể từ ngày lập thẻ</p>
                </span>
                </div>

        </div>
    )
}

export default UsersCreate
