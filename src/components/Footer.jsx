import React from 'react'

const Footer = () => {
  return (
    <div className='Footer-container  h-[100vh]  w-full  bg-slate-900   flex selection:text-yellow-500 '>

      <div className="L-footer h-full w-[50vw]  flex  items-center  justify-center">

        <div className="L-content  h-[50vh]   w-[40vw] ">

        <div className="L-top   h-[10vh]   font-popins   font-bold   text-4xl   text-white">

          <h1>MNTN</h1></div>

         <div className="L-bottom   h-[40vh]    font-popins   font-medium   text-lg   text-white  flex   

         flex-col justify-top gap-14 mt-5">
          
          <p>Get out there & discover your next <br />slope, mountain & destination!</p>

        <p className='text-slate-500'>Copyright 2023 MNTN, Inc. Terms & Privacy <br /> A concept by Kryston Schwarze</p>

        </div>

      </div>

     </div>

     <div className="R-footer  h-full    w-[50vw]  flex   items-center   justify-center   gap-10   font-popins">

        <div className="R-left h-[48vh]  w-[20vw]   font-bold   text-2xl   flex   flex-col justify-top   gap-8  text-yellow-300">

          <h1>More on The Blog</h1>

          <ul className='flex   flex-col   font-thin   gap-3   text-white   text-lg'>

            <li>About MNTN</li>
            <li>Contributers & Writers</li>
            <li>Write For Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>

        </div>

         <div className="R-right   h-[48vh]   w-[20vw]   font-bold   text-2xl    flex   flex-col   justify-top  gap-8   text-yellow-300">    

         <h1>More on MNTN</h1>

          <ul className='flex   flex-col   font-thin gap-3    text-white    text-lg'>
            <li>The Team</li>
            <li>Jobs</li>
            <li>Press</li>
          </ul>    

          </div>
          
      </div>

      </div>

    
  )
}

export default Footer