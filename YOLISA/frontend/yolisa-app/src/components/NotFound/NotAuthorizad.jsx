import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Flex, VStack, chakra } from "@chakra-ui/react";
import FadeIn from "../Landing/animetions/FadeIn";
import { useNavigate } from "react-router-dom";

export default function NotAuthorizad() {
  const go = useNavigate();
  return (
    <Flex
      w="full"
      h="100vh"
      color="yolisa.title"
      direction="column"
      align="center"
      bg="#f8fafc"
    >
      <Flex w="full" h="full" justifyContent="center" align="center">
        <VStack
          w="full"
          mt="2.5rem"
          marginX="auto"
          display="flex"
          justifyContent="center"
        >
          <FadeIn>
            <Text
              color="yolisa.title"
              fontSize="2rem"
              fontWeight="medium"
              lineHeight="1.2em"
              textAlign="center"
            >
              OCORREU UM ERRO
            </Text>
            <chakra.p
              mt="2"
              color="yolisa.p"
              w="full"
              maxW="600px"
              marginX="auto"
              textAlign="center"
              lineHeight="1.2em"
              letterSpacing="wide"
            >
              O SERVIDOR DEMOROU PARA RESPONDER!
              Por favor atualize novamente a página.
            </chakra.p>
            
          </FadeIn>
        </VStack>
      </Flex>
    </Flex>
  );
}
