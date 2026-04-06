import React from "react";
import { RESUME_URL } from "../../config/site";

export default function Home() {
  return (
    <div className="flex justify-center home-bg flex-col items-center h-[92vh]">
      <p className="heading">Home</p>
      <div className="text-[5rem] text-center leading-tight ">
        Hi, I am Sneha Shaw,
        <br /> a <span className="accent-text">Problem Solver</span>
      </div>
      <p className="sub-text text-center text-base mt-3">
        I specialize in finding innovative, effective and practical
        <br />
        solutions to complex challenges.
      </p>
      <a
        href={RESUME_URL}
        download
        target="_blank"
        rel="noreferrer"
        className="btn-primary mt-6"
      >
        Download Resume
      </a>
    </div>
  );
}
