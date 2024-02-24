import React from "react";
import "./LayoutOfDeal.scss"
import DealsImg from "../../../../Images/DealsImg.svg"
import BlueArrDown from "../../../../Images/BlueArrDown.svg"
import CircleTick from "../../../../Images/CircleTick.svg"

export default function LayoutOfDeal({
    id,
    SerialNo,
    fullTitle,
    highlightContent=[],
    pdtName,
    productTags,
    rating,
    ratingStar,
    review,
    titleContent
}){
    let imgValueOfTag, imgValueOfratingStar ;
    if (productTags) {
        if (productTags.pdtImg.Cup) {
            imgValueOfTag = productTags.pdtImg.Cup
        }
        else{
            imgValueOfTag = productTags.pdtImg.diamond
        }
    }

    if (ratingStar) {
        if (ratingStar.fullStar) {
            imgValueOfratingStar = ratingStar.fullStar
        }
        else if(ratingStar.excellentStar)imgValueOfratingStar=ratingStar.excellentStar

        else imgValueOfratingStar = ratingStar.veryGooodStar
    }

    return (
        <div id={id?id:"DealBox"}>
            <div id={productTags?"bestChoiceBox":"noPdtTag"}>
                <img src={productTags && imgValueOfTag} alt="cup" id="cup"/>
                <span id="bestChoice">{productTags && productTags.pdtVlue}</span>
            </div>

            <div id="serialBox">
                <span id="serialNo">{SerialNo}</span>
            </div>
            
            <p id={SerialNo===4?"descriptionOfDeal4":"descriptionOfDeal"}><strong style={{font:"Inter", fontWeight:"700", fontSize:"16px", lineHeight:"24px", color:"rgba(75, 86, 101, 1)"}}>{fullTitle}</strong>{titleContent}</p>
            <div id={SerialNo===4?"offerInDeal4":"noOfferDeal4"}><span id="offerDeal4Text">26% Off</span></div>
            <p id={SerialNo===4?"highlightText4":"highlightText"}>Main highlights</p>

            {SerialNo ===4 ?
                (
                    <div>
                        <ul id="mainHighlightPtsOf4Deal">
                            {highlightContent.map((Value, index) => (
                                <li key={index}>
                                    <div id={`point${index}`}><span id={`pointText${index}`}>{Value.highlight}</span></div>
                                    <div id={`aboutPoint${index}`}>{Value.highlightText}</div>
                                </li>
                            ))}
                        </ul>

                        <div id="quesDeal4">Why we love it</div>
                        <div>
                            <img src={CircleTick} alt="circleTick" id="circleTick1"/>
                            <span id="Ans1">Documentation</span>
                        </div>
                        <div>
                            <img src={CircleTick} alt="circleTick" id="circleTick2"/>
                            <span id="Ans2">Easy Use</span>
                        </div>
                        <div>
                            <img src={CircleTick} alt="circleTick" id="circleTick3"/>
                            <span id="Ans3">Out of box</span>
                        </div>

                    </div>
                )
                : (<p id="highlightDesc">{highlightContent && highlightContent}</p>)
                }
            
            <img src={DealsImg} alt="dealImg" id={SerialNo===4?"dealImg4":(SerialNo===3?"dealImg3":"dealImg")}/>
            <span id={SerialNo===4?"builderOfDeal4":"builderOfDeal"}>{pdtName}</span>

            <div id={SerialNo===4?"showMoreAboutDeal4":"showMoreAboutDeals"}>Show more</div>
            <span id="ArrowOfDeal" style={SerialNo===4||SerialNo===3?{display:"none"}:{display:"block"}}><img src={BlueArrDown} alt="BluedownArr" id="BlueArrOfDeal"/></span> 

            <div id={SerialNo===4?"reviewsOfDealBox4":"reviewsOfDealBox"}>
                <span id="rating">{rating}</span>
                <span id="review">{review}</span>
                <img src={ratingStar && imgValueOfratingStar} alt="starReview" id="ratingStar"/>
            </div>

            <div id={SerialNo===4?"viewBtn4":"viewBtn"}>
                <span id={SerialNo===4?"dealsViewText4":"dealsViewText"}>View</span>
            </div>
        </div>
    )
}