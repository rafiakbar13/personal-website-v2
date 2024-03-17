"use client";
import React, { useState, useEffect } from "react";
import { MENU } from "@/src/common/constant/menu";
import Link from "next/link";
import { ThemeSwitcher } from "../ThemeSwitcher";
import useIsMobile from "@/src/hooks/useIsMobile";
// import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";
import { motion, Variants } from "framer-motion";
import { Menu } from "../../types/menu";
import MobileMenu from "./MobileMenu";

const container: Variants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemMenu: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Navbar = () => {
  const pathName = usePathname();

  const isMobile = useIsMobile();

  return (
    <>
      <nav className="bg-transparent">
        <div className="flex items-center justify-between py-5">
          <div className="flex flex-shrink-0 items-center">
            <Link href="/" className=" text-[#16f2b3] text-3xl font-bold">
              &lt; Rafi /&gt;
            </Link>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="mt-4 md:flex h-screen max-h-0 w-full flex-col items-start text-base opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100 gap-x-6 hidden"
          >
            {MENU.map((item, index) => (
              <motion.div variants={itemMenu} key={index}>
                <Link
                  href={item.path}
                  key={item.id}
                  className={`block no-underline outline-none hover:no-underline transition duration-300 hover:text-pink-600 ${
                    pathName === item.path ? "text-pink-600 border-b-[1px]" : ""
                  }`}
                  // onClick={() => handleScroll(item.url)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <div className="pl-5 border-l-2 gap-x-5">
              <ThemeSwitcher />
            </div>
          </motion.div>
        </div>
      </nav>
      {isMobile && <MobileMenu />}
    </>
  );
};

export default Navbar;
