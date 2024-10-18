import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLeetcode,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const Info = {
  name: "Kanishk Aswal",
  stack: [
    "Web Developer",
    "Tech Enthusiast",
    " Passionate Coder",
    "Software Engineer",
    "Open Source Contributor",
  ],
  bio: " I'm a passionate and driven B.Tech graduate specializing in Information Technology, eager to launch my career in the tech industry. With a strong foundation in IT and a genuine enthusiasm for learning, I'm excited to contribute my skills, energy, and fresh perspective to a dynamic and forward-thinking team.",
};
export { Info };

const ProjectInfo = [
  {
    title: " E-Commerce Clothing App",
    desc: "Forever is a responsive e-commerce clothing fashion app built with HTML, Tailwind CSS, and React. It allows users to browse and filter fashion items by categories such as men, women, and children. The app features intuitive add-to-cart and remove-from-cart functionalities, giving users control over their shopping experience. With a clean, modern design and smooth navigation, Forever provides a seamless experience across devices, from mobile to desktop. Although the app currently doesn't include payment integration, it offers a dynamic, user-friendly shopping interface. Forever is optimized to meet the needs of fashion-forward users with ease and style. ",
    image: `${process.env.PUBLIC_URL}/Forever.png`,
    live: true,
    technologies: ["HTML", "TAILWIND CSS", "REACT"],
    link: "https://fashion-ecommerce-beta.vercel.app/",
    github: "https://github.com/Kanishk7042/Fashion-Ecommerce",
  },

  {
    title: "Starbucks Landing Page",
    desc: "This Starbucks landing page is a highly responsive web interface built using HTML, Tailwind CSS, and React. Designed to be even more adaptable than the official Starbucks site, the page seamlessly adjusts to various screen sizes, offering a smooth and visually appealing experience on mobile, tablet, and desktop. It features a clean, modern design that mirrors the iconic Starbucks branding while enhancing user interaction with swift navigation and optimized layouts. The page ensures fast load times and a sleek presentation of content, making it more responsive and engaging for all users. ",
    image: `${process.env.PUBLIC_URL}/Starbucks.png`,
    live: true,
    technologies: ["React", "TAILWIND CSS"],
    link: "https://starbucks-landing-page-gamma.vercel.app/",
    github: "https://github.com/Kanishk7042/Starbucks-LandingPage",
  },

  {
    title: "VirtualR Page",
    desc: "The VirtualR landing page is an engaging, responsive site designed with HTML,  CSS, and JavaScript to showcase VirtualR's innovative VR development tools for creators and developers. The page offers a sleek, modern design with intuitive navigation, allowing users to easily explore the powerful tools VirtualR provides for building immersive VR apps. With a focus on performance and accessibility, this landing page highlights VirtualR’s mission to empower developers to turn their creative visions into immersive reality. Optimized for all devices, it provides a seamless experience, encouraging users to dive into the world of VR development. ",
    image: `${process.env.PUBLIC_URL}/VR.png`,
    live: true,
    technologies: ["HTML", "TAILWIND CSS", "JS"],
    link: "https://virtual-r-landing-page-henna.vercel.app/",
    github: "https://github.com/Kanishk7042/VirtualR-Landing-Page",
  },

  {
    title: "Portfolio",
    desc: "I developed a responsive portfolio website using React, Tailwind CSS, and Firebase to showcase my skills, projects, and professional journey. The portfolio features an About section where I introduce myself and my background, a Projects section displaying my key work with links to live demos and GitHub repositories, a Skills section highlighting my technical expertise, and a Contact section with a Firebase-integrated form for easy communication. The site is fully optimized for all devices, utilizing Tailwind CSS for sleek, adaptable styling and Firebase for real-time backend functionality.",
    image: `${process.env.PUBLIC_URL}/portfolio.png`,
    live: false,
    technologies: ["HTML", "CSS", "REACT", "FIREBASE"],
    link: "https://github",
    github: "https://github",
  },

  {
    title: "Rock,Paper and Scissors Game",
    desc: "This Rock, Paper, Scissors game is a fun, interactive web application built using HTML, CSS, and JavaScript. Players can choose between rock, paper, or scissors, and the computer randomly selects its choice as well. The game logic determines the winner based on classic rules: rock beats scissors, scissors beats paper, and paper beats rock. The user’s choice, the computer’s choice, and the result are displayed dynamically, creating an engaging user experience. The simple yet effective design ensures that players of all ages can easily enjoy this timeless game right in their web browsers. ",
    image: `${process.env.PUBLIC_URL}/Game.png`,
    live: true,
    technologies: ["HTML", "CSS", "JS"],
    link: "https://simple-rock-paper-scissors-game-mocha.vercel.app/",
    github: "https://github.com/Kanishk7042/simple_rock_paper_scissors_game",
  },
];

export { ProjectInfo };

const SkillInfo = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
    ],
  },

  {
    title: "Backend",
    skills: [
      "Springboot",
      "MySQL",
      "MongoDB",
      "Firebase",
      "PostgresSQL",
      "Strapi",
    ],
  },

  {
    title: "Languages",
    skills: ["Java", "JavaScript", "TypeScript"],
  },

  {
    title: "Tools",
    skills: [
      "Git",
      "Github",
      "VS Code",
      "Eclipse",
      "Postman",
      "Spring Tool Suite",
    ],
  },
];
export { SkillInfo };

const Slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export { Slugs };

const socialLinks = [
  { link: "https://github.com/kanishk7042", icon: IconBrandGithub },
  {
    link: "https://www.linkedin.com/in/kanishk-aswal",
    icon: IconBrandLinkedin,
  },
  {
    link: "https://www.instagram.com/_kanishkaswal_",
    icon: IconBrandInstagram,
  },
  { link: "https://www.facebook.com/kanishk.aswal.9", icon: IconBrandFacebook },
  { link: "https://www.leetcode.com/u/Kanishk_Aswal", icon: IconBrandLeetcode },
];

export { socialLinks };
