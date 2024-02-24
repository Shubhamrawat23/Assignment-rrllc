import React from "react";
import RightArrow from "../../../Images/RightArrow.svg"
import "./MenuBar.scss"

export default function MenuBar(){
    return (
        <>
        <span id="home">Home</span>
        <img src={RightArrow} alt="rtArr" id="rtArr1"/>

        <span id="allHost">Hosting for all</span>
        <img src={RightArrow} alt="rtArr" id="rtArr2"/>

        <span id="hosting">Hosting</span>
        <img src={RightArrow} alt="rtArr" id="rtArr3"/>

        <span id="hosting6">Hosting6</span>
        <img src={RightArrow} alt="rtArr" id="rtArr4"/>

        <span id="hosting5">Hosting5</span>
        </>
    )
}