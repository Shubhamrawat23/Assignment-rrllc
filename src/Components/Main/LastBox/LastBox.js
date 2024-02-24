import React from "react";
import "./LastBox.scss"

export default function LastBox(){
    return(
        <div id="lastBox">
            <div id="signAndDealText"> 
                Sign up and get exclusive special deals
            </div>

            <input type="email" name="email" id="emailInput"/>
            <button id="SignUpBtn">
                <span id="SignUpText">Sign Up</span>
            </button>
        </div>
    )
}