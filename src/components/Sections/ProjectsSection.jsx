import React from "react";
import { Text, Box } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import Card from "../ui/Card";
import image1 from "../../images/photo1.jpg";
import image2 from "../../images/photo2.jpg";
import image3 from "../../images/photo3.jpg";
import image4 from "../../images/photo4.jpg";
const ProjectsSection = () => {
  const projects = [
    {
      title: "React Space",
      description:
        "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
      getImageSrc: () => image1,
    },
    {
      title: "React Infinite Scroll",
      description:
        "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
      getImageSrc: () => image2,
    },
    {
      title: "Photo Gallery",
      description:
        "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
      getImageSrc: () => image3,
    },
    {
      title: "Event planner",
      description:
        "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
      getImageSrc: () => image4,
    },
  ];
  return (
    <FullScreenSection>
      <Text className="text-4xl font-bold">Projects</Text>
      <Text className="mt-4 text-lg">Here are some of my projects.</Text>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
