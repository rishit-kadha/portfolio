import { Box, HStack, Button, Text } from "@chakra-ui/react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const Header = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show on scroll up, hide on scroll down
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false); // scrolling down
      } else {
        setVisible(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
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
      position="sticky"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding="1rem"
      bg="gray.900"
      top="0"
      zIndex="10"
      transition="transform 0.3s ease"
      transform={visible ? "translateY(0)" : "translateY(-100%)"}
    >
      <HStack display="flex" gap="1rem">
        {socials.map((social, index) => (
          <a key={index} href={social.url}>
            <FontAwesomeIcon icon={social.icon} size="2x" />
          </a>
        ))}
      </HStack>
      <HStack spacing={4} color="white">
        <Button variant="ghost" as="a" href="#landing">
          Home
        </Button>
        <Button variant="ghost" as="a" href="#projects">
          Projects
        </Button>
        <Button variant="ghost" as="a" href="#contact">
          Contact
        </Button>
      </HStack>
    </Box>
  );
};

export default Header;
