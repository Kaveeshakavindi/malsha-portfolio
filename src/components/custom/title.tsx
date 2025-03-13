import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

interface TitleProps {
  caption: string;
  name: string;
}

const Title: React.FC<TitleProps> = ({ caption, name }) => {
  return (
    <Box marginBottom="1rem">
      <Box display="flex" alignItems="center" gap="0.5rem">
        <Box height="1px" width="2rem" bg="var(--primary-color)" />
        {caption && (
          <Text fontSize="sm" color="var(--primary-color)">
            {caption}
          </Text>
        )}
      </Box>
      <Heading fontSize="5xl" fontWeight="medium" mt="0.5rem">
        {name}
      </Heading>
    </Box>
  );
};

export default Title;
