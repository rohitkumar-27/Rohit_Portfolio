import hero from "../assets/Hero.png";
import reactLogo from "../assets/React.png";
import reduxLogo from "../assets/Redux.png";
import tailwind from "../assets/Tailwind Css.png";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-transparent to-purple-500/30 blur-3xl"></div>

      {/* Glass Effect */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-lg"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center lg:h-[90vh] justify-between p-6">
        {/* Left Section */}
        <div className="md:w-1/2 flex flex-col space-y-4">
          <h1 className="lg:text-7xl text-4xl font-bold lg:leading-snug text-white">
            Hi There, <br />
            I'm Rohit <span className="text-red-500">Kumar</span>
          </h1>
          <p className="md:text-2xl text-xl mb-4 text-gray-300">
            Web Developer & Designer
          </p>
          <p className="mb-4 text-gray-400">
            Motivated Full Stack Developer with experience in modern
            technologies like React, Node.js, and Tailwind CSS.
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 w-max rounded-md shadow-lg transition ">
            <a
              href="https://drive.google.com/file/d/1iTS04sM63Kh2I88xw5hd-LPCc82hIePR/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </button>
        </div>

        {/* Right Section - Hero Image & Floating Tech Logos */}
        <div className="md:w-1/2 relative flex justify-center items-center">
          {/* Image with Light Shadow Effect */}
          <img
            src={hero}
            alt="Hero"
            className="lg:h-[80vh] h-96 rounded-lg border-4 border-white/10 shadow-[0px_0px_20px_2px_#ff4d4d]"
          />

          {/* Floating Tech Logos */}
          <img
            src={reactLogo}
            alt="React"
            className="absolute w-12 top-16 left-0 animate-spin-slow"
          />
          <img
            src={reduxLogo}
            alt="Redux"
            className="absolute w-12 top-0 right-5 animate-bounce"
          />
          <img
            src={tailwind}
            alt="Tailwind"
            className="absolute w-12 rounded-full right-0 bottom-16 animate-pulse"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
