import { Box, Flex, HStack, IconButton, Collapse,useDisclosure, Button, chakra } from "@chakra-ui/react";
import Header from "./Header";
import NavItem from "./NavItem";
import ButtonLink from "./ButtonLink";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import LinksMobile from "./LinksMobile";
import AuthContext from "../../context/auth-context";
import { useContext } from "react";
import {useNavigate} from "react-router-dom";
import logo from "../../YOLISA-logo.png";
import {Image} from "@chakra-ui/react"
export default function Navbar() {
  const {isOpen,onToggle} =useDisclosure();
  const navigate=useNavigate();
  //show mobile menu 
  const ctx=useContext(AuthContext);
  const loggout=function(){
    localStorage.removeItem("token");
    ctx.isLogginSalesman=false;
    navigate("/");
  }
  
  return (
    <>
      <Header>
        <Flex w="full" maxW="1100px" marginX="auto" align="center">
          <Flex w="full" px="4" py="3" justifyContent="space-between">
            <Image src={logo}  h="3.8rem"/>
            <HStack spacing="4" display={{ base: "none", md: "flex" }}>
              <HStack mt="-1">
                {!ctx.isLogginSalesman && <NavItem link="/" label="INíCIO" />}
               
              </HStack>
              {!ctx.isLogginSalesman && (
                <ButtonLink label="SOU UM VENDEDOR" link="/login" />
              )}
            </HStack>
            {!ctx.isLogginSalesman && (
              <Box display={{ sm: "flex", md: "none" }} mt="2">
                <IconButton
                  _hover={{ bg: "yolisa.button", color: "yolisa.50" }}
                  variant="ghost"
                  fontSize="1.25rem"
                  color="yolisa.50"
                  icon={isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                  onClick={onToggle}
                ></IconButton>
              </Box>
            )}
            {ctx.isLogginSalesman && (
              <Button
              mt="2"
                fontWeight="600"
                bg="yolisa.button"
                variant="unstyled"
                display="flex"
                align="center"
                justifyContent="center"
                color="yolisa.50"
                onClick={loggout}
                _hover={{ bg: "yolisa.50", color: "yolisa.button" }}
              >
                <chakra.span mx="0.9375rem" fontSize="0.75rem">
                  TERMINAR SESSÃO
                </chakra.span>
              </Button>
            )}
          </Flex>
        </Flex>
      </Header>
      <Collapse in={isOpen} animateOpacity>
        <LinksMobile
          display={{ base: isOpen ? "flex" : "none", md: isOpen && "none" }}
        />
      </Collapse>
    </>
  );
}
