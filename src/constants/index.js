import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    rocketair,
    roli,
    bibble
    } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Certificates",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "UI/UX",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Design Thinking",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Development",
      company_name: "Sheryians Coding School",
      icon: starbucks,
      iconBg: "#383E56",
      date: "April 2022 - August 2022",
      points: [
        "Frontend Development Certificate (Sheryians Coding School).",
        "Proficient in HTML, CSS, JavaScript, Bootstrap, and Git",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Experience with UI/UX design principles and tools",
      ],
    },
    {
      title: "Backend Development",
      company_name: "Sheryians Coding School",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "October 2022 - March 2023",
      points: [
        "Backend Development Certificate (Sheryians Coding School)",
        "Advanced Node.js programming and asynchronous JavaScript",
        "Database design and management with MongoDB ",
        "Strong understanding of data modeling and database management",
      ],
    },
    {
      title: "REACT JS & NEXT JS",
      company_name: "Sheryians Coding School",
      icon: shopify,
      iconBg: "#383E56",
      date: "June 2022 - September 2023",
      points: [
        "Frontend Development Certificate (Sheryians Coding School).",
        "Proficient in React.js and Next.js for frontend development.",
        "Building interactive and dynamic web applications with a focus on user experience.",
        "State management with Redux and context API, Routing, code splitting, and server-side rendering with Next.js.",
      ],
    },
    
  ];
   
  const projects = [
    {
      name: "Handyy",
      description:
        "Secured 3rd rank in a State Level Web Hackathon 'CODEBIT2K23' for creating a responsive UI design for an e-commerce webiste 'Handyy'. ",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "locomotive",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Threads",
      description:
        "Developed a highly scalable Next.js 13 app with server-side rendering, complex MongoDB schemas, and beautiful TailwindCSS layouts.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "nextjs",
          color: "pink-text-gradient",
        },
        {
          name: "vercel",
          color: "blue-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Muteza",
      description:
        "Designed the Muteza website, employing HTML, CSS and GSAP to craft a visually appealing frontend, highlighting skills in web design and interactive animations.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "gsap",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    }, 
    {
      name: "Bibble",
      description:
        "Developed a Next.js 13 web application with server-side rendering, comprehensive filtering, and pagination features. Successfully managed image uploads and utilized TypeScript for robust code quality.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "webscrapper",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: bibble,
      source_code_link: "https://github.com/",
    }, 
    {
      name: "Roli",
      description:
        "Crafted the frontend design for Roli, a shoe brand website, utilizing HTML, CSS, Locomotive, and GSAP to deliver an immersive and visually appealing user experience.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: roli,
      source_code_link: "https://github.com/",
    }, 
    {
      name: "RocketAir",
      description:
        "Designed and developed the RocketAir website using HTML, CSS, Locomotive, and GSAP, showcasing expertise in frontend design, animations, and user interface development from awards.com.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "scrolltriger",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: rocketair,
      source_code_link: "https://github.com/",
    }, 
  ];
  
  export { services, technologies, experiences, projects };