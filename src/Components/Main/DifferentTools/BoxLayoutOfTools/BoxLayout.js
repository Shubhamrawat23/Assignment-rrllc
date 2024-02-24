import React from "react";
import '../BoxLayoutOfTools/BoxLayout.scss'

export default function BoxLayout({toolName,id}){
    console.log(id);
    return (
        <div id={id}>
            <span id={`${id}Text`}>{toolName}</span>
        </div>
    )
}