import React, { useState }  from "react";
import '../Header/Header.scss'
import SearchImg from '../../Images/SearchImg.svg'

export default function Header(){
    const [searchValue,setSearchValue] = useState("")
    const [inputField,setInputField] = useState(false)
    console.log(searchValue);
    return (
        <header>
            <ul>
                <li><img src={SearchImg} alt="searchImg" id="searchImg" style={{display:searchValue !== ""?"none":"block"}} onClick={()=>{setInputField(!inputField)}}/>
                <input type="text" name="search" id={inputField?"R_search":"search"} value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} />
                </li>
                <li id="categories">Categories</li>
                <li id="webBuilder">Website Builders</li>
                <li id="deals">Today's deals</li>
            </ul>
        </header>
    )
}