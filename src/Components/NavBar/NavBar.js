import React from 'react'
//import {NavLink} from 'react-router-dom'
import classes from './NavBar.module.css'

const NavBar = props => {
        const items = ['Home', 'Services', 'About', 'Staff', 'Blog']
        const navs = items.map((item)=>
        <span className={classes.Navlink} key={item}>{item}</span>
        )
        return (
            <div className={classes.Navlist}>
                {navs}
            </div>
        )
}

export default NavBar