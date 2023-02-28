import React from 'react';
import './card.css'
const Card = ({name, email, id, username}) => {
    return (
        <div className={"tc robo-card dib br3 pa3 ma2 grow bw-2 shadow-5"}>
            <img src={"https://robohash.org/" + id} alt={"Jonah's Headshot"} width={"200px"} height={"200px"}/>
            <div className={"each-card"}>
                <h1>{name}</h1>
                <h4>{username}</h4>
                <p>{email.toLowerCase()}</p>
            </div>
        </div>
    )
}

export default Card