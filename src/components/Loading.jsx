import { useRef,useEffect } from "react";
import gsap from "gsap";


const Loading = () => {
    const app = useRef<HTMLDivElement>(null);
    const aref =useRef(null)
    
    useEffect(() => {
      const lCont  = aref.current;

      console.log(lCont);


    
        let ctx = gsap.context(() => {
          

            gsap.to(".loading", { display:"none",delay :1, duration: .4 });

        
            
        
        }, app);
        
        return () => ctx.revert();
    
      }, [])

    return (

    <div ref={aref} className="loading w-screen h-[1000vh] bg-black fixed top-0 left-0 right-0 bottom-0 z-[99] flex justify-center pointer-events-auto overflow-hidden"> <h1 className="h1 text-[70px] font-bold text-white mt-[20%]">MNTN</h1>
    </div>
    
  )
}

export default Loading