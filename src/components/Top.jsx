import React, { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Top = () => {
  const addtoRefs = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      gsap.to(
        "#clouds",
        {
          top: -200,
          scrollTrigger: {
            trigger: "#clouds",
            start: "top top",
            scrub: true,
            // markers: true,
            toggleActions: "restart none none none",
          },
        },
      )
        gsap.to(
          "#mountain",
          {
              scrollTrigger: {
                  trigger: "#mountain",
                  end:"top top",
                  start: "top 35%",
                  scrub: true,
                  markers: true,
                  toggleActions: "restart none none none",
                },
                top: 100,
          },
          
      //   )
      //   gsap.to(
      //     "#hill",
      //     {
      //       scrollTrigger: {
      //         trigger: "#hill",
      //         start: "top 52%",
      //         end:"top top",
      //         scrub: true,
      //       //   markers: true,
      //         toggleActions: "restart none none none",
      //       },
      //       top: 400,
      //     },
          
      //   );
    }, addtoRefs);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="main-parent w-full relative">
        <div className="Top-container h-[120vh] w-full relativeover-x-hidden">
          <div ref={addtoRefs} className="imgbox h-[100vh] relative w-full">
            <img
              id="clouds"
              className="Clouds absolute top-0 left-0 right-0 bottom-0 h-full w-full"
              src="https://uploads-ssl.webflow.com/5e2d678660dc1a91f8ef1b43/5e2ef69177e46b5af0a934d3_HG-p-800.png"
              alt=""
            />
            <img
              id="mountain"
              src="https://uploads-ssl.webflow.com/5e2d678660dc1a91f8ef1b43/5e2efe3612d935f25afe0047_MG-p-800.png"
              className="Mountains absolute top-72 left-0 right-0 h-full w-full"
              alt=""
            />
            <img
              id="hill"
              src="https://uploads-ssl.webflow.com/5e2d678660dc1a91f8ef1b43/5e5153232c16e86a280a22be_VG-p-800.png"
              className="Hill  absolute top-[60%] align-middle inline-block left-[0%] right-[0%] bottom-[0%] w-full max-w-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Top;
