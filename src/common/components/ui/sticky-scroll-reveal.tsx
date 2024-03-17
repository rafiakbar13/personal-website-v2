"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/src/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    name: string;
    description: string;
    tools: string[];
    role: string;
    code: string;
    demo: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref,
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    // "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];
  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
      ref={ref}
    >
      <div className=" relative flex items-start px-4">
        <div className="max-w-2xl ">
          {/* <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div> */}
          {content.map((item, index) => (
            <div
              key={item.name + index}
              className="my-8 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full"
            >
              <div className="flex flex-row">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
                <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
              </div>

              <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
                <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
                  <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
                  <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
                  <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
                </div>
                <motion.h3
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.5,
                  }}
                  className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl"
                >
                  {item.name}
                </motion.h3>
              </div>

              {/* Code */}
              <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
                <motion.code
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.5,
                  }}
                  className="font-mono text-xs md:text-sm lg:text-base"
                >
                  <div className="blink">
                    <span className="mr-2 text-pink-500">const</span>
                    <span className="mr-2 text-white">project</span>
                    <span className="mr-2 text-pink-500">=</span>
                    <span className="text-gray-400">{"{"}</span>
                  </div>
                  <div>
                    <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                    <span className="text-gray-400">{`'`}</span>
                    <span className="text-amber-300">{item.name}</span>
                    <span className="text-gray-400">{`',`}</span>
                  </div>

                  <div className="ml-4 lg:ml-8 mr-2">
                    <span className=" text-white">tools:</span>
                    <span className="text-gray-400">{` ['`}</span>
                    {item.tools.map((tag, i) => (
                      <React.Fragment key={i}>
                        <span className="text-amber-300">{tag}</span>
                        {item.tools.length - 1 !== i && (
                          <span className="text-gray-400">{`', '`}</span>
                        )}
                      </React.Fragment>
                    ))}
                    <span className="text-gray-400">{"],"}</span>
                  </div>
                  <div>
                    <span className="ml-4 lg:ml-8 mr-2 text-white">
                      myRole:
                    </span>
                    <span className="text-orange-400">{item.role}</span>
                    <span className="text-gray-400">,</span>
                  </div>
                  <div className="ml-4 lg:ml-8 mr-2">
                    <span className="text-white">Description:</span>
                    <span className="text-cyan-400">
                      {" " + item.description}
                    </span>
                    <span className="text-gray-400">,</span>
                  </div>
                  <div className="ml-4 lg:ml-8 mr-2">
                    <span className="text-white">Github:</span>
                    <span className="text-cyan-400">{" " + item.code}</span>
                    <span className="text-gray-400">,</span>
                  </div>
                  <div className="ml-4 lg:ml-8 mr-2">
                    <span className="text-white">Demo:</span>
                    <span className="text-cyan-400">{" " + item.demo}</span>
                    <span className="text-gray-400">,</span>
                  </div>
                  <div>
                    <span className="text-gray-400">{`};`}</span>
                  </div>
                </motion.code>
              </div>
            </div>
          ))}
          {/* <div className="h-40" /> */}
        </div>
      </div>
      <motion.div
        animate={{
          background: linearGradients[activeCard % linearGradients.length],
        }}
        className={cn(
          "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  );
};
