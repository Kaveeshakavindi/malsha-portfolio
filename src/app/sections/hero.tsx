"use client";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { CiCircleChevDown } from "react-icons/ci";
import { IoArrowUp } from "react-icons/io5";
const Hero = () => {
  const goToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Box
      id="home"
      bgImage="url(/assets/images/bg.png)"
      width="full"
      height="100vh"
    >
      <Grid
        templateColumns="repeat(8, 1fr)"
        alignItems="center"
        height="90vh"
        padding="10"
      >
        <GridItem
          colSpan={1}
          display={{ base: "none", lg: "flex" }}
          flexDirection="column"
          alignItems="flex-start"
        >
          <div
            style={{
              color: "var(--primary-color)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <FaLinkedinIn style={{ marginBottom: "10px", fontSize: "20px" }} />
            <FaFacebookF style={{ marginBottom: "10px", fontSize: "20px" }} />
            <FaInstagram style={{ marginBottom: "10px", fontSize: "20px" }} />
            <Image src="/assets/images/findme.png" alt="find me" width="12px" />
          </div>
        </GridItem>
        <GridItem colSpan={7} display="flex" flexDirection="column" gap="1rem">
          <Heading
            size={{ base: "lg", lg: "3xl" }}
            fontWeight="medium"
            color="var(--primary-color)"
          >
            I am Amelia Dubois
          </Heading>
          <Heading size={{ base: "5xl", lg: "7xl" }}>SKILLED CHEF</Heading>
          <Box
            borderLeft="1px solid var(--opacity-color)"
            paddingLeft="4"
            display="flex"
            flexDirection="column"
            gap="3px"
          >
            <Text fontWeight="medium">Australia</Text>
            <Text color="var(--opacity-color)" textStyle="sm">
              Dandenong, Melbourne
            </Text>
          </Box>
        </GridItem>
      </Grid>

      <CiCircleChevDown
        style={{
          position: "absolute",
          top: "85vh",
          animation: "arrowDown 2s ease-in-out infinite",
        }}
        size="5rem"
        className="w-full text-align-center"
      />
      <Tooltip
        content="Go to top"
        contentProps={{
          css: { "--tooltip-bg": "orange" },
        }}
      >
        <IconButton
          rounded="full"
          position="fixed"
          left={{ base: "90%", sm: "90%", md: "90%", lg: "95%" }}
          zIndex="2000"
          onClick={goToTop}
        >
          <IoArrowUp />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default Hero;
