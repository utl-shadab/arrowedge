 

export const METADATA = {
  title: "Portfolio | Shadab Choudhary",
  description:
    "I bridge the gap between design and development. I take responsibility to craft an aesthetic user experience using modern frontend architecture.",
  siteUrl: "https://ayushsingh.net/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Our Works",
    ref: "works",
  },
  {
    name: "Tech We Use",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I design and develop things",
  "I develop modern frontend apps",
  "I design dynamic user experience",
  "I design and develop motion",
];

export const EMAIL = "ayush.singh.xda@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/alphaayush/",
  github: "https://github.com/ayush013",
  medium: "https://alphaayush.medium.com/",
  instagram: "https://www.instagram.com/alphaayush/",
  facebook: "https://www.facebook.com/ayush013",
  dribbble: "https://dribbble.com/alphaayush",
  behance: "https://www.behance.net/alphaayush/",
  twitter: "https://twitter.com/ayush013",
  topmate: "https://www.topmate.io/alphaayush/",
};

export interface IProject {
  name: string;
  image: string;
  
  description: string;
  url: string;
  
}

export const PROJECTS: IProject[] = [
  
  {
    name: "Malik Architechture",
    image: "/projects/malik.png",
    
    description: "Design From Scratch in Html, css, js, bootstrap, Animation, scrolling , Creative Layout",
    url: "https://www.malikarchitecture.com/",
    
  },
  {
    name: "Khalida Toukkani",
    image: "/projects/khalida.png",
    
    description: "Design From Scratch in Html, css, js, bootstrap, Animation Working PhP query form  ",
    url: "https://khalidatoukkani.com/",
    
  },
  {
    name: "Vardhman Textile",
    image: "/projects/vardhman.png",
    
    description: "Design From Scratch in Html, css, js, bootstrap, Animation, Api Integration , Jquery Ui",
    url: "https://www.vardhman.com/",
    
  },
  {
    name: "Reverse Thought Creative Studio",
    image: "/projects/reversethought.png",
    
    description: "Design From Scratch in react.js, Sass, Gsap, animation , Scrolling TypeScript Validate",
    url: "https://www.reversethought.com/",
    
  },
  {
    name: "Nifi Payment",
    image: "/projects/nifi.png",
    
    description: "Design From Scratch in Next.js, Scss, Animation and Lottie Animation , framer Motion ",
    url: "https://nifipayments.com/",
    
  },
  {
    name: "Nera Soft",
    image: "/projects/nerasoft.png",
    
    description: "Design From Scratch in Next.js, Scss, Animation and Lottie Animation , framer Motion ",
    url: "https://nerasoft.in/",
    
  },
  {
    name: "Aym Syntex ",
    image: "/projects/aymsyntex.png",
    
    description: "Design from Scratch in html, css, js, Gsap, Lottie Animation and Scrolling Api Intration ",
    url: "https://www.aymsyntex.com/",
    
  },
  {
    name: "Packmato",
    image: "/projects/packmato.png",
    
    description: "Design From Scratch in Html, css, js, bootstrap, Animation, scrolling, Gsap ",
    url: "https://utl-shadab.github.io/packmato/",
    
  },
  {
    name: "Resume Builder",
    image: "/projects/Resume-Builder.png",
    description: "Design From Scratch in react.js, bootstrap , css, animate Typescript Api integration",
    url: "http://localhost:3000/",
  },
  {
    name: "Job Portal",
    image: "/projects/Job-Portal.png",
    description: "Design From Scratch in react.js, bootstrap , css, animate Typescript Api integration",
    url: "http://localhost:3000/",
  },
  
];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "next",
    "gsap",
    "tailwind",
    "Material",
    "ReactBootstrap",
    "sass",
    "svg",
    "html",
    "css",
  ],
  other: ["git", "Vitejs",  "p5JS"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Frontend Developer (Current)",
    size: ItemSize.SMALL,
    subtitle:
      "Frontend Engineering @ Core team, solving problems",
    image: "/timeline/techiosoft.png",
    slideImage: "/timeline/techi.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Frontend UI Developer",
    size: ItemSize.SMALL,
    subtitle:
      "Frontend Ui Team Lead  ",
    image: "/timeline/nera.png",
    slideImage: "/timeline/nerasoft.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI Engineer freelance)",
    size: ItemSize.SMALL,
    subtitle:
      "Played a key role in building a UI framework for a job portal, focusing on reusable components and responsive design.",
    image: "/timeline/utl.png",
    slideImage: "/timeline/teamutl.avif",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Frontend cum Visual designer (Project Based)",
    size: ItemSize.SMALL,
    subtitle:
      "Designed and developed frontend solutions to enhance employee engagement, productivity, and performance 🎯",
    image: "/timeline/rt-logo.svg",
    slideImage: "/projects/reversethought.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Frontend Developer",
    size: ItemSize.SMALL,
    subtitle: "Implemented frontend solutions for the user management system, enabling smooth product launches 🚀",
    image: "/timeline/logo-cotgin.png",
    slideImage: "/timeline/cotgin.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2021",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Web Designer",
    size: ItemSize.SMALL,
    subtitle:
      "Designed and developed UI/UX for multiple websites, transforming frontend frameworks and building a scalable design system.",
    image: "/timeline/persis.png",
    slideImage: "/timeline/persistent.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Web Designer (Intern)",
    size: ItemSize.SMALL,
    subtitle:
      "First job! 🥳 Product design and development ",
    image: "/timeline/bt.png",
    slideImage: "/timeline/bhart.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
