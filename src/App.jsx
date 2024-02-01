import React, { useEffect, useRef } from "react";
import Top from "./components/Top";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import LocomotiveScroll from "locomotive-scroll";
import './index.css'
import {LocomotiveScrollProvider} from "react-locomotive-scroll"

const App = () => {
  
  const scrollRef = useRef(null);



  

  return (
    <LocomotiveScrollProvider options={{smooth:true}} watch={[]} containerRef={scrollRef}>

      <main data-scroll-container  className="overflow-hidden contBg" ref={scrollRef}>

      <Loading/>

    <Top/>
    <Content/>
    <Footer/>
      </main>
  
    </LocomotiveScrollProvider>
  )
};

export default App;
