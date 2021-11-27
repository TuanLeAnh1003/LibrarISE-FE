import React from 'react'
import './BookUpdate.css'

function BookUpdate() {
    const handleExit = () => {
        const UpdateBook = document.querySelector('.container-book-wrapper-update')
        
        UpdateBook.style.display = 'none'
    }

    return (
        <div className="container-book-wrapper-update" onClick={handleExit}>
            <div className="container-book" onClick={e => e.stopPropagation()}>
            <h2 className="container__header">SỬA SÁCH</h2>
            <div className="container__form-section">
                <div className="form-section__element">
                <i className="fas fa-id-badge"></i>
                <label>Tên sách</label><br />
                <input type="text" placeholder="CNPM"/>
                </div>
                <div className="form-section__element">
                <i className="fas fa-user"></i>
                <label>Tác giả</label><br />
                <input type="text" placeholder="Tên tác giả"/>
                </div>
                <div className="form-section__element">
                <i className="fas fa-house-user"></i>
                <label>Nhà xuất bản</label>
                <input type="text" placeholder="Tên nhà xuất bản"/>
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
                    />
                </div>
                </div>

                <div className="form-section__element">
                <i className="fas fa-business-time"></i>
                <label>Ngày lập thẻ</label>
                <span className="element__number-wrapper"
                    ><input type="number" min="1" max="31" placeholder="1"
                /></span>
                <span className="element__number-wrapper"
                    ><input type="number" min="1" max="12" placeholder="1"
                /></span>
                <span className="element__number-wrapper"
                    ><input
                    type="number"
                    min="1899"
                    max="2021"
                    placeholder="2021"
                /></span>
                </div>
                <div className="form-section__element">
                <i className="fas fa-book-open"></i>

                <label>Thể loại</label>
                <input type="text" placeholder="A"/>
                </div>
            </div>
            
            <span className="container__button-wrapper">
            <button className="button--submit">Sửa</button>
            </span>
        </div>
    </div>
    )
}

export default BookUpdate
