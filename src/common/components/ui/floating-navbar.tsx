"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/src/lib/utils";
import { Menu } from "../../types/menu";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: Menu[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto rounded-full  z-[5000] px-4 py-2  items-center justify-center space-x-4 bg-gradient-to-r to-pink-500 from-violet-600 transition-all duration-300 hover:from-pink-500 hover:to-violet-600",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => {
          return (
            <Link
              key={`link=${idx}`}
              href={navItem.path}
              className={cn(
                "relative items-center flex space-x-1 text-white  hover:text-[#16f2b3]"
              )}
            >
              <span className="text-sm">{navItem.name}</span>
            </Link>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
};
