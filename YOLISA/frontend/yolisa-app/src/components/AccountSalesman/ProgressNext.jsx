import { Box } from "@chakra-ui/react";

export default function ProgressNext({colorProgress}){
    return (
      <>
        <Box w="8rem" rounded="md" h="0.7rem" bg={`${colorProgress}`}></Box>
      </>
    );
}