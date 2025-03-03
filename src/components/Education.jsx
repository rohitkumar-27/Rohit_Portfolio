export default function Education() {
  return (
    <section
      id="education"
      className="relative min-h-screen flex items-center justify-center bg-black"
    >
      {/* Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-transparent to-purple-500/30 blur-3xl"></div>

      {/* Glass Effect Container with Moving Shadow Animation */}
      <div className="relative z-10 w-full max-w-6xl bg-gray-900/60 backdrop-blur-lg border border-gray-800 rounded-lg shadow-xl p-10 text-white animate-shadow-move">
        <h2 className="text-center text-4xl font-bold uppercase tracking-wide mb-10">
          Education & Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Education */}
          <div className="col-span-1">
            <h3 className="text-3xl font-semibold border-b-4 border-blue-500 inline-block pb-2">
              Education & Experience
            </h3>
            <div className="mt-6 space-y-6">
              <div className="hover:bg-gray-800/50 p-4 rounded-lg transition-all duration-300">
                <h4 className="text-xl font-semibold text-blue-400">
                  Internship
                </h4>
                <p className="text-gray-400">Cetpa Infotech Pvt. Ltd.</p>
              </div>
              <div className="hover:bg-gray-800/50 p-4 rounded-lg transition-all duration-300">
                <h4 className="text-xl font-semibold text-blue-400">
                  B.Tech (Computer Science & Engineering)
                </h4>
                <p className="text-gray-400">
                  Sobhasaria Engineering College, Sikar
                </p>
              </div>
              <div className="hover:bg-gray-800/50 p-4 rounded-lg transition-all duration-300">
                <h4 className="text-xl font-semibold text-blue-400">
                  Senior Secondary | 12th
                </h4>
                <p className="text-gray-400">
                  Navjeevan Senior Secondary School, Sikar
                </p>
              </div>
              <div className="hover:bg-gray-800/50 p-4 rounded-lg transition-all duration-300">
                <h4 className="text-xl font-semibold text-blue-400">
                  High School | 10th
                </h4>
                <p className="text-gray-400">
                  St Paul's Secondary School, Sikar
                </p>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="col-span-1 flex justify-center">
            <div className="h-full w-[2px] bg-gray-300/20"></div>
          </div>

          {/* Certifications */}
          <div className="col-span-1">
            <h3 className="text-3xl font-semibold border-b-4 border-blue-500 inline-block pb-2">
              Certifications
            </h3>
            <div className="mt-6 space-y-6">
              <div className="border-l-4 border-blue-500 pl-4 hover:bg-gray-800/50 p-4 rounded-lg transition-all duration-300">
                <h4 className="text-xl font-semibold">
                  MERN Stack Certification
                </h4>
                <p className="text-gray-400">Cetpa Infotech Pvt. Ltd.</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4 hover:bg-gray-800/50 p-4 rounded-lg transition-all duration-300">
                <h4 className="text-xl font-semibold">Python with Django</h4>
                <p className="text-gray-400">IIHT, Jaipur</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4 hover:bg-gray-800/50 p-4 rounded-lg transition-all duration-300">
                <h4 className="text-xl font-semibold">PHP & MySQL</h4>
                <p className="text-gray-400">
                  Spoken Tutorial Project, IIT Bombay
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4 hover:bg-gray-800/50 p-4 rounded-lg transition-all duration-300">
                <h4 className="text-xl font-semibold">CCNP Certification</h4>
                <p className="text-gray-400">SevenMentor Pvt. Ltd, Pune</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4 hover:bg-gray-800/50 p-4 rounded-lg transition-all duration-300">
                <h4 className="text-xl font-semibold">CCNA (R&S)</h4>
                <p className="text-gray-400">IIHT Bangalore</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4 hover:bg-gray-800/50 p-4 rounded-lg transition-all duration-300">
                <h4 className="text-xl font-semibold">
                  Networking with Security
                </h4>
                <p className="text-gray-400">Hewlett Packard Enterprise</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind Animation */}
      <style jsx>{`
        @keyframes shadowMove {
          0% {
            box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(147, 51, 234, 0.7);
          }
          100% {
            box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
          }
        }
        .animate-shadow-move {
          animation: shadowMove 3s infinite alternate ease-in-out;
        }
      `}</style>
    </section>
  );
}
