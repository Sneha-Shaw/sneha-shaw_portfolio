import mui from "../../assets/mui.png";
import next from "../../assets/nextJs.png";
import node from "../../assets/nodeJs.png";
import react from "../../assets/react.png";
import sass from "../../assets/sass.png";
import tailwind from "../../assets/tailwind.png";
import mongodb from "../../assets/mongodb.png";
import typescript from "../../assets/typescript.png";
import express from "../../assets/express.png";
import reactQuery from "../../assets/react-query.svg";
import apollo from "../../assets/apollo.png";
import redux from "../../assets/redux.png";
import Timeline from "../../components/Timeline/Timeline";

const stacks = [
  react,
  mui,
  node,
  tailwind,
  typescript,
  mongodb,
  sass,
  express,
  next,
  reactQuery,
  apollo,
  redux,
];

export default function About() {
  return (
    <div className="flex justify-center flex-col items-center p-5 w-screen md:mt-[5rem]">
      <p className="heading">About</p>
      <div className="border border-slate-500 box-bg rounded-md mt-3 w-full lg:w-1/2 flex flex-col items-start justify-center">
        <div className="border-b box-border p-2 w-full">
          <h2>Some things about me:</h2>
        </div>
        <ul className=" list-square w-full px-10 py-2 text-start">
          <li>
            Hi there! I'm <span className="text-[#FF4191]">Sneha Shaw,</span> a
            full stack web developer based in Kolkata.
          </li>
          <li>
            I am passionate about{" "}
            <span className="text-[#FF4191]">Front-End Development.</span>
          </li>
          <li>
            I enjoy transforming your ideas into user-friendly digital
            experiences, blending{" "}
            <span className="text-[#FF4191]">creativity</span> with{" "}
            <span className="text-[#FF4191]">technical expertise.</span>
          </li>
        </ul>
      </div>
      <div className="border border-slate-500 box-bg rounded-md mt-3 w-full lg:w-1/2 flex flex-col items-start justify-center">
        <div className="border-b border-slate-500 p-2 w-full">
          <h2>My Skills:</h2>
        </div>
        <div className="rounded-md p-4 w-full grid md:grid-cols-3 items-center gap-2 justify-center">
          {stacks.map((stack, index) => {
            return (
              <div
                key={index}
                className="w-full md:w-[10rem] h-[4rem] md:h-[6rem] m-auto skill"
              >
                <img
                  src={stack}
                  alt="logo"
                  className="w-full h-full object-contain m-auto"
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="underline m-auto text-4xl  text-pink-500 my-8 underline-offset-8">
        <h2>My Timeline</h2>
      </div>
      <div className="rounded-md p-4 flex w-full md:h-[180vh] overflow-hidden items-center gap-2 justify-center">
        <Timeline />
      </div>
    </div>
  );
}
