// "use client";
// import { useAnimation, useInView, motion } from "framer-motion";
// import { useTheme } from "next-themes";
// import { useRef } from "react";
// import GitHubCalendar from "react-github-calendar";

// const GithubGraph = () => {
//   const { resolvedTheme } = useTheme();

//   const ref = useRef<HTMLDivElement | null>(null);
//   const inView = useInView(ref);
//   const ctrls = useAnimation();
//   // if (inView[1]) {
//   //     ctrls.start("visible");
//   // }
//   const AnimationGithub = {
//     hidden: {
//       opacity: 0,
//       y: `1em`,
//     },
//     visible: {
//       opacity: 1,
//       y: `0em`,
//       transition: {
//         duration: 1.8,
//         delay: 1,
//         ease: [0.2, 0.65, 0.3, 0.9],
//       },
//     },
//   };

//   return (
//     <motion.div
//       ref={ref}
//       aria-hidden="true"
//       initial="hidden"
//       animate={ctrls}
//       variants={AnimationGithub}
//       className="flex items-center justify-center rounded-xl bg-zinc-200 p-4 dark:bg-zinc-800"
//     >
//       <GitHubCalendar
//         username="rafiakbar13"
//         labels={{
//           totalCount: "{{count}} contributions in the last half year",
//         }}
//         colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
//         showWeekdayLabels
//         weekStart={1}
//       />
//     </motion.div>
//   );
// };

// export default GithubGraph;
