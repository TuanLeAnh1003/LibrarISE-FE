import React from 'react'
import './Footer.css'

import Logo from '../Assets/Images/logo-colorful.png'

function Footer() {
    return (
        <div className="footer">
            <img className="footer-img" src={Logo} alt="Logo" />
            <p className="footer-title">@ 2021 All rights reserved.</p>
        </div>
    )
}

export default Footer
