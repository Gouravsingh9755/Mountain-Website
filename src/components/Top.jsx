import React, { useEffect, useRef } from "react";

const Top = () => {
  const mystyle = {
    backgroundImage: `linear-gradient(135deg, #0b1d26, transparent 250%`,
  };

  return (
    <>
      <div data-scroll-section data-scroll className="main-parent w-full relative">
        <div className="Top-container h-[120vh] w-full relative over-x-hidden">
        <nav className="nav h-14 w-screen  flex justify-between  px-20 absolute top-10 z-[99] selection:text-yellow-500">
                <h1 className="h1 font-bold text-4xl text-white">MNTN</h1>
                <ul className="ul text-white flex justify-between  gap-10 mt-3 ">
                  <h3 className="H3 font-bold text-xl">Equipment</h3>
                  <h3 className="h3 font-bold text-xl">About us</h3>
                  <h3 className="h3 font-bold text-xl">Blog</h3>
                </ul>
                <h3 class='tracking-wider' className="h3 font-bold text-2xl text-white mt-2 break-words ">
                  <i class="ri-map-pin-user-line"></i>Account
                </h3>
              </nav>

            


          <div className="imgbox h-[100vh] relative w-full">
            <div
              style={mystyle}
              className="overlay z-20   relative top-0 left-0 right-0 bottom-0 h-[150%] w-[100%] opacity-[0.6] "
            >

         <div id="hero_boxheading"
             data-scroll
             data-scroll-speed={-9.5}
             
             className="hero-content  h-[52vh] w-[100vw] absolute top-[0%] left-0 z-[20]">

              <h3 id="up_heading"
              className="font-black text-xl font-sans tracking-[3px] absolute z-30 top-[20%]  left-60   text-yellow-300 selection:text-yellow-500">
              ------- A  HIKING  GUIDE
            </h3>
              
              <h1  id="heading"
             
               className='font-serif text-7xl absolute z-30 top-[36%]  left-60  text-white selection:text-yellow-500'>Be Prepared For The <br /> Mountains And Beyond!</h1>

              <h3 id="up_heading"
              className="font-black text-[14px] font-sans absolute z-30 top-[85%]   left-60   text-white selection:text-yellow-500"> Scroll Down
            </h3>

            <img className="downarrow  absolute z-30 top-[92%]   left-[19%] h-[5vh] " src="https://media0.giphy.com/media/a2e4I5koserzi0buol/giphy.webp" alt="" />

            </div>

          

            </div>

            <img
              id="clouds"
              data-scroll
              data-scroll-speed={8}
              className="Clouds absolute top-0 left-0 right-0 bottom-0 h-full w-full"
              src="https://uploads-ssl.webflow.com/5e2d678660dc1a91f8ef1b43/5e2ef69177e46b5af0a934d3_HG-p-800.png"
              alt=""
            />
            <img
              id="mountain"
              data-scroll
              data-scroll-speed={3}
              src="https://uploads-ssl.webflow.com/5e2d678660dc1a91f8ef1b43/5e2efe3612d935f25afe0047_MG-p-800.png"
              className="Mountains absolute top-40 left-0 right-0 h-[140vh] w-full"
              alt=""
            />
            <img
              id="hill"
              data-scroll
              data-scroll-speed={5}
              src="https://uploads-ssl.webflow.com/5e2d678660dc1a91f8ef1b43/5e5153232c16e86a280a22be_VG-p-800.png"
              className="Hill  absolute top-[18%] z-40 align-middle inline-block left-[0%] right-[0%] bottom-[0%] w-full max-w-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Top;
