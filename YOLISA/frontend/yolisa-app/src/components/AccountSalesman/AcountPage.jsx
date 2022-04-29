
import { Box} from "@chakra-ui/react";


import Navbar from "../Landing/Navbar";
import InfoSalesman from "./InfoSalesman";


export default function AcountPage(){

    return (
      <>
        <Box>
          <Navbar />
          <InfoSalesman />
        </Box>
        {/* <Footer mt={{ base: "38.6rem", md: "37.6rem" }} pos="absolute" /> */}
      </>
    );
}