import React from "react";
import "../index.css"

const Loading = () => {
    return (<div>
        <h1 className={"header"}>Machine Men</h1>
        <h1 className={"loading"}>Loading Robots&nbsp;<span className={"dotone"}>.</span><span
            className={"dottwo"}>.</span><span className={"dotthree"}>.</span></h1>
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{margin: 'auto', background: 'transparent', display: 'block'}} width="50px" height="50px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx={50} cy={50} fill="none" stroke="#e15b64" strokeWidth={10} r={35} strokeDasharray="164.93361431346415 56.97787143782138">
                <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1" />
            </circle>
        </svg>
    </div>)
}


export default Loading