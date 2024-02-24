import React from "react";
import DownArrVector from "../../Images/Vector.svg"
import "./Footer.scss"

export default function Footer({category,contact}){
    return (
        <footer>
            <div id="categories">CATEGORIES</div>
            {category && category.map((value,i)=>(
                <div key={i} id={`category${i}`}>
                    {value}
                </div>
            ))}

            <div id="contact">CONTACT</div>
            {contact && contact.map((value,i)=>(
                <div key={i} id={`contact${i}`}>
                    {value}
                </div>
            ))}

            <div id="country">United States</div>
            <div id="DownArrBox">
                <img src={DownArrVector} alt="downArr" id="ctryDownArr" />
            </div>
        </footer>
    )
}