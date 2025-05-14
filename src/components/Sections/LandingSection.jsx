import {
  Box,
  VStack,
  Heading,
  Avatar,
  AvatarGroup,
  Mark,
  Text,
  Em,
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

import React from "react";

const LandingSection = () => {
  return (
    <FullScreenSection className="bg-gradient-to-b from-[#0a192f] to-[#112240] flex items-center justify-center">
      <VStack>
        <AvatarGroup>
          <Avatar.Root size={"2xl"}>
            <Avatar.Fallback />
            <Avatar.Image />
          </Avatar.Root>
        </AvatarGroup>
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          Hello, I'm <Mark variant={"solid"}>{" Rishit Kadha "}</Mark>
        </Text>
        <Text fontSize={"2xl"} fontWeight={"light"}>
          A passionate <Em>Software Engineer</Em> with a knack for building{" "}
          <Em>web applications</Em>
        </Text>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
