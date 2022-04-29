import { Box } from "@chakra-ui/react";
import Navbar from "../Landing/Navbar";
import ComponentInfo from "./ComponentInfo";

export default function ResultPage() {
  return (
    <>
      <Box>
        <Navbar />
        <ComponentInfo/>
      </Box>
    </>
  );
}
