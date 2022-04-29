import { Box } from "@chakra-ui/react";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import SectionCount from "./SectionCount";
import SectionInformation from "./SectionInformation";
import UltimeAddSalesman from "./UltimeAddSalesman";
import UltimePosts from "./UltimePosts";

export default function Index() {
  return (
    <>
      <Box pb={{ base: "25.6rem", md: "1.6rem" }}>
        <Navbar />
        <Hero />
        <SectionInformation />
        <SectionCount />
        <UltimeAddSalesman />
        <UltimePosts />
      </Box>
      <Footer pos="absolute" />
    </>
  );
}
