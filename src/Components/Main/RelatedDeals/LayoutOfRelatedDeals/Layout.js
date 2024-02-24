import React from "react";
import DealsImg from "../../../../Images/DealsImg.svg"
import "./Layout.scss"

export default function Layout({id}){
    return(
        <div id={id?id:"mainBoxOfDeal"}>
            <img src={DealsImg} alt="dealsImage" id="dealsImage"/>

            <div id="offerInBlue">
                <span id="BlueText">20% Off</span>
            </div>
            <div id="limitedTimeBox">
                <span id="limitedTimeText">Limited time </span>
            </div>

            <span id="title">Webbuilder 1</span>

            <p id="descriptionOfRealtedDeals">Computer  Modern clasic with wix support</p>

            <span id="price">$39.96</span>
            <span id="prevPrice">$49.96</span>
            <span id="offerInRed">{`(20% Off)`}</span>

            <button id="dealBtn">
                <span id="btnText">View Deal</span>
            </button>
        </div>
    )
}