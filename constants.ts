//  import Khalida from "./src/assets/images/projects/g"
//  import Vardhman from "./src/assets/images/projects/"
//  import Reverse from "./src/assets/images/projects/reversethought.png"
//  import Resume from "./src/assets/images/projects/Resume-Builder.png"
//  import Job from "./src/assets/images/projects/Job-Portal.png"
//  import Malik from "./src/assets/images/projects/malik.png"
//  import Aym from "./src/assets/images/projects/aymsyntex.png"
//  import Nera from "./src/assets/images/projects/nerasoft.png"
//  import Nifi from "./src/assets/images/projects/nifi.png"
//  import Packmato from "./src/assets/images/projects/packmato.png"

export const METADATA = {
  title: "Portfolio | Shadab Choudhary",
  description:
    "I bridge the gap between design and development. I take responsibility to craft an aesthetic user experience using modern frontend architecture.",
  siteUrl: "https://arrowedge.netlify.app/",
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
    image: "/malik.png",
    
    description: "Design From Scratch in Html, css, js, bootstrap, Animation, scrolling , Creative Layout",
    url: "https://www.malikarchitecture.com/",
    
  },
  {
    name: "Khalida Toukkani",
    image: "/khalida.png",
    
    description: "Design From Scratch in Html, css, js, bootstrap, Animation Working PhP query form  ",
    url: "https://khalidatoukkani.com/",
    
  },
  {
    name: "Vardhman Textile",
    image: "/vardhman.png",
    
    description: "Design From Scratch in Html, css, js, bootstrap, Animation, Api Integration , Jquery Ui",
    url: "https://www.vardhman.com/",
    
  },
  {
    name: "Reverse Thought Creative Studio",
    image: "/reversethought.png",
    
    description: "Design From Scratch in react.js, Sass, Gsap, animation , Scrolling TypeScript Validate",
    url: "https://www.reversethought.com/",
    
  },
  {
    name: "Nifi Payment",
    image: "/nifi.png",
    
    description: "Design From Scratch in Next.js, Scss, Animation and Lottie Animation , framer Motion ",
    url: "https://nifipayments.com/",
    
  },
  {
    name: "Nera Soft",
    image:"/nerasoft.png",
    
    description: "Design From Scratch in Next.js, Scss, Animation and Lottie Animation , framer Motion ",
    url: "https://nerasoft.in/",
    
  },
  {
    name: "Aym Syntex ",
    image:"/aymsyntex.png",
    
    description: "Design from Scratch in html, css, js, Gsap, Lottie Animation and Scrolling Api Intration ",
    url: "https://www.aymsyntex.com/",
    
  },
  {
    name: "Packmato",
    image: "/packmato.png",
    
    description: "Design From Scratch in Html, css, js, bootstrap, Animation, scrolling, Gsap ",
    url: "https://utl-shadab.github.io/packmato/",
    
  },
  {
    name: "Resume Builder",
    image:"/Resume-Builder.png",
    description: "Design From Scratch in react.js, bootstrap , css, animate Typescript Api integration",
    url: "http://localhost:3000/",
  },
  {
    name: "Job Portal",
    image:"/Job-Portal.png",
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
    slideImage: "https://res.cloudinary.com/dynz767iy/image/upload/v1740446607/arrowedge/timeline/techi_jeoo1x.png",
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
    slideImage: "https://res.cloudinary.com/dynz767iy/image/upload/v1740446602/arrowedge/timeline/nerasoft_paez6z.png",
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
    slideImage: "https://res.cloudinary.com/dynz767iy/image/upload/v1740446604/arrowedge/timeline/teamutl_zrig2c.avif",
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
    slideImage: "https://res.cloudinary.com/dynz767iy/image/upload/v1740470663/arrowedge/projects/reversethought_wcnpc5.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Frontend Developer",
    size: ItemSize.SMALL,
    subtitle: "Implemented frontend solutions for the user management system, enabling smooth product launches 🚀",
    image: "/timeline/logo-cotgin.png",
    slideImage: "https://res.cloudinary.com/dynz767iy/image/upload/v1740446909/arrowedge/projects/cotgin_rkrwx7.png",
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
    slideImage: "https://res.cloudinary.com/dynz767iy/image/upload/v1740446604/arrowedge/timeline/persistent_evjau0.png",
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
    slideImage: "https://res.cloudinary.com/dynz767iy/image/upload/v1740446609/arrowedge/timeline/bhart_qfjqdv.png",
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
