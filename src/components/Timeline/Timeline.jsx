// src/Timeline.js

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./timeline.css";

gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    place: "Itobuz Technologies",
    type: "job",
    timeline: "July 2023 - Present",
    jobType: "Full-time",
    designation: "Software Developer",
    position: "top-0",
  },
  {
    place: "Itobuz Technologies",
    type: "internship",
    timeline: "January 2023 - July 2023",
    jobType: "Internship",
    designation: "Software Developer Trainee Intern",
    position: "top-[10%]",
  },
  {
    place: "Matricula",
    type: "internship",
    timeline: "August 2022 - October 2022",
    jobType: "Internship",
    designation: "Full Stack Developer",
    position: "top-[20%]",
  },
  {
    type: "school",
    timeline: "2019 - 2023",
    marks: "8 CGPA",
    place: " University Of Engineering and Management Kolkata",
    position: "top-[20%]",
  },
  {
    type: "school",
    board: "ISC",
    timeline: "2019",
    marks: "77.5%",
    place: "St. Stephen's School Budge Budge",
    position: "top-[40%]",
  },
  {
    type: "school",
    board: "ICSE",
    timeline: "2017",
    marks: "76.6%",
    place: "Budge Budge St. Paul's Day School",
    position: "top-[60%]",
  },
];

const Timeline = () => {
  useEffect(() => {
    gsap.to(".line", {
      scrollTrigger: {
        trigger: `.event0`,
        start: "bottom bottom",
        end: "top bottom",
        scrub: true,
      },

      height: "100%",
    });
    events.forEach((_, index) => {
      gsap.to(`.event${index}`, {
        scrollTrigger: {
          trigger: `.event${index}`,
          start: "top center",
          scrub: true,
          toggleClass: "showCard",
        },
      });
      gsap.to(`.event${index}`, {
        scrollTrigger: {
          trigger: `.dot${index}`,
          start: "center center",
          scrub: true,
          toggleClass: "showCard",
        },
      });
    });
  }, []);

  const getPosition = (index) => {
    const position = (index / events.length) * 80;
    return `${position + 10}%`;
  };

  return (
    <div className="relative w-full h-full flex justify-center items-start">
      <div className="w-4 h-4 aspect-square rounded-full bg-pink-500" />

      <div className="absolute line top-0 w-1 h-0 bg-pink-500 transition-all duration-500"></div>

      {events.map((event, index) => {
        return (
          <>
            <div
              className={`w-4 h-4 dot${index} opacity-0 absolute right-[49.4%] aspect-square rounded-full bg-pink-500`}
              style={{ top: getPosition(index) }}
            />
            <div
              key={index}
              className={`absolute opacity-0 event${index} ${
                index % 2
                  ? "right-[10%] lg:right-1/4 translate-x-full"
                  : "left-[10%] lg:left-1/4 -translate-x-full"
              } w-72 p-5 bg-gray-200 shadow-lg transition-all duration-500  `}
              style={{ top: getPosition(index) }}
            >
              <h2 className="text-lg font-bold">
                {event.place}
                {event.board && `(${event.board})`}
              </h2>
              <p>{event.designation}</p>
              <p>{event.timeline}</p>
              <p>{event.marks}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Timeline;
