// import React from 'react'
import Github from "../assets/Github.png";

const Cards = ({ item }) => {
  return (
    <div className="border border-red-500 rounded-xl w-[350px] lg:w-[400px] bg-gray-900/60 backdrop-blur-md shadow-lg shadow-red-500/30 hover:scale-105 transition-transform duration-300 flex flex-col h-[450px] cursor-pointer">
      {/* Image */}
      <img
        src={item.image}
        alt=""
        className="rounded-t-xl w-full h-[200px] object-cover"
      />

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h1 className="font-bold text-xl text-white mb-2">{item.title}</h1>
        <p className="text-gray-300 text-sm flex-grow">{item.desc}</p>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">
          <a
            href={item.live}
            target="_blank"
            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md shadow-red-600/50 hover:bg-red-600 transition-all"
          >
            Live Preview
          </a>
          <a
            href={item.github}
            target="_blank"
            className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-md shadow-gray-600/50 hover:bg-gray-800 transition-all"
          >
            <img src={Github} alt="GitHub" className="w-5" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
