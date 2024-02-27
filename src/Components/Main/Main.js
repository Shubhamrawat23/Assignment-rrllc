import "./Main.scss"
import AllTools from "./DifferentTools/AllTools";
import MenuBar from "./MenuBar/MenuBar";
import TopBox from "./TopBox/TopBox";
import RelatedDeals from "./RelatedDeals/RelatedDeals";
import LastBox from "./LastBox/LastBox";
import Deals from "./Deals/Deals";

function Main(){
    return (
        <div id="mainBox">
            <TopBox />
            <AllTools />
            <MenuBar/>
            <Deals/>
            <p id="dealText">Related deals you might like for</p>
            <RelatedDeals/>
            <LastBox/>
        </div>
    )
}
export default Main;