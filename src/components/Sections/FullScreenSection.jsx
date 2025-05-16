import React from "react";
import { VStack, Box } from "@chakra-ui/react";

const FullScreenSection = ({ children, boxProps }) => {
  return (
    <VStack
      minW="100vw"
      minH="100vh"
      bg="white" // white background for entire screen
      color="black" // black text color by default
      justify="center"
      align="center"
    >
      <Box
        maxWidth="1280px"
        minHeight="100vh"
        p={8}
        borderRadius="xl"
        bg="white"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        {...boxProps}
      >
        {children}
      </Box>
    </VStack>
  );
};

export default FullScreenSection;
