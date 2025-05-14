import React from "react";
import { VStack, Box } from "@chakra-ui/react";
const FullScreenSection = ({ children, boxProps }) => {
  return (
    <VStack className="w-screen h-screen ">
      <Box
        maxWidth="1280px"
        minHeight="100vh"
        className="flex flex-col items-center justify-center p-8"
        {...boxProps}
      >
        {children}
      </Box>
    </VStack>
  );
};

export default FullScreenSection;
