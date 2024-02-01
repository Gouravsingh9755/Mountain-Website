import { useRef,useEffect } from "react";
import gsap from "gsap";


const Loading = () => {
    const app = useRef<HTMLDivElement>(null);
    useEffect(() => {
    
        let ctx = gsap.context(() => {

            gsap.to(".loading", { display:"none",pointerEvents:"all",delay :2, duration: .4 });
        
            
        
        }, app);
        
        return () => ctx.revert();
    
      }, [])

    return (

    <div data-scroll-section data-scroll  className="loading w-screen h-[1000vh] bg-red-300 fixed top-0 left-0 right-0 bottom-0 z-[99]">
    </div>
    
  )
}

export default Loading