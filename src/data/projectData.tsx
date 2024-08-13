import { ProjectProps } from "@/interfaces";
import portfolioWeb from "./images/portfolio-1.png";
import bookstoreWeb from "./images/bookstore-1.png";
import bookstoreBoard from "./images/bookstore-2.png";
import bookstoreCard from "./images/bookstore-3.png";
import eazyclinicWeb from "./images/eazyclinic-1.png";
import eazyclinicMobile from "./images/eazyclinic-2.png";

export const projectData: ProjectProps[] = [
  {
    title: "EazyClinic.io",
    description:
      "A clinic management system that simplifies administrative tasks and improves operational efficiency.",
    time: "2024",
    skills: [{ name: "HTML" }, { name: "JavaScript" }, { name: "CSS" }],
    link: "https://eazyclinic.io/index.html",
    images: [eazyclinicWeb, eazyclinicMobile],
  },
  {
    title: "Personal Website",
    description:
      "I built my personal website to highlight my portfolio and accomplishments.",
    time: "2024",
    skills: [{ name: "Next.js" }],
    link: "https://www.zuhashahsyed.com",
    images: [portfolioWeb],
  },
  {
    title: "Bookstore",
    description:
      "A full-stack bookstore application built with the MERN stack to showcase my web development skills for portfolio purposes.",
    time: "2024",
    skills: [{ name: "MongoDB" }, { name: "Express.js" }, { name: "React" },  { name: "Node.js" }],
    link: "https://github.com/zvhashah/BookStore-MERN-Stack",
    images: [bookstoreWeb, bookstoreBoard, bookstoreCard],
  },
];
