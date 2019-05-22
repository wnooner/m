import React from 'react'
import classes from './Landing.module.css'

const Landing = props =>  (
    <div className={classes.Hero}>
    <div className={classes.Container}>
    <h3>Here at Globo Gym, we're better than you, and we know it.</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q</p>
    <button>Learn More &darr;</button>
    </div>
    </div>
)

export default Landing