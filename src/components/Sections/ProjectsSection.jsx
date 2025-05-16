import React from "react";
import { Text, Box, VStack, Heading, chakra } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import Card from "../ui/Card";
import image1 from "../../images/photo1.jpg";
import image2 from "../../images/photo2.jpg";
import image3 from "../../images/photo3.jpg";
import image4 from "../../images/photo4.jpg";

const Mark = chakra("mark", {
  base: {
    variant: "subtle",
    bg: "green.300",
    transition: "background-color 0.3s ease",
    _hover: {
      bg: "green.500",
      variant: "solid",
      px: 2,
      py: 1,
      fontWeight: "bold",
    },
  },
});
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
    <FullScreenSection
      boxProps={{
        bg: "white",
        color: "black",
        px: [4, 8, 12],
        py: 12,
      }}
    >
      <VStack spacing={4} mb={12} textAlign="center" maxW="600px" mx="auto">
        <Heading as="h2" size="2xl" color="pink.500" fontWeight="extrabold">
          <Mark>My Projects</Mark>
        </Heading>
        <Text fontSize="lg" color="gray.700">
          Here are some of my projects.
        </Text>
      </VStack>

      <Box
        display="grid"
        gridTemplateColumns={["1fr", "1fr 1fr"]}
        gap={10}
        maxW="1200px"
        mx="auto"
        w="full"
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
