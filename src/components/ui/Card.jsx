import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, onClick }) => {
  return (
    <Box
      as="button"
      onClick={onClick}
      bg="white" // white background
      borderRadius="2xl"
      p={6}
      boxShadow="md"
      w="full"
      maxW="400px"
      textAlign="center"
      border="1px solid"
      borderColor="gray.200" //gray border
      transition="transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease"
      _hover={{
        transform: "scale(1.05)",
        boxShadow: "lg",
        border: "2px solid",
        borderColor: "green.400", // pink border on hover
        cursor: onClick ? "pointer" : "default",
      }}
    >
      <VStack spacing={5}>
        <Box borderRadius="xl" overflow="hidden" w="full" h="200px">
          <Image
            src={imageSrc}
            alt={title}
            objectFit="cover"
            w="full"
            h="full"
            loading="lazy"
          />
        </Box>

        <Heading
          as="h3"
          size="lg"
          color="black" // black heading text
        >
          {title}
        </Heading>

        <Text fontSize="md" color="gray.600">
          {" "}
          {/* dark gray text */}
          {description}
        </Text>

        <HStack
          spacing={2}
          color="green.400"
          fontWeight="semibold"
          justifyContent="center"
        >
          <Text>Learn More</Text>
          <FontAwesomeIcon icon={faArrowRight} />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;
