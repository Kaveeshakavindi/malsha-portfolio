"use client";
import { Box, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/close
  };
  return (
    <Box
      position="absolute"
      zIndex="1000"
      width="100%"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      padding="1rem"
    >
      <Image src="/assets/images/logo.png" alt="logo" boxSize="50px" />
      <Box _hover={{ cursor: "pointer" }}>
        <Text
          color="var(--primary-color)"
          _hover={{ color: "var(--opacity-primary)" }}
          onClick={toggleMenu}
        >
          Menu
        </Text>
      </Box>
    </Box>
  );
};

export default Nav;
