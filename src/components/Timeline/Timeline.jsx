// src/Timeline.js

import React, { Fragment, useEffect, useRef, useState } from "react";
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
    position: "top-[50%]",
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
          start: "top bottom",
          scrub: true,
          toggleClass: "showCard",
        },
      });
      gsap.to(`.event${index}`, {
        scrollTrigger: {
          trigger: `.dot${index}`,
          start: "bottom center",
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
    <div className="relative w-full h-full flex-col gap-6 flex items-center ">
      <div className="w-4 h-4 aspect-square rounded-full hidden sm:block bg-[#FF4191] transition-all duration-500" />

      <div className="absolute hidden sm:block line top-0 w-1 h-0 bg-[#FF4191] transition-all duration-500" />

      {events.map((event, index) => {
        return (
          <Fragment key={index}>
            <div
              className={`w-4 h-4 dot${index} opacity-0 hidden sm:block absolute aspect-square rounded-full bg-[#FF4191] transition-all duration-500`}
              style={{ top: getPosition(index) }}
            />
            <div
              key={index}
              className={`md:absolute opacity-0 event${index} ${
                index % 2
                  ? "right-0 sm:right-[10%] lg:right-1/4 translate-x-full"
                  : "left-0 sm:left-[10%] lg:left-1/4 -translate-x-full"
              } w-full md:w-72 p-5 card rounded-lg shadow-lg transition-all duration-500  `}
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
          </Fragment>
        );
      })}
      <div className="w-4 h-4 aspect-square absolute bottom-0 rounded-full hidden sm:block bg-[#FF4191] transition-all duration-500" />
    </div>
  );
};

export default Timeline;
