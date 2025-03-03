import { Github, Linkedin, MapPinHouse, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div id="contact" className="relative min-h-screen flex items-center justify-center bg-black">
      {/* Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-transparent to-purple-500/30 blur-3xl"></div>

      {/* Glass Effect Container */}
      <div className="relative z-10 w-full max-w-6xl bg-gray-900/60 backdrop-blur-lg border border-gray-800 rounded-lg shadow-xl p-10 text-white">
        <h1 className="text-5xl font-bold text-center uppercase tracking-wider">
          Get In Touch
        </h1>
        <p className="text-center text-blue-400 italic">Let's Work Together</p>

        {/* Contact Info Section in One Line */}
        <div className="flex flex-wrap justify-around items-center p-10 gap-8 mt-10 text-center">
          {/* Phone */}
          <div className="flex flex-col items-center">
            <Phone className="w-10 h-10 text-blue-400" />
            <h2 className="text-xl font-semibold">Phone</h2>
            <p className="text-gray-300">+91-9571490953</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center">
            <Mail className="w-10 h-10 text-blue-400" />
            <h2 className="text-xl font-semibold">Email</h2>
            <p className="text-gray-300">Rohitkmr528@gmail.com</p>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center">
            <MapPinHouse className="w-10 h-10 text-blue-400" />
            <h2 className="text-xl font-semibold">Address</h2>
            <p className="text-gray-300">Noida, Uttar Pradesh</p>
          </div>

          {/* Social Media Icons */}
          <a
            href="https://github.com/rohitkumar-27"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-2 hover:text-blue-400 transition"
          >
            <Github className="w-10 h-10 text-blue-400" />
            <h2 className="text-xl font-semibold">GitHub</h2>
          </a>

          <a
            href="www.linkedin.com/in/rohit-kumar-056263129"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-2 hover:text-blue-400 transition"
          >
            <Linkedin className="w-10 h-10 text-blue-400" />
            <h2 className="text-xl font-semibold">LinkedIn</h2>
          </a>
        </div>

        {/* Footer Name Design */}
        <div className="mt-10 text-center border-t border-gray-700 pt-6">
          <h2 className="text-2xl font-bold tracking-wide text-gray-400 hover:text-white transition-colors duration-300">
            ROHIT{" "}
            <span className="text-red-500 hover:text-yellow-400">KUMAR</span>
          </h2>
          
        </div>
      </div>
    </div>
  );
}
