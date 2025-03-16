"use client";
import { useRive } from "@rive-app/react-canvas-lite";
import { AnimationScope, motion, useAnimate } from "framer-motion";
import textVariants from "./animationVariants";
import { cubicBezier, stagger } from "motion";
import { useEffect } from "react";

export default function RiveLaptopGuy() {
  const { RiveComponent } = useRive({
    src: "./rive/laptop_guy.riv",
    stateMachines: "State Machine",
    autoplay: true,
  });

  useEffect(() => {}, []);

  const [textRef1, animate1] = useAnimate();
  const [textRef2, animate2] = useAnimate();

  const getChar = (str: string) => {
    return str.split("").map((char, index) => (
      <motion.span key={`char_${index}`} custom={index} variants={textVariants} initial={"initial"} animate={"enter"} className="text-4xl">
        {char}
      </motion.span>
    ));
  };

  const onMouseInteraction = (ref: AnimationScope<HTMLDivElement>, type: "enter" | "exit") => {
    if (!ref?.current) return;
    const animFunc = ref.current === textRef1.current ? animate1 : animate2;
    animFunc("div .top-div span", { y: type === "enter" ? [-40, 0] : [0, -40] }, { duration: 0.3, delay: stagger(0.02), ease: cubicBezier(0.76, 0, 0.24, 1) });
    animFunc("div .bottom-div span", { y: type === "enter" ? [-40, 0] : [0, -40] }, { duration: 0.3, delay: stagger(0.02), ease: cubicBezier(0.76, 0, 0.24, 1) });
  };

  const onMouseLeavingRiveCanvas = () => {
    // rive?.re;
  };

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Left section */}
      <div className="flex items-center flex-1 py-6 px-6 md:justify-center">
        <div className="">
          <h2 className="text-xl">Hi there!</h2>
          <h2 className="text-xl">I make Frontend stuffs</h2>
          {/* <div className="overflow-hidden h-10" ref={textRef1} onMouseEnter={() => onMouseInteraction(textRef1, "enter")} onMouseLeave={() => onMouseInteraction(textRef1, "exit")}> */}
          {/* <div className="flex top-div">{getChar("Animation")}</div>
            <div className="flex bottom-div">{getChar("Animation")}</div> */}
          {/* </div> */}
          <div>but with cool</div>
          <div className="overflow-hidden h-10" ref={textRef2} onMouseEnter={() => onMouseInteraction(textRef2, "enter")} onMouseLeave={() => onMouseInteraction(textRef2, "exit")}>
            <div className="flex top-div">{getChar("Animations")}</div>
            <div className="flex bottom-div">{getChar("Animations")}</div>
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="flex-1 flex md:justify-end px-4">
        <div className="md:w-[80vh] md:h-[80vh] w-[50vh] h-[50vh]" onMouseLeave={onMouseLeavingRiveCanvas}>
          <RiveComponent className="w-full h-full cursor-none" />
        </div>
      </div>
    </div>
  );
}
