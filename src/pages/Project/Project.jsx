import React from "react";

import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  Button,
} from "@mui/material";

const Project = () => {
  const projects = [
    {
      id: 1,
      name: "Personal Portfolio",
      description: "Personal portfolio website",
      url: "https://github.com/Ankush-2000/Personal-Portfolio",
    },
    {
      id: 2,
      name: "Weather App",
      description: "Weather app using API",
      url: "https://github.com/Ankush-2000/Weather-App",
    },
    {
      id: 3,
      name: "To-Do App",
      description: "To-Do app using API",
      url: "https://github.com/Ankush-2000/To-Do-App",
    },
    {
      id: 3,
      name: "To-Do App",
      description: "To-Do app using API",
      url: "https://github.com/Ankush-2000/To-Do-App",
    },
  ];

  return (
    <div className="flex flex-col items-center md:pt-[4rem] pb-5 h-[92vh] overflow-auto">
      <p className="heading">Projects</p>
      <div className="w-3/4 flex flex-col gap-2">
        {projects.map((project) => (
          <Card
            // sx={{ maxWidth: 345 }}
            key={project.id}
            className="border border-slate-500 box-bg rounded-md mt-3 w-full flex flex-col items-start justify-center"
          >
            <CardHeader title={project.name} subheader={project.description} />
            <CardMedia
              component="img"
              height="194"
              image="https://source.unsplash.com/random"
              alt="Paella dish"
            />
            <CardContent>
              <Button
                variant="contained"
                color="success"
                component={Link}
                to={project.url}
              >
                View
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Project;
