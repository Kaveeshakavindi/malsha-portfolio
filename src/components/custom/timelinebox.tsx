import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { FaRegCircle } from "react-icons/fa";

interface BoxProps {
  index: number;
  startYear: string;
  endYear: string;
  occupation: string;
  employer: string;
  description: string;
}

const TimelineBox: React.FC<BoxProps> = ({
  startYear,
  endYear,
  occupation,
  employer,
  description,
  index,
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      justifyContent="center"
      position="relative"
      minHeight="150px"
    >
      {/* top, bottom lines + circle */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        position="relative"
        width="10%"
        zIndex="1"
      >
        <Box height="6rem" width="1px" bg="var(--primary-color)" />
        <FaRegCircle
          color="var(--primary-color)"
          style={{ fontSize: "2rem" }}
        />
        <Box height="6rem" width="1px" bg="var(--primary-color)" />
      </Box>

      {/* left line + card */}
      <Box
        display="flex"
        alignItems="center"
        position="absolute"
        width="90%"
        justifyContent={index % 2 === 0 ? "flex-start" : "flex-end"}
      >
        {index % 2 !== 0 && (
          <Box
            height="2px"
            width={["1%", "2%", "3%", "3.4%", "3.8%"]}
            bg="var(--primary-color)"
          />
        )}
        <Box
          padding="1.5rem"
          border="solid"
          borderColor="var(--primary-color)"
          borderWidth="1px"
          borderRadius="1rem"
          background="var(--opacity-primary)"
          width="45%"
        >
          <Text color="var(--opacity-color)" fontSize="sm">
            {startYear} - {endYear}
          </Text>
          <Text fontSize="2xl" fontWeight="bold">
            {occupation}
          </Text>
          <Text
            fontWeight="semibold"
            color="var(--primary-color)"
            fontSize="lg"
          >
            {employer}
          </Text>
          <Text fontSize="sm">{description}</Text>
        </Box>
        {index % 2 === 0 && (
          <Box
            height="2px"
            width={["1%", "2%", "3%", "3.4%", "3.8%"]}
            bg="var(--primary-color)"
          />
        )}
      </Box>
    </Box>
  );
};

export default TimelineBox;
