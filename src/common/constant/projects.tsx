import Image from "next/image";
import { Project } from "../types/project";
export const projectsData: Project[] = [
  {
    id: 1,
    name: "Brainwave",
    description:
      "'Brainwave AI SaaS' is a Software as a Service (SaaS) based platform that enables users to easily generate text into various forms of media, including video, music, images, code, and conversation. ",
    tools: [
      "Nextjs",
      "Stripe-Checkout",
      "TailwindCSS",
      "Prisma",
      "Zod",
      "OpenAI",
      "Zustand",
      "TypeScript",
    ],
    role: "Full Stack Developer",
    code: "https://github.com/rafiakbar13/Brainwave-ai-saas",
    demo: "https://brainwave-alpha.vercel.app/",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://res.cloudinary.com/druic0cle/image/upload/v1695971174/Brainwave_d8p8br.jpg"
          width={300}
          height={300}
          className="h-full w-full object-contain"
          alt="Brainwave AI SaaS"
        />
      </div>
    ),
  },
  {
    id: 2,
    name: "TopupKu",
    description:
      "TopupKu is an online platform designed to facilitate users in recharging or topping up their balance or specific services, such as telephone credit, data packages, prepaid electricity, game vouchers, and other services.",
    tools: ["Reactjs", "Tailwind CSS", "Redux Toolkit", "React Hook Form"],
    role: "Full Stack Developer",
    code: "https://github.com/rafiakbar13/TopupKu",
    demo: "https://sims-ppob-muhammad-rafi-akbar.vercel.app/",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://res.cloudinary.com/druic0cle/image/upload/v1695971175/SIMS-PPOB_t25feh.jpg"
          width={300}
          height={300}
          className="h-full w-full object-contain"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    id: 3,
    name: "Comfy Store",
    description:
      "Comfy Store is an e-commerce platform specializing in Home furniture, catering to the envolving trends and demans in the furniture industry",
    tools: [
      "ReactJs",
      "Tailwind CSS",
      "daisyUI",
      "Redux Toolkit",
      "React Query",
    ],
    code: "https://github.com/rafiakbar13/Comfy-store",
    role: "Full Stack Developer",
    demo: "https://comfy-store-eight.vercel.app/",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://res.cloudinary.com/druic0cle/image/upload/v1710682686/i5gzou97j0ffsic7rdc1.png"
          width={300}
          height={300}
          className="h-full w-full object-contain"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    id: 4,
    name: "Programmer Hub",
    description:
      "Programmer Hub is a platform for programmers to share their knowledge, ask questions, and connect with other programmers from around the world.",
    tools: ["NextJS", "Clerk", "Prisma", "Zustand", "Livekit", "TypeScript"],
    role: "Full Stack Developer",
    code: "https://github.com/rafiakbar13/ProgrammerHub",
    demo: "https://programmer-hub.vercel.app/",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://res.cloudinary.com/druic0cle/image/upload/v1710682973/eys5lirmwmfgigvidawd.png"
          width={300}
          height={300}
          className="h-full w-full object-contain"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    id: 5,
    name: "Cinema",
    description:
      "Cinema is a platform for movie lovers to find information about movies, such as the latest movies and popular movies",
    tools: ["NextJS", "Clerk", "Prisma", "Zustand", "Livekit", "TypeScript"],
    role: "Full Stack Developer",
    code: "https://github.com/rafiakbar13/seryu-cargo",
    demo: "https://seryu-cargo.vercel.app/",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://res.cloudinary.com/druic0cle/image/upload/v1710683329/lgepbdg6pa8ap2zszjxl.png"
          width={300}
          height={300}
          className="h-full w-full object-contain"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    id: 6,
    name: "Personal Website V-1",
    description:
      "This is my personal website, I built this website to showcase my skills and experience as a Frontend developer. I also use this website to share my thoughts and experiences as a Frontend developer.",
    tools: [
      "NextJS",
      "GraphQL",
      "TailwindCSS",
      "Zustand",
      "Framer Motion",
      "TypeScript",
    ],
    role: "Full Stack Developer",
    code: "https://github.com/rafiakbar13/v1.personal-website-rafi",
    demo: "https://v1-personal-website-rafi.vercel.app/",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://res.cloudinary.com/druic0cle/image/upload/v1710683569/ue3uochfnjoalkhs1oyi.png"
          width={300}
          height={300}
          className="h-full w-full object-contain"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    id: 6,
    name: "Fitness App",
    description: "Fitness App is a platform for book a trainer",
    tools: [
      "NextJS",
      "TailwindCSS",
      "Framer Motion",
      "TypeScript",
      "React Query",
    ],
    role: "Full Stack Developer",
    code: "https://github.com/rafiakbar13/trainers-booking",
    demo: "https://trainers-booking.vercel.app/",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://res.cloudinary.com/druic0cle/image/upload/v1712840981/yfcxbkeaqlbsneunbc5a.png"
          width={300}
          height={300}
          className="h-full w-full object-contain"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
