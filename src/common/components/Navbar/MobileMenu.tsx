import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { MENU } from "@/src/common/constant/menu";
type Props = {};

const MobileMenu = (props: Props) => {
  return (
    <div className="relative w-full">
      <FloatingNav navItems={MENU} />
    </div>
  );
};

export default MobileMenu;
