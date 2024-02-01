import React from "react";

const Content = () => {
  const mystyle = {
    backgroundImage: 'linear-gradient(180deg, rgba(11, 29, 38, 0), #0b1d26 20%'
  };

  return (
    <div data-scroll-section data-scroll
      style={mystyle}
      className="Content-container relative h-[500vh] w-full z-50   flex  flex-col  gap-40 item-center justify-center font-popins selection:text-yellow-500 overflow-x-hidden"
    >
      <div className="content  h-[120vh] w-[100vw]  flex  justify-center gap-24 contBg ">
        <div className="lcontent    h-[120vh] w-[45%] ">
          <div className="ltop h-[25%] w-full flex flex-col justify-end">
            <h3 className="font-black text-xl font-sans tracking-[3px] text-yellow-300">
              ------- GET STARTED
            </h3>
          </div>

          <div className="lmid h-[45%] w-full  flex flex-col justify-center gap-8">
            <h1 className="maincontent-p1  text-5xl font-semibold font-serif text-white leading-[60px]">
              What level of <br /> hiker are you?
            </h1>

            <p className="maincontent-p1 text-[16px] text-white ">
              Determining what level of hiker you are can be an important tool
              when planning future hikes. This hiking level guide will help you
              plan hikes according to different hike ratings set by various
              websites like All Trails and Modern Hiker. What type of hiker are
              you – novice, moderate, advanced moderate, expert, or expert
              backpacker?
            </p>
          </div>

          <div className="lbottom h-[10%] w-full flex  text-yellow-300 ">
            <h3 className=" font-bold text-2xl font-sans">read more </h3>{" "}
            <span className="text-3xl font-bold pt-[2px] px-3">
              <i className="ri-arrow-right-line"></i>
            </span>
          </div>
        </div>

        <div className="rcontent   h-[110vh] w-[40%] ">
          <img
            className="h-full w-full "
            src="https://uploads-ssl.webflow.com/5e2d678660dc1a91f8ef1b43/5e4fa26c899edf65a8ca751f_01.png"
            alt=""
          />
        </div>
      </div>

      <div className="content  h-[130vh] w-[100vw]  flex flex-row-reverse justify-center gap-24   ">
        <div className="lcontent    h-[120vh] w-[45%] flex flex-col gap-20 ">
          <div className="ltop h-[25%] w-full flex flex-col justify-end">
            <h3 className="font-black text-xl font-sans tracking-[3px] text-yellow-300">
              ------- HIKING ESSENTIALS
            </h3>
          </div>

          <div className="lmid h-[45%] w-full  flex flex-col justify-center gap-8">
            <h1 className="maincontent-p1  text-5xl font-semibold font-serif text-white leading-[60px]">
              Picking the right <br /> Hiking Gear!
            </h1>

            <p className="maincontent-p1 text-[18px] text-white leading-[40px] ">
              The nice thing about beginning hiking is that you don’t really
              need any special gear, you can probably get away with things you
              already have. <br />
              Let’s start with clothing. A typical mistake hiking beginners make
              is wearing jeans and regular clothes, which will get heavy and
              chafe wif they get sweaty or wet.
            </p>
          </div>

          <div className="lbottom h-[10%] w-full flex  text-yellow-300 ">
            <h3 className=" font-bold text-2xl font-sans">read more </h3>{" "}
            <span className="text-3xl font-bold pt-[2px] px-3">
              <i className="ri-arrow-right-line"></i>
            </span>
          </div>
        </div>

        <div className="rcontent   h-[120vh] w-[40%] ">
          <img
            className="h-full w-full "
            src="https://uploads-ssl.webflow.com/5e2d678660dc1a91f8ef1b43/5e4fa26bdca002456c51bb08_02.png"
            alt=""
          />
        </div>
      </div>

      <div className="content  h-[130vh] w-[100vw] flex justify-center gap-24   ">
        <div className="lcontent    h-[120vh] w-[45%] flex flex-col gap-14 ">
          <div className="ltop h-[25%] w-full flex flex-col justify-end">
            <h3 className="font-black text-xl font-sans tracking-[3px] text-yellow-300">
              ------- WHERE YOU GO IS THE KEY
            </h3>
          </div>

          <div className="lmid h-[45%] w-full  flex flex-col justify-center gap-8">
            <h1 className="maincontent-p1  text-5xl font-semibold font-serif text-white leading-[60px]">
            Understand Your <br /> Map & Timing
            </h1>

            <p className="maincontent-p1 text-[18px] text-white leading-[40px] ">
            To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..
            </p>
          </div>

          <div className="lbottom h-[10%] w-full flex  text-yellow-300 ">
            <h3 className=" font-bold text-2xl font-sans">read more </h3>{" "}
            <span className="text-3xl font-bold pt-[2px] px-3">
              <i className="ri-arrow-right-line"></i>
            </span>
          </div>
        </div>

        <div className="rcontent   h-[120vh] w-[40%] ">
          <img
            className="h-full w-full "
            src="https://uploads-ssl.webflow.com/5e2d678660dc1a91f8ef1b43/5e4fa26bdca00251ac51bb06_03.png"
            alt=""
          />
        </div>
      </div>

      
    </div>
  );
};

export default Content;
