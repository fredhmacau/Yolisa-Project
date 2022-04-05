import { Box, HStack } from "@chakra-ui/react";
import NavItem from "./NavItem";

export default function LinksMobile(props) {
  return (
    <>
      <Box
        {...props}
        align="center"
        justifyContent="center"
        bg="yolisa.bgOp"
        h="3rem"
        w="full"
      >
        <HStack>
          <NavItem link="/" label="INÍCIO" />
          <NavItem link="/login" label="| SOU UM VENDEDOR" />
          <NavItem link="/" label="| SOBRE NÓS " />
        </HStack>
      </Box>
    </>
  );
}
