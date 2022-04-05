

import { Box } from "@chakra-ui/react";
import Footer from "../components/Landing/Footer";
import Hero from "../components/Landing/Hero";
import Navbar from "../components/Landing/Navbar";
import SectionCount from "../components/Landing/SectionCount";
import SectionInformation from "../components/Landing/SectionInformation";
import UltimeAddSalesman from "../components/Landing/UltimeAddSalesman";
import UltimePosts from "../components/Landing/UltimePosts";

export default function Landing() {
  return (
    <>
      <Box pb={{base:"25.6rem",md:"1.6rem"}} >
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
