import React from "react";

export default function Home() {
  return (
    <div className="flex justify-center flex-col items-center p-5 w-screen h-[81.15vh]">
      <p className="text-slate-700">Home</p>
      <div className="text-[5rem] text-center leading-tight ">
        Hi, I am Sneha Shaw,
        <br /> a <span className="text-pink-600">Problem Solver</span>
      </div>
      <p className="text-slate-500 text-center text-base mt-3">
        I specialize in finding innovative, effective and practical
        <br />
        solutions to complex challenges.
      </p>
    </div>
  );
}
