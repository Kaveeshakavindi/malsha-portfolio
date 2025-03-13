import React from "react";
import Title from "@/components/custom/title";
import { Box } from "@chakra-ui/react";
import Timeline from "@/components/custom/timeline";
const Resume = () => {
  return (
    <Box paddingX="2rem" width="100%">
      <Title name="Resume" caption="In a nutshell" />
      <Box width="100%">
        <Timeline />
      </Box>
    </Box>
  );
};

export default Resume;
