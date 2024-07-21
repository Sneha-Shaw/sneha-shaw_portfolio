import React from "react";

export default function Home() {
  return (
    <div className="flex justify-center home-bg flex-col items-center h-[92vh]">
      <p className="heading">Home</p>
      <div className="text-[5rem] text-center leading-tight ">
        Hi, I am Sneha Shaw,
        <br /> a <span className="text-[#FF4191]">Problem Solver</span>
      </div>
      <p className="sub-text text-center text-base mt-3">
        I specialize in finding innovative, effective and practical
        <br />
        solutions to complex challenges.
      </p>
    </div>
  );
}
