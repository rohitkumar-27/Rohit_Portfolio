import JobPortal from "../assets/job-portal.png";
import Geminiai from "../assets/gemini-ai-clone.png";
import MernAuth from "../assets/Mern-Authentication.png";
import PersonalAiChatbot from "../assets/Personal_AI_Chatbot.png";
import Cards from "./Cards";
import { motion } from "framer-motion";

const Projects = () => {
  const projectJson = [
    {
      title: "Job-Portal",
      desc: "A ReactJS job portal using Firebase, APIs, and Tailwind CSS for job search, applications, and listings. It offers a seamless and responsive user experience.",
      image: JobPortal,
      live: "https://rohitkumar-27.github.io/Job-portal/",
      github: "https://github.com/rohitkumar-27/Job-portal",
    },
    {
      title: "Gemini Ai Clone",
      desc: "A Gemini AI-like project using HTML, CSS, JavaScript, and Node.js. It provides an interactive AI chatbot with a responsive design, ensuring smooth user experience and real-time responses",
      image: Geminiai,
      live: "#",
      github: "https://github.com/rohitkumar-27/Gemini-AI",
    },
    {
      title: "MERN Authentication",
      desc: "MERN Authentication with JWT: Secure user login, signup, and protected routes using JSON Web Token (JWT).",
      image: MernAuth,
      github: "https://github.com/rohitkumar-27/Mern_Authentication",
    },
    {
      title: "Personal AI Chatbot",
      desc: "AI Chatbot: React & Gemini API | Responsive & Smart Conversations also Stores & Answers Company-Specific Queries",
      image: PersonalAiChatbot,
      live: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="relative bg-black py-12 px-6">
      {/* Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-transparent to-purple-500/30 blur-3xl"></div>

      <div className="mb-16 max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-8 text-white border-b-4 border-red-500 w-max pb-2">
          My Projects
        </h2>

        {/* Project Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
        >
          {projectJson.map((items, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Cards item={items} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

