import React from 'react'
import classes from './Service.module.css'
import kitten from '../../images/kitten.jpg'

/*change this to dynamically import images based on props.text */

const Service = props => {
    return (
        <div className = {classes.Service}>
            <img className={classes.ServiceImage} alt={props.altText} src={kitten} />
            <h2>{props.text}</h2>
        </div>
    )

}

export default Service