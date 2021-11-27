import React, { useState } from 'react';
import axios from 'axios';
import './PhieuThuTienPhat.css';

function PhieuThuTienPhat({handleClick}) {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [debt, setDebt] = useState('');
  const [collect, setCollect] = useState('');
  const [remain, setRemain] = useState('');

  const handleOk = async () => {
    if(name !== "" && debt !== "" && collect !== "" && remain !== "") {
      // await axios.post('')
      // .then()
      // .catch()
      handleClick(false);
    } else {
      alert("Có trường thiếu thông tin!")
    }

  }

  return (
    <div className="phieuthu" onClick={() => handleClick(false)}>
      <div className="phieuthu_container" onClick={e => e.stopPropagation()}>
        <div className="phieuthu_diendocgia">
          <div className="phieuthu_diendocgia_kihieu">
            <i className="fas fa-user-circle"></i>
            Độc giả
          </div>
          <div className="phieuthu_diendocgia-id">
            <div className="phieuthu__diendocgia-id_id">
              <input 
                type="text" 
                value={id}
                className="phieuthu__input_id" 
                placeholder="Nhập ID độc giả" 
                onChange={e => setId(e.target.value)}
              />
            </div>
            <button className="phieuthu_diendocgia-id__ok">
              OK
            </button>
          </div>
        </div>
        <div className="phieuthu_header">
             <h1>PHIẾU THU TIỀN PHẠT</h1>
        </div>
        <div className="phieuthu__form">
                <div className="phieuthu__formgroup">
                    Họ tên độc giả
                    <input 
                      type="text" 
                      value={name}
                      className="phieuthu__input" 
                      placeholder="Nhập họ và tên" 
                      onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="phieuthu__formgroup">
                    Tổng nợ
                    <input 
                      type="text" 
                      value={debt}
                      className="phieuthu__input" 
                      placeholder="Nhập tổng nợ" 
                      onChange={e => setDebt(e.target.value)}
                    />
                </div>
                <div className="phieuthu__formgroup">
                    Số tiền thu
                    <input 
                      type="text" 
                      value={collect}
                      className="phieuthu__input" 
                      placeholder="Nhập số tiền thu" 
                      onChange={e => setCollect(e.target.value)}
                    />
                </div>
                <div className="phieuthu__formgroup">
                    Còn nợ
                    <input 
                      type="text" 
                      value={remain}
                      className="phieuthu__input" 
                      placeholder="Nhập khoản còn nợ" 
                      onChange={e => setRemain(e.target.value)}
                    />
                </div>
            </div>
            <div className="phieuthu_nut">
                <button 
                  className="phieuthu_nut__ok"
                  onClick={handleOk}
                >
                    OK
                </button>
            </div>
        </div>
    </div>         
  )
}

export default PhieuThuTienPhat
