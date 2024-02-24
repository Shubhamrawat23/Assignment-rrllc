import React from "react";
import "./Deal.scss"
import LayoutOfDeal from "./LayoutOfDeal/LayoutOfDeal";
import data from "./DataOfDeals";

export default function Deals(){
    console.log(data);
    return(
        <>
            {data && data.map((Value) => (
                <LayoutOfDeal id={`layoutDeal${Value.SerialNo}`} key={Value.SerialNo}   
                SerialNo={Value.SerialNo}
                fullTitle={Value.fullTitle}
                highlightContent={Value.highlightContent}
                pdtName={Value.pdtName}
                productTags={Value.productTag}
                rating={Value.rating}
                ratingStar={Value.ratingStar}
                review={Value.review}
                titleContent={Value.titleContent}/>
            ))}
        </>
    )
}