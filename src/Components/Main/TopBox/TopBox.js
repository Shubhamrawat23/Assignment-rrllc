import React from "react";
import '../TopBox/TopBox.scss'
import Tick from '../../../Images/Tick.svg'
import iCirc from '../../../Images/iCirc.svg'
import DownArr from '../../../Images/DownArr.svg'


export default function TopBox() {
    return(
        <section>
                <p>Best Website builders in the US</p>
            
            <hr id="line1"/>

            <div>
                <ul>
                    <li>
                        <img src={Tick} alt="Tick" id="tickImg" />
                        <span id="lastUpdate">Last Updated</span>
                    </li>
                    <li id="dash">-</li>
                    <li id="date">February 22, 2020</li>
                    <li>
                        <img src={iCirc} alt="iCircle" id="iCircle" />
                        <span id="AdDisc">Advertising Disclosure</span>
                    </li>
                </ul>
                <span id="filter">Top Relevant</span>
                <span><img src={DownArr} alt="DownArr" id="DropArrow"/></span>
            </div>

            <hr/>
        </section>
    )
}