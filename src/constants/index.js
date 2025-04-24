import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    threejs,
    git,
    figma,
    python,
    django,
    mysql,
    bootstrap,
    visom,
    rjinfotech,
    obdurate,
    istudio,
    gamershub,
    frs,
    atm,
    zclone,
    outlier,

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
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
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Front-End Developer",
      icon: backend,
    },
    {
      title: "Python Developer",
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Django Framework",
      icon: django,
    },
    {
      name: "mysql",
      icon: mysql,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
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
  ];
  
  const experiences = [
    {
      title: "Python Developer Intern",
      company_name: "Obdurate Technologies",
      icon: obdurate,
      iconBg: "#E6DEDD",
      date: "Mar 2022 - May 2022",
      points: [
        "Developed basic Python programs to automate tasks and streamline processes, enhancing efficiency across small projects.",
        "Conducted an Exploratory Data Analysis on the Iris flower dataset, identifying key patterns and insights to improve classification accuracy",
      ],
    },

    {
      title: "Jr. Frontend Developer",
      company_name: "RJ Infotech",
      icon: rjinfotech,
      iconBg: "#E6DEDD",
      date: "May 2023 - Nov 2023",
      points: [
        "Developed a Digital Store, allowing a local shop to expand its online presence and reach a broader customer base.",
        "Implemented user-friendly design features, improving the shopping experience and boosting customer engagement.",
        "Collaborated with the team to ensure seamless integration of the store’s functionalities and smooth user navigation.",
      ],
    },

    {
      title: "Web Developer Intern",
      company_name: "Internship Studio",
      icon: istudio,
      iconBg: "#E6DEDD",
      date: "Oct 2023 - Nov 2023",
      points: [
        "Designed and developed a comprehensive clothing e-commerce website providing a seamless and engaging shopping experience.",
        " Implemented responsive design techniques to ensure the website was fully optimized for both desktop and mobile users.",
      ],
    },

    {
      title: "MERN Developer Intern",
      company_name: "Visom6 Technologies Pvt Ltd",
      icon: visom,
      iconBg: "#E6DEDD",
      date: "Jul 2024 - Oct 2024",
      points: [
        "Led and collaborated on various React projects, concentrating on the development of highly intuitive, responsive user interfaces to improve the overall user experience and functionality.",
        "Redesigned an existing project, enhancing its UI/UX and overall functionality.",
        "Managed and coordinated project teams, ensuring clear communication, efficient workflows, and timely delivery of all project milestones and key features.",
      ],
    },

    {
      title: "Freelance AI Model Trainer",
      company_name: "Outlier",
      icon: outlier,
      iconBg: "#E6DEDD",
      date: "Nov 2024 - Present",
      points: [
        "Engineered complex prompts to systematically challenge and assess LLM capabilities, identifying vulnerabilities and areas for improvement.",
        "Conducted analysis of model responses, diagnosing inaccuracies, and implementing precise corrections to enhance performance.",
        "Reviewed and evaluated LLM training tasks submitted by peers, ensuring adherence to quality standards and providing structured feedback with performance ratings.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Gamer's Hub - Online Gaming Store",
      description:
        "A gaming-focused e-commerce platform with user authentication, advanced product listings, search and filtering, secure Razorpay checkout, automated email notifications, and a responsive design for seamless user experience across devices.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "Django",
          color: "pink-text-gradient",
        },
      ],
      image: gamershub,
      source_code_link: "https://github.com/Sam282001/Gamer-Hub",
    },
    {
      name: "Food Recommendation System",
      description:
        "A user-friendly Food Recommendation System for diabetics that calculates BMI and BMR based on physical traits, offering personalized diet plans. It helps manage diabetes by providing tailored meal recommendations for better health.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Django",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: frs,
      source_code_link: "https://github.com/Sam282001/Food-Recommendation-System",
    },
    {
      name: "Awwwards Site - Zentry Clone",
      description:
        "A reimagined clone of the Zentry platform, designed to captivate users with a blend of dynamic animations, creative transitions, and immersive video storytelling. It serves as a modern showcase of interactive web design and cutting-edge features.",
      tags: [
        {
          name: "React",
          color: "pink-text-gradient",
        },
        {
          name: "GSAP",
          color: "green-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "blue-text-gradient",
        },
      ],
      image: zclone,
      source_code_link: "https://github.com/Sam282001/awwwards-site-clone",
    },
    {
      name: "Console Based ATM Simulator",
      description:
        "A simple terminal-based ATM simulator  that replicates the basic functionalities of a real ATM. It allows users to learn and practice ATM services in a convenient and educational way. The simulator covers key features like balance inquiries, deposits, and withdrawals.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
      ],
      image: atm,
      source_code_link: "https://github.com/Sam282001/ATM-Simulator",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };