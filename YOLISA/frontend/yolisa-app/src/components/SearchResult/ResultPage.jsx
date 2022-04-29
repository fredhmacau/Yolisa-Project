import {Box} from "@chakra-ui/react";
import Navbar from "../Landing/Navbar";
import ComponentResult from "./ComponentResult";
import ViewResult from "./ViewResults"
export default function ResultPage(){
    return (
      <>
        <Box>
          <Navbar />
          <ComponentResult/>
          <ViewResult/>
        </Box>
      </>
    );
}