import { VStack, Heading, Image, Text, chakra } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import React from "react";
import pfp from "../../images/pfp.jpg";
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
        <Image
          src={pfp}
          alt="Profile Picture"
          borderRadius="full"
          boxSize="200px"
          objectFit="cover"
          boxShadow="lg"
        />

        <Heading as="h1" fontSize="3xl" m={7}>
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
