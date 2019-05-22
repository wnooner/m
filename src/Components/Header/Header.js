import React from 'react'
import NavBar from '../NavBar/NavBar'
import classes from './Header.module.css'

const Header = props => {

        return (
            <div className={classes.Header}>
                <div className={classes.Logo}>Logo</div>
                <NavBar />
            </div>
        )
    
}

export default Header