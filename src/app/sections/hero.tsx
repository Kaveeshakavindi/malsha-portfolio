import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { CiCircleChevDown } from "react-icons/ci";
const Hero = () => {
  return (
    <Box bgImage="url(/assets/images/bg.png)" width="full">
      <Grid
        templateColumns="repeat(8, 1fr)"
        alignItems="center"
        height="90vh"
        padding="10"
      >
        <GridItem
          colSpan={1}
          display="flex"
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
          <Heading size="3xl" fontWeight="medium" color="var(--primary-color)">
            I am Malsha Fernando
          </Heading>
          <Heading size="7xl">SKILLED CHEF</Heading>
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
      <Box
        position="absolute"
        top="0"
        width="100%"
        height="5rem"
        style={{
          background:
            "linear-gradient(to bottom, var(--background), transparent)",
        }}
      ></Box>
      <Box
        position="absolute"
        top="81vh"
        width="100%"
        height="5rem"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--background))",
        }}
      ></Box>
      <CiCircleChevDown
        style={{
          position: "absolute",
          top: "85vh",
          animation: "arrowDown 2s ease-in-out infinite",
        }}
        size="5rem"
        className="w-full text-align-center"
      />
    </Box>
  );
};

export default Hero;
