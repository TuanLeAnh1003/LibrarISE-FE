import React, { useEffect, useState } from 'react'
import './HeaderAccount.css'

import Avatar from '../Assets/Images/avatar.png'
import { Link } from 'react-router-dom'
import axios from 'axios';

function HeaderAccount({name}) {

    return (
        <div className="header-account">
            <Link to="/thuvien/account/"><img className="header-account-avatar" src={Avatar} alt="Avatar"/></Link>
            <p className="header-account-name">{name}</p>
            <i className="header-account-down fas fa-caret-down"></i>
        </div>
    )
}

export default HeaderAccount
