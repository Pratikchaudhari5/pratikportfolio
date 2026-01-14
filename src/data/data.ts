import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const personalData = {
  name: "Pratik Chaudhari",
  initials: "PC",
  url: "https://www.pratikchaudhari.dev/",
  location: "Pune, Maharashtra, India",
  locationLink: "https://www.google.com/maps/place/pune",
  description:
    "Java Full-Stack Developer. I build high-performance web applications with Spring Boot, React, and clean, scalable architectures.",
  summary:
    "I started my **engineering journey** with one goal: learn how to build systems that actually **solve problems**. During my internships, I turned that goal into **impact—cutting fake registrations by 85%** with a smarter **authentication system**, and **improving load times by 40%** through better **frontend architecture.** Along the way, I solved **500+ DSA problems**, mastered **Java**, **Spring Boot**, and **React**, and earned my **MCA 2025**. I focus on **clarity**, **execution**, and building **products that scale.** My journey is simple: **learn fast**, **ship fast**, and create **real value** through engineering.",
  avatarUrl: "/pratikportprofile.jpeg",
} as const;

export const skillsData = [
  {
    category: "Backend",
    skills: [
      { name: "Java", icon: "logos:java" },
      { name: "Spring Boot", icon: "logos:spring-icon" },
      { name: "Spring Security", icon: "logos:spring" },
      { name: "JWT", icon: "material-symbols:token" },
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "REST APIs", icon: "lucide:cloud-cog" },
      { name: "MySQL", icon: "logos:mysql-icon" },
      { name: "SQL", icon: "ph:file-sql" },
      { name: "Microservices", icon: "carbon:microservices-1" },
    ],
  },
 {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: "logos:react" },
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "HTML5", icon: "logos:html-5" },
      { name: "CSS3", icon: "logos:css-3" },
      { name: "Bootstrap", icon: "logos:bootstrap" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      { name: "Single Page Applications", icon: "material-symbols:web" },
      { name: "Responsive Design", icon: "material-symbols:responsive-layout" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", icon: "logos:mysql-icon" },
      { name: "SQL", icon: "ph:file-sql" },
      { name: "MongoDB", icon: "logos:mongodb-icon" },
      // { name: "PostgreSQL", icon: "logos:postgresql" },
      // { name: "Redis", icon: "logos:redis" }
    ],
  },
  {
    category: "Practices",
    skills: [
      { name: "Database design", icon: "material-symbols:database" },
      { name: "Event‑driven architecture", icon: "lucide:share-2" },
      { name: "Agile", icon: "lucide:repeat" },
      { name: "Scrum", icon: "material-symbols:group" },
      {
        name: "OOP",
        icon: "material-symbols:code",
      },
      {
        name: "TDD",
        icon: "lucide:flask-conical",
      },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "VS Code", icon: "logos:visual-studio-code" },
      { name: "IntelliJ IDEA", icon: "logos:intellij-idea" },
      { name: "Eclipse", icon: "logos:eclipse-icon" },

      { name: "GitHub", icon: "logos:github-icon" },
      { name: "Git", icon: "logos:git-icon" },

      { name: "Netlify", icon: "logos:netlify" },
      { name: "Postman", icon: "logos:postman-icon" },

      // Java full-stack relevant tools
      // { name: "Maven", icon: "logos:maven" },
      // { name: "Gradle", icon: "logos:gradle" },
      // { name: "Docker", icon: "logos:docker-icon" },
      // { name: "Kubernetes", icon: "logos:kubernetes" },
      // { name: "Jenkins", icon: "logos:jenkins" },
      // { name: "Figma", icon: "logos:figma" },
    ],
  },
  // {
  //   category: "DevOps",
  //   skills: [
  //     { name: "AWS", icon: "logos:aws" },
  //     { name: "Docker", icon: "logos:docker-icon" },
  //     // { name: "Kubernetes", icon: "logos:kubernetes" },
  //     { name: "Jenkins", icon: "logos:jenkins" },
  //     { name: "GitHub Actions", icon: "logos:github-actions" },
  //     { name: "CI/CD", icon: "material-symbols:sync" },
  //     { name: "Infrastructure as Code", icon: "material-symbols:code" },
  //   ],
  // },
  // {
  //   category: "Practices",
  //   skills: [
  //     { name: "Database design", icon: "material-symbols:database" },
  //     { name: "Event‑driven architecture", icon: "lucide:share-2" },
  //     { name: "Agile", icon: "lucide:repeat" },
  //     { name: "Scrum", icon: "material-symbols:group" },
  //     {
  //       name: "OOP",
  //       icon: "material-symbols:code",
  //     },
  //   ],
  // },
  // {
  //   category: "Tools",
  //   skills: [
  //     { name: "Linux", icon: "logos:linux-tux" },
  //     { name: "Sentry", icon: "logos:sentry-icon" },
  //     { name: "New Relic", icon: "logos:new-relic-icon" },
  //     { name: "Grafana", icon: "logos:grafana" },
  //     {
  //       name: "Sumo Logic",
  //       icon: "material-symbols:analytics",
  //     },
  //   ],
  // },
] as const;

