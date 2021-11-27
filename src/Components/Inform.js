import React from 'react';
import './Inform.css';
import informImg from '../Assets/Images/Image-button.png';

function Inform() {
  return (
    <div className="inform">
      <div className="inform__triangle"></div>
      <div className="inform__wrapper">
        <div className="inform__text">
          <h4>Thông báo</h4>
          <p>Đánh đấu đã đọc</p>
        </div>

        <div className="inform__content">
          <img src={informImg} alt="Inform_img"/>
          <div className="inform__content-details">
            <p>Đã thêm 2 phiếu phạt mới</p>
            <p><i className="far fa-clock"></i>Cách đây vài phút</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inform
