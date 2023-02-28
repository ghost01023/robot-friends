import React from 'react';
import Card from './card.js';
import "./card.css";

const CARD_LIST = ({ROBOTS}) => {
    return (<div className={"big-Div"}>
            {ROBOTS.map(robot => {
                return (<Card
                    key={robot.id}
                    id={robot.id}
                    name={robot.name}
                    username={robot.username}
                    email={robot.email}/>
                );
            })
            }
        </div>
    )
}


export default CARD_LIST;