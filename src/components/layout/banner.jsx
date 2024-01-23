import React from 'react';
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/LOGO.svg'

const Banner = (props) => {
    return(
        <div className="banner">
            <h1 className="banner_title">{props.title}</h1>
        </div>
    )
}

export default Banner