import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <Box
      width="100%"
      height="10rem"
      backgroundColor="var(--background-light)"
      alignContent="center"
    >
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        padding="3rem"
        fontSize="xs"
        gap="1rem"
        color="var(--opacity-color)"
      >
        <FaRegCopyright style={{ textAlign: "center" }} />
        <Text>Copyright 2025 - Malsha Fernando</Text>
      </Box>
    </Box>
  );
};

export default Footer;
