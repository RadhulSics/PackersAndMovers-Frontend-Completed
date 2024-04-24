import React from "react";
import About from "../About/About";
import Companies from "../Companies/Companies";
import Corousel from "../Corousel/Corousel";
import Navs from "../Nav/Navs";
import Services from "../Services/Services";

function Home() {
  return (
    <div>
      <Navs/>
      <Corousel />
      <About />
      <Services />
      {/* <Companies /> */}
    </div>
  );
}

export default Home;
