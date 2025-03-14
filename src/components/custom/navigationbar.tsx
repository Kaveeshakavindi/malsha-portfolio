"use client";
import { Box, Image, Link, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(true);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  const links = ["home", "about", "resume", "contact"];
  return (
    <Box
      position="absolute"
      zIndex="1000"
      width="100%"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
    >
      <Image
        margin="1rem"
        src="/assets/images/logo.png"
        alt="logo"
        boxSize="50px"
      />
      <Box _hover={{ cursor: "pointer" }}>
        <Text
          margin="1rem"
          color="var(--primary-color)"
          _hover={{ color: "var(--opacity-primary)" }}
          onClick={toggleMenu}
          hidden={isOpen}
        >
          Menu
        </Text>
      </Box>
      <Box
        background="var(--primary-color)"
        width="100vw"
        height="100vh"
        position="absolute"
        display="flex"
        overflow="hidden"
        flexDirection="column"
        alignItems="left"
        justifyContent="space-between"
        padding="10rem"
        transform={isOpen ? "translateX(0)" : "translateX(100%)"}
        transition="transform 0.5s linear"
      >
        <Box onClick={closeMenu} _hover={{ cursor: "pointer" }}>
          <IoCloseOutline style={{ fontSize: "5rem" }} />
        </Box>
        {links.map((link, index) => (
          <Link
            fontSize={{ base: "2xl", sm: "5xl", md: "5xl", lg: "5xl" }}
            textTransform="uppercase"
            key={index}
            href={`#${link}`}
            _active={{ color: "var(--background)" }}
            onClick={(e) => {
              setIsOpen(false);
              e.preventDefault();
              document
                .getElementById(link)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {link}
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default Nav;
