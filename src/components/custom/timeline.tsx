import { Box } from "@chakra-ui/react";
import React from "react";
import TimelineBox from "./timelinebox";
const Timeline = () => {
  return (
    <Box
      display="flex"
      position="relative"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      width="100%"
      paddingTop="5rem"
    >
      <TimelineBox
        index={1}
        startYear="2021"
        endYear="2025"
        employer="Kiyos Restaurant"
        occupation="Director"
        description="Spearheaded the culinary operations, creating innovative menus featuring local and international flavors."
      />
      <TimelineBox
        index={2}
        startYear="2021"
        endYear="2025"
        employer="Kiyos Restaurant"
        occupation="Director"
        description="Spearheaded the culinary operations, creating innovative menus featuring local and international flavors."
      />
      <TimelineBox
        index={3}
        startYear="2021"
        endYear="2025"
        employer="Kiyos Restaurant"
        occupation="Director"
        description="Spearheaded the culinary operations, creating innovative menus featuring local and international flavors."
      />
      <TimelineBox
        index={4}
        startYear="2021"
        endYear="2025"
        employer="Kiyos Restaurant"
        occupation="Director"
        description="Spearheaded the culinary operations, creating innovative menus featuring local and international flavors."
      />
    </Box>
  );
};

export default Timeline;
