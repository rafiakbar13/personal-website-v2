import { StickyScroll } from "@/src/common/components/ui/sticky-scroll-reveal";
import React from "react";
import { projectsData } from "@/src/common/constant/projects";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div id="projects" className="  my-12 lg:my-24 p-10">
      <div className="w-[80px] h-[80px] bg-violet-100 rounded-full  -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
      <div className="flex items-center justify-start relative">
        <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
          PROJECTS
        </span>
        <span className="w-full h-[2px] bg-[#1a1443]"></span>
      </div>

      <StickyScroll content={projectsData} />
    </div>
  );
};

export default Projects;
