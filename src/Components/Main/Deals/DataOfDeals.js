import Cup from "../../../Images/Cup.svg"
import fullStar from "../../../Images/5star.svg"
import diamond from "../../../Images/Diamond.svg"
import excellentStar from "../../../Images/4.5star.svg"
import veryGooodStar from "../../../Images/4star.svg"


const data = [
    {
        productTag:{pdtImg:{Cup},pdtVlue:"Best Choice"},
        SerialNo:1,
        pdtName:"Builder 1",
        fullTitle:"WixPro 72-Inch Responsive Website Builder",
        titleContent:"- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
        highlightContent:"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
        rating:9.8,
        review:"Exceptional",
        ratingStar:{fullStar},
    },
    {
        productTag:{pdtImg:{diamond},pdtVlue:"Best Value"},
        SerialNo:2,
        pdtName:"Builder",
        fullTitle:"SiteCraft 68-Inch Ultimate Web Design Studio",
        titleContent:"- Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
        highlightContent:"[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
        rating:9.5,
        review:"Excellent",
        ratingStar:{excellentStar},
    },
    {
        SerialNo:3,
        pdtName:"Builder 1",
        fullTitle:"WixPro 72-Inch Responsive Website Builder",
        titleContent:"- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
        highlightContent:"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
        rating:9.3,
        review:"Exceptional",
        ratingStar:{fullStar},
    },
    {
        SerialNo:4,
        pdtName:"CDK",
        fullTitle:"CDK Resposive Builder:",
        titleContent:" An extensive library of widgets and apps, and detailed step-by-step guides",
        highlightContent:[
            {highlight:9.9,highlightText:"Building Responsive"},
            {highlight:8.9,highlightText:"Cool"},
            {highlight:8.9,highlightText:"Docs"},
        ],
        rating:9.1,
        review:"Very Good",
        ratingStar:{veryGooodStar},
    },
]

export default data;