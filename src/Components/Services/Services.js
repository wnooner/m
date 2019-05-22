import React from 'react'
import classes from './Services.module.css'
import Service from './Service'
import kitten from '../../images/kitten.jpg'

const Services = props => {

    return (
        <div className={classes.Main}>
            <h1>We Design, Build, &amp; Manage Marketing Systems that Grow Your Brand.</h1>
            <div className={classes.Servicelist}>
                <Service
                    image={kitten}
                    altText={`Cute kitten!`}
                    text={`Influencer Developement`}
                />
                <Service
                    image={kitten}
                    altText={`Cute kitten!`}
                    text={`Content Management`}
                />
                <Service
                    image={kitten}
                    altText={`Cute kitten!`}
                    text={`Social Syndication`}
                />
                <Service
                    image={kitten}
                    altText={`Cute kitten!`}
                    text={`Paid Media Advertising`} />
            </div>
            <button className={classes.Servicebutton}>VIEW ALL SERVICES &rarr; </button>
        </div>
    )

}

export default Services