import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import MernStack from "../assets/mernstack.png";
import Html from "../assets/Html.png";
import Css from "../assets/CSS.png";
import Javascript from "../assets/JS.png";
import ReactLogo from "../assets/React.png";
import ReduxLogo from "../assets/Redux.png";
import Tailwind from "../assets/Tailwind Css.png";
import Bootstrap from "../assets/Bootstrap.png";
import NodeLogo from "../assets/NodeLogo.png";
import Mongodb from "../assets/mongodb.svg";
import Express from "../assets/Express.png";
import NextJs from "../assets/NextJs.png";

const skills = [
  { name: "HTML", img: Html },
  { name: "CSS", img: Css },
  { name: "JavaScript", img: Javascript },
  { name: "React", img: ReactLogo },
  { name: "Redux", img: ReduxLogo },
  { name: "Tailwind CSS", img: Tailwind },
  { name: "Bootstrap", img: Bootstrap },
  { name: "Node.js", img: NodeLogo },
  { name: "MongoDB", img: Mongodb },
  { name: "Express.js", img: Express },
  { name: "Next.js", img: NextJs },
];

const About = () => {
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="relative bg-black py-12 px-6">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-transparent to-purple-500/30 blur-3xl"></div>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-base text-red-500 font-semibold tracking-wide uppercase">
            About Me
          </h2>
          <p className="mt-2 text-4xl font-extrabold text-white sm:text-5xl">
            Hi, I'm Rohit Kumar
          </p>
          <p className="mt-4 max-w-2xl text-lg text-gray-300 mx-auto">
            Full-Stack Developer building dynamic web apps with expertise in
            database management.
          </p>
        </motion.div>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-xl shadow-gray-700"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-white">My Journey</h3>
            <p className="mt-4 text-gray-400">
              I started my web development journey with a passion for creating
              user-friendly applications. With expertise in the MERN stack
              (MongoDB, Express.js, React, and Node.js), I have built projects
              like a Portfolio website, an E-Commerce app, and a Gemini AI
              project. My skills include developing RESTful APIs, secure
              authentication, and responsive designs. I love solving problems
              and continuously learning to build scalable and efficient digital
              solutions.
            </p>
            <img
              src={MernStack}
              alt="MERN Stack"
              className="p-2 rounded-lg w-52 mt-4"
            />
          </motion.div>
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-xl shadow-gray-700 flex flex-col items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-red-500">
              Skills & Expertise
            </h3>
            <div className="mt-6 h-36 w-full flex items-center justify-center overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={skills[currentSkill].name}
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: "0%", opacity: 1 }}
                  exit={{ x: "-100%", opacity: 0 }}
                  transition={{ duration: 1.2, ease: "linear" }}
                  className="flex items-center gap-3 bg-gray-700 px-8 py-4 rounded-lg shadow-lg shadow-red-500"
                >
                  <img
                    src={skills[currentSkill].img}
                    alt={skills[currentSkill].name}
                    className="w-14 h-14"
                  />
                  <span className="text-white font-semibold text-xl">
                    {skills[currentSkill].name}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="mt-12 bg-gray-800 p-6 rounded-lg shadow-xl shadow-gray-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-white">More About Me</h3>
          <p className="mt-4 text-gray-400">
            Apart from coding, I love learning new technologies and staying
            updated with the latest trends in web development. I enjoy exploring
            new frameworks, enhancing my problem-solving skills, and working on
            personal projects. I have also participated in workshops on ethical
            hacking, cybersecurity, and networking, which have broadened my
            technical expertise. My goal is to continuously grow as a developer
            and build innovative, efficient, and user-friendly applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