export const navbarData = [
  { href: "/", icon: HomeIcon, label: "Home" },
  {
    href: "https://drive.google.com/file/d/1PF9nto8uXBVKzatgEn1Y0njiYQDtYfJR/view?usp=sharing",
    icon: NotebookIcon,
    label: "Resume",
  },
] as const;

export const contactData = {
  email: "pratikchaudhari5321@gmail.com",
  tel: "+919359157054",
  social: {
    GitHub: {
      name: "GitHub",
      url: "https://github.com/Pratikchaudhari5",
      icon: Icons.github,
      navbar: true,
    },
    LinkedIn: {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/pratik-chaudhari-886b71237/",
      icon: Icons.linkedin,
      navbar: true,
    },
    Email: {
      name: "Email",
      url: "/#contact",
      icon: Icons.email,
      navbar: true,
    },
  },
} as const;

export const experiencesData = [
  {
    company: "ITJOBXS",
    href: "https://itjobxs.com",
    location: "Remote",
    title: "Software Engineer Intern",
    logoUrl: "/itjobxs.png",
    start: "Apr 2024",
    end: "Jul 2024",
    description: [
      "Architected secure user authentication and anti-bot protection systems using Google reCAPTCHA v3 with custom rate-limiting logic in Java and PHP, reducing fake registrations by 85% across a platform serving 50K+ monthly users.",
      "Integrated OAuth-based authentication flows and developed fully responsive user interfaces using React, Bootstrap, JavaScript, HTML5, and CSS3, ensuring seamless cross-device functionality in agile sprint deliveries.",
      "Collaborated on GitHub PRs with backend team to deploy scalable features, accelerating release cycles by 20%.",
    ],
  },
  {
    company: "Signify Technologies",
    href: "https://signifytech.com",
    location: "Amravati, India",
    title: "Front End Developer Intern",
    logoUrl: "/signify.png",
    start: "Aug 2023",
    end: "Oct 2023",
    description: [
      "Designed and deployed a scalable, responsive architecture competition platform using React JS and RESTful APIs, supporting over 5K concurrent users during peak event traffic with consistent performance.",
      "Optimized frontend performance by implementing lazy loading, component reusability, and efficient state management, reducing page load times by 40% and improving user satisfaction metrics by 15%.",
      "Collaborated closely with backend developers and designers using agile workflows to integrate APIs and resolve UI bugs.",
      "Enhanced UX through interactive features like login/signup pages, driving 25% faster user onboarding.",
    ],
  },
] as const;

export const educationData = [
  {
    school: "SavitriBai Phule Pune University",
    href: "https://www.unipune.ac.in/",
    degree: "Masters of Computer Applications ( MCA )",
    logoUrl: "/sppulogo.jpg",
    start: "Aug 2023",
    end: "Jun 2025",
    description: [
      "CGPA 7.79/10",
      "Major in Computer Science",
      "Coursework: Data Structures, DBMS, Software Engineering",
    ],
  },
] as const;

