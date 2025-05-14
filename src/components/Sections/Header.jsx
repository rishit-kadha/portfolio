import { Box, HStack, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const socials = [
    {
      icon: faEnvelope,
      url: "mailto: rishitkadha@gmail.com",
    },
    {
      icon: faGithub,
      url: "https://github.com/rishit-kadha",
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/rishit-kadha-18958126a/",
    },
    {
      icon: faMedium,
      url: "https://medium.com/@rkadha226",
    },
    {
      icon: faStackOverflow,
      url: "https://stackoverflow.com/users/26448385/rishit-kadha",
    },
  ];

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding="1rem"
      className="bg-stone-800 shadow-lg"
    >
      <HStack display="flex" gap="1rem">
        {socials.map((social, index) => (
          <a key={index} href={social.url}>
            <FontAwesomeIcon icon={social.icon} size="2x" />
          </a>
        ))}
      </HStack>
      <HStack>
        <Link to={"#projects"} onClick={handleClick}>
          Projects
        </Link>
        <Heading>Rishit Kadha</Heading>
      </HStack>
    </Box>
  );
};

export default Header;
