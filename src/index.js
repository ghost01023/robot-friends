import React from 'react';
import ReactDOM from 'react-dom/client';
import 'tachyons';
import './index.css';
import App from "./containers/App.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

// function toCamelCase(str){
//     str = str.split("");
//     const cCd = str.map((letter, index, arr) => {
//         if (letter.match(/[a-z]/gi) && str[index-1] && !str[index-1].match(/[A-Z]/gi) && index > 0) {
//             console.log("match found")
//             return letter.toUpperCase()
//         }
//         else if (!letter.match(/[A-Z]/gi)) {
//             console.log("hyphen dash found")
//             return ""
//         } else {
//             console.log("non matching")
//             return letter
//         }
//     })
//     return cCd.join("");
// }
//
// console.log(toCamelCase("inzy-fcoszal---ljfnqr--ofecedjx-maln-ouqxmb"))