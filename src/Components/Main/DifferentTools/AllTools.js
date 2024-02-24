import React from "react";
import BoxLayout from "./BoxLayoutOfTools/BoxLayout";
import "./AllTools.scss"

export default function AllTools(){
    return (
        <div>
            <BoxLayout toolName="Tools" id="tool1"/>
            <BoxLayout toolName="AWS Builder" id="tool2"/>
            <BoxLayout toolName="Start Build" id="tool3"/>
            <BoxLayout toolName="Build Supplies" id="tool4"/>
            <BoxLayout toolName="Tooling" id="tool5"/>
            <BoxLayout toolName="BlueHosting" id="tool6"/>
        </div>
    )
}