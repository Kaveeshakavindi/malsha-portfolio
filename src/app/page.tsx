import { Box } from "@chakra-ui/react";
import Hero from "./sections/hero";
import Start from "./sections/home-start";
import Resume from "./sections/resume";
import Contact from "./sections/contact";
import Footer from "@/components/custom/footer";
import Nav from "@/components/custom/navigationbar";

export default function Home() {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      width="100vw"
    >
      <Nav />
      <Hero />
      <Start />
      <Resume />
      <Contact />
      <Footer />
    </Box>
  );
}
