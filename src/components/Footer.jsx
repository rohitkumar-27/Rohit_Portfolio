const Footer = () => {
  return (
    <footer className="relative bg-black py-6 text-white overflow-hidden">
      {/* Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-transparent to-purple-500/30 blur-3xl"></div>

      {/* Glass Morphism Effect */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-md"></div>

      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
        {/* Copyright Text */}
        <p className="text-gray-300 text-sm">
          &copy; 2025 Rohit Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