export const projectsData = [
  {
    title: "RideBee",
    href: "http://ridebee-angular-app.s3-website.ap-south-1.amazonaws.com/login",
    dates: "2024",
    active: true,
    description:
      "RideBee is a full-stack car rental platform built with Spring Boot and Angular, featuring secure JWT authentication, efficient data management with Spring Data JPA + MySQL, and a fast, responsive UI using Angular 17 and TailwindCSS for seamless car search, booking, and management.",
    detailedDescription: `RideBee is a full-stack car rental management platform that allows users to seamlessly search, book, and manage rental cars. It features a secure Spring Boot backend with JWT authentication, real-time availability checks, and a fast Angular 17 frontend for a smooth and responsive user experience.`,
    keyFeatures: [
      "Search, filter, and book cars in real time",
      "Secure authentication using Spring Security + JWT",
      "Admin dashboard for managing cars, users, and bookings",
      "Responsive UI built with Angular 17, TailwindCSS, and ng-zorro",
      "RESTful API communication between frontend and backend",
      "Efficient data handling with Spring Data JPA and MySQL",
    ],
    technologies: [
      { name: "Java 17", icon: "logos:java" },
      { name: "Spring Boot", icon: "logos:spring-icon" },
      { name: "Spring Security + JWT", icon: "logos:jwt-icon" },
      { name: "Spring Data JPA", icon: "logos:spring" },
      { name: "Angular 17", icon: "logos:angular-icon" },
      { name: "MySQL", icon: "logos:mysql-icon" },
    ],
    links: [
      {
    type: "website",
    href: "http://ridebee-angular-app.s3-website.ap-south-1.amazonaws.com/login",
    icon: "external", // or "link", depending on your icon system
  },
      {
        type: "Github",
        href: "https://github.com/Pratikchaudhari5/RideBee",
        icon: "github",
      },
    ],
    image: "/carrental.png",
    images: ["/carrental.png"],
    video: "",
  },
  {
    title: "HairAndBeauty",
    href: "https://github.com/Pratikchaudhari5/hairandbeauty",
    dates: "2024",
    active: true,
    description:
      "Full-stack salon booking system with secure Razorpay payments, admin login, service management, and MySQL data persistence using REST APIs. Features automated email confirmations and CSV-based customer data management.",
    detailedDescription: `A comprehensive salon management and booking platform that streamlines the entire booking process. The system includes payment integration, automated communications, and customer data management for marketing campaigns.`,
    keyFeatures: [
      "Secure payment integration with Razorpay",
      "Admin portal for service and booking management",
      "Automated email confirmations for customers and salon owners",
      "CSV-based customer data export for marketing campaigns",
      "Service catalog with pricing and availability",
      "Customer booking history and management",
    ],
    technologies: [
      { name: "React.js", icon: "logos:react" },
      { name: "Java", icon: "logos:java" },
      { name: "Spring Boot", icon: "logos:spring-icon" },
      { name: "MySQL", icon: "logos:mysql-icon" },
      { name: "Razorpay", icon: "lucide:credit-card" },
    ],
    links: [
      {
        type: "Github",
        href: "https://github.com/pratikchaudhari5/hairandbeauty",
        icon: "github",
      },
    ],
    image: "/hair.png",
    images: ["/hair.png"],
    video: "",
  },
  {
    title: "Homyz",
    href: "https://real-estate-full-stack-project.vercel.app/",
    dates: "2024",
    active: true,
    description:
      "Full-stack real estate platform with Google OAuth authentication, Leaflet maps integration, and advanced search filters. Features optimized MongoDB queries achieving 90% faster data retrieval and 70% quicker user registrations.",
    detailedDescription: `A modern real estate platform that connects buyers with properties and agents. The application features interactive maps, advanced search capabilities, and a favorites system for users to save and schedule property visits.`,
    keyFeatures: [
      "Google OAuth authentication for secure user access",
      "Interactive property maps using Leaflet integration",
      "Advanced search and filter functionality",
      "Save favorite properties and create watchlists",
      "Schedule property visits directly with agents",
      "Optimized database queries for fast performance",
      "RESTful API architecture",
    ],
    technologies: [
      { name: "React.js", icon: "logos:react" },
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "Express.js", icon: "logos:express" },
      { name: "MongoDB", icon: "logos:mongodb-icon" },
    ],
    links: [
      {
    type: "website",
    href: "https://real-estate-full-stack-project.vercel.app/",
    icon: "external", // or "link", depending on your icon system
  },
      {
        type: "Github",
        href: "https://github.com/Pratikchaudhari5/Real-Estate-FullStack-Project",
        icon: "github",
      },
    ],
    image: "/homyz.png",
    images: ["/homyz.png"],
    video: "",
  },
] as const;
