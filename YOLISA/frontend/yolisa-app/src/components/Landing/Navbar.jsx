import { Box, Flex, HStack, IconButton, Text,Collapse,useDisclosure } from "@chakra-ui/react";
import Header from "./Header";
import NavItem from "./NavItem";
import ButtonLink from "./ButtonLink";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import LinksMobile from "./LinksMobile";



export default function Navbar() {
  const {isOpen,onToggle} =useDisclosure();
  //show mobile menu 

  
  return (
    <>
      <Header >
        <Flex w="full" maxW="1100px" marginX="auto" align="center">
          <Flex w="full" px="4" py="3" justifyContent="space-between">
            <Text color="yolisa.50" fontSize="1.75rem" fontWeight="500">
              YOLISA
            </Text>
            <HStack spacing="4" display={{ base: "none", md: "flex" }}>
              <HStack mt="-1" >
                <NavItem link="/" label="INíCIO" />
                <NavItem link="/" label="SOBRE" />
              </HStack>
              <ButtonLink label="SOU UM VENDEDOR" link="/login" />
            </HStack>
            <Box display={{ sm: "flex", md: "none" }}>
              <IconButton
                _hover={{ bg: "yolisa.button", color: "yolisa.50" }}
                variant="ghost"
                fontSize="1.25rem"
                color="yolisa.50"
                icon={isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                onClick={onToggle}
              ></IconButton>
            </Box>
          </Flex>
        </Flex>
      </Header>
      <Collapse in={isOpen} animateOpacity>
        <LinksMobile
         
          display={{ base: isOpen? "flex" : "none", md: isOpen && "none" }}
        />
      </Collapse>
    </>
  );
}
