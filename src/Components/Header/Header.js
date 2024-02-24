import React  from "react";
import '../Header/Header.scss'
import SearchImg from '../../Images/SearchImg.svg'

export default function Header(){
    return (
        <header>
            <ul>
                <li><img src={SearchImg} alt="searchImg" id="searchImg"/><input type="text" name="search" id="search"/></li>
                <li id="categories">Categories</li>
                <li id="webBuilder">Website Builders</li>
                <li id="deals">Today's deals</li>
            </ul>
        </header>
    )
}