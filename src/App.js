import React from "react";
import './App.scss'
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main"
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer category={["Web Builder", "Hosting", "Data Center" ,"Robotic-Automation"]} contact={["Contact", "Privacy Policy", "Terms Of Service", "Categories", "About"]}/>
    </div>
  );
}

export default App;
