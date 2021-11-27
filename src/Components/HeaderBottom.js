import React, { useEffect, useRef, useState } from 'react';
import './HeaderBottom.css';
import image1 from '../Assets/Images/image 1.png';
import image2 from '../Assets/Images/image 2.png';
import image3 from '../Assets/Images/image 3.png';
import image4 from '../Assets/Images/image 4.png';

function HeaderBottom() {
  const [page, setPage] = useState(0);
  const [move, setMove] = useState(0);

  const arr = [image1, image2, image3, image4]

  const slide = useRef();

  const handleButton = (i) => {
    setPage(i);
  }

  const handleToLeft = () => {
    if(page > 0) {
      setPage(page => page - 1);
    }
  }

  const handleToRight = () => {
    if(page < 3) {
      setPage(page => page + 1);
    }
  }


  useEffect(() => {
    setMove(slide.current.clientWidth*page)
  }, [page]);

  return (
    <div className="headerBottom">
      <div className="headerBottom__wrap">
        <div className="iconWrapLeft">
          <i className="fas fa-angle-left" onClick={handleToLeft}></i>
        </div>
        <div className="headerBottom__slideWrap">
          <div className="headerBottom__slide" style={{left: -move+"px"}}>
            {arr.map((item, index) => (
              <img key={index} src={item} alt="Header slide" ref={slide}/>
            ))}
          </div>
        </div>
        <div className="iconWrapRight">
          <i className="fas fa-angle-right" onClick={handleToRight}></i>
        </div>

      </div>

      <div className="headerBottom__buttonWrap">
        <div className="headerBottom__button">
          {arr.map((item, index) => (
            <img 
              key={index}
              src={item} 
              alt="Header slide" 
              onClick={() => handleButton(index)}
              style={{opacity: index===page ? "0.6" : ""}}
            />
          ))}
        </div>
      </div>

    </div>
  )
}

export default HeaderBottom
