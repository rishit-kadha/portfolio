import { Box, VStack, Heading, Avatar, Text, chakra } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import React from "react";

const Emphasized = chakra("em", {
  base: {
    fontStyle: "italic",
    transition: "color 0.3s ease",
    _hover: { color: "green.500" },
  },
});
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
const LandingSection = () => {
  return (
    <FullScreenSection
      boxProps={{
        bg: "white",
        color: "black",
        px: 6,
        py: 16,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <VStack spacing={6}>
        <Avatar.Root>
          <Avatar.Fallback />
          <Avatar.Image
            name="Rishit Kadha"
            src="https://avatars.githubusercontent.com/u/rishit-kadha?v=4"
            size="2xl"
            borderColor="green.500"
          />
        </Avatar.Root>

        <Heading as="h1" fontSize="3xl">
          Hello, I'm <Mark>Rishit Kadha</Mark>
        </Heading>

        <Text fontSize="xl" maxW="600px" fontWeight="light">
          A passionate <Emphasized>Software Engineer</Emphasized> with a knack
          for building <Emphasized>web applications</Emphasized>
        </Text>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
