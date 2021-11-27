import axios from 'axios';
import React, { useState } from 'react';
import './PhieuTraSach.css';

function PhieuTraSach({handleClick}) {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [fine, setFine] = useState('');
  const [debt, setDebt] = useState('');
  const [all, setAll] = useState('');

  const handleSubmit = () => {
    if(day !== "" && month !== "" && year !== "" && fine !== "" && debt !== "" && all !== "") {
      // await axios.post()
      // .then()
      handleClick(false);
    } else {
      alert('Vẫn còn trường chưa được nhập !');
    }
  }

  return (
    <div className="LPTS__wrapper" onClick={() => handleClick(false)}>
      <div className="LPTS" onClick={e => e.stopPropagation()}>
        <h2 className="LPTS__h2">lập phiếu trả sách</h2>
        <div  className="LPTS__section"> 
            <div className="section-container">
                <div className="section-element">
                    <i className="fas fa-user-alt"></i>
                    <label>Độc giả</label>
                    <span>
                        <input type="text" name="IDDG" placeholder="Nhập ID độc giả" className="section-element__input"/>
                        <span>
                            <button className="section-element__click button--hover">OK</button>
                        </span>
                    </span>
                </div>
                <div className="section-element ">
                  <i class="fas fa-calendar-alt"></i>    
                  <label>Ngày lập phiếu</label>
                    <span className="section-element__date">
                        <input 
                          type="number" 
                          min="1" 
                          max="31" 
                          value="1" 
                          className="section-element__input"
                          onChange={e => setDay(e.target.value)}
                        />
                    </span>
                    <span className="section-element__date">
                        <input 
                          type="number" 
                          min="1" 
                          max="12" 
                          value="1" 
                          className="section-element__input"
                          onChange={e => setMonth(e.target.value)}
                        />
                    </span>
                    <span className="section-element__date">
                        <input
                          type="number"
                          min="1899"
                          max="2021"
                          value="2001"
                          style={{width: "80px"}}
                          className="section-element__input"
                          onChange={e => setYear(e.target.value)}
                        />
                    </span>
                </div>
                <div className="section-element ">
                    
                    <label className= "element--margin">Tiền phạt kỳ này</label>
                    <span>
                        <input 
                          type="text" 
                          name="IDDG" 
                          placeholder="Nhập số tiền phạt" 
                          className="section-element__input"
                          onChange={e => setFine(e.target.value)}
                        />
                    
                    </span>
                </div>
                <div className="section-element ">
                    
                    <label className= "element--margin">Tổng nợ kỳ này</label>
                    <span>
                        <input 
                          type="text" 
                          name="IDDG" 
                          placeholder="Nhập số tiền nợ" 
                          className="section-element__input"
                          onChange={e => setDebt(e.target.value)}
                        />
                    
                    </span>
                </div>
                <div className="section-element ">
                    
                    <label className= "element--margin">Tổng nợ</label>
                    <span>
                        <input 
                          type="text" 
                          name="IDDG" 
                          placeholder="Tổng nợ" 
                          className="section-element__input"
                          onChange={e => setAll(e.target.value)}
                        />
                    
                    </span>
                </div>
            </div>
            
            <div className="section-tables">
                <div className="section-tables__heading">
                  <i class="fas fa-book-open"></i>
                    <span>Sách đã mượn</span>
                </div>
                <div className="section-tables__container">
                    <table className="container-table">
                        <thead>
                            <tr>
                                <th></th>
                                <th scope="colgroup">STT</th>
                                <th scope="col">Mã Sách</th>
                                <th scope="col">Tên Sách</th>
                                <th scope="col">Số ngày mượn</th>
                                <th scope="col">Số lượng</th>
                                <th scope="col">Tiền Phạt</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input type="checkbox" className="table__checkbox"/>
                                </td>  
                                <td>1</td>                       
                                <td>D0001</td>
                                <td>A Game of Thrones</td>
                                <td>04</td>
                                <td>01</td>
                                <td>0đ</td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" className="table__checkbox"/>
                                   
                                </td>
                                <td>2</td>
                                <td>D0002</td>
                                <td>Candide</td>
                                <td>06</td>
                                <td>01</td>
                                <td>0đ</td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" className="table__checkbox"/>
                                    
                                </td>
                                <td>3</td>
                                <td>D0003</td>
                                <td>The Little Prince</td>
                                <td>08</td>
                                <td>01</td>
                                <td>0đ</td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" className="table__checkbox"/>
                                    
                                </td>
                                <td>4</td>
                                <td>D0004</td>
                                <td>Candide</td>
                                <td>15</td>
                                <td>02</td>
                                <td>0đ</td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" className="table__checkbox"/>
                                    
                                </td>
                                <td>5</td>
                                <td>D0005</td>
                                <td>To Kill a Mockingbird</td>
                                <td>20</td>
                                <td>01</td>
                                <td>5000đ</td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" className="table__checkbox"/>
                                    
                                </td>
                                <td>6</td>
                                <td>D0006</td>
                                <td>The Alchemist</td>
                                <td>03</td>
                                <td>02</td>
                                <td>0đ</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div className="section-tables__click button--hover">
                    <button className="Click-success" onClick={handleSubmit}>Tạo phếu</button>
                </div>
            </div>
        </div> 
      </div>
    </div>
  )
}

export default PhieuTraSach
