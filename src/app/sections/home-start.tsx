import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";

const Start = () => {
  return (
    <Box
      alignItems="center"
      padding="5rem"
      display={"flex"}
      flexDirection="column"
      gap="5rem"
      marginTop="5rem"
    >
      <Text
        fontSize={["1rem", "1rem", "2rem", "2rem"]}
        textAlign="center"
        color="var(--opacity-color)"
        marginLeft="5rem"
        marginRight="5rem"
      >
        Whether cooking for an intimate gathering or a grand event, I put my
        heart and soul into every dish I create. My approach is rooted in
        quality ingredients, creativity, and a dedication to excellence.
      </Text>
      <Box
        overflow="hidden"
        display="flex"
        width="100vw"
        flexDirection="row"
        gap="0.5rem"
        justifyContent="center"
      >
        {["1.png", "2.png", "3.png", "4.png", "5.png"].map((img, index) => (
          <Image
            key={index}
            src={`/assets/images/${img}`}
            alt="meal"
            boxSize={["100px", "120px", "150px", "200px"]}
            css={{
              transition: "transform 0.3s ease-in-out",
              _hover: {
                transform: "scale(1.1)",
              },
            }}
          />
        ))}
      </Box>
      <Grid
        gridTemplateColumns="repeat(2, 1fr)"
        paddingY="5rem"
        paddingX="5rem"
        alignItems="center"
        justifyContent="center"
      >
        <GridItem>
          <Text
            fontSize="10rem"
            color="var(--primary-color)"
            padding="0"
            marginBottom="-5rem"
          >
            &quot;
          </Text>
          <Text fontSize={["xl", "xl", "2xl", "2xl"]}>
            I envision my recipe like a perfect dance routine: each ingredient
            takes its turn, gracefully stepping in at just the right moment, and
            when they come together, it is a flawless performance. Of course,
            sometimes one ingredient decides to do its own thing – like a diva
            in a dance-off – but that is where the magic happens!
          </Text>
        </GridItem>
        <GridItem>
          <Image src="/assets/images/chef.png" alt="chef" />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Start;
