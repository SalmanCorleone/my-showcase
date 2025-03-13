"use client";
import { useRive } from "@rive-app/react-canvas-lite";
import { AnimationScope, motion, useAnimate } from "framer-motion";
import textVariants from "./animationVariants";
import { cubicBezier, stagger } from "motion";
import { useEffect } from "react";

export default function RiveLaptopGuy() {
  const { RiveComponent, rive } = useRive({
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
    <div className="md:flex">
      {/* Left section */}
      <div className="flex justify-center items-center flex-1 border border-white border-solid py-6">
        <div>
          <div className="overflow-hidden h-10" ref={textRef1} onMouseEnter={() => onMouseInteraction(textRef1, "enter")} onMouseLeave={() => onMouseInteraction(textRef1, "exit")}>
            <div className="flex top-div">{getChar("Animation")}</div>
            <div className="flex bottom-div">{getChar("Animation")}</div>
          </div>
          <div>but with</div>
          <div className="overflow-hidden h-10" ref={textRef2} onMouseEnter={() => onMouseInteraction(textRef2, "enter")} onMouseLeave={() => onMouseInteraction(textRef2, "exit")}>
            <div className="flex top-div">{getChar("Interaction")}</div>
            <div className="flex bottom-div">{getChar("Interaction")}</div>
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="flex-1 flex justify-end">
        <div className="w-[80vh] h-[80vh]" onMouseLeave={onMouseLeavingRiveCanvas}>
          <RiveComponent className="w-full h-full cursor-none" />
        </div>
      </div>
    </div>
  );
}
