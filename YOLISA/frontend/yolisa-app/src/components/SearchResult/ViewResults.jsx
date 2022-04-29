import { Box } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { Flex,Container,VStack,Text} from "@chakra-ui/react";
import FadeIn from "../Landing/animetions/FadeIn";
import Result from "./Result";
import {RiArrowLeftSLine,RiArrowRightSLine} from "react-icons/ri"

export default function ViewResult(){
    return (
      <>
        <Flex w="full" h="auto" pos="absolute" mt="-24">
          <Container w="full" maxW="800px">
            <Flex
              w="full"
              maxWidth="800px"
              rounded="md"
              bg="#e8effb"
              marginX="auto"
            >
              <VStack
                w="full"
                mt="1rem"
                marginX="auto"
                display="flex"
                justifyContent="center"
                mb="4"
              >
                <FadeIn>
                  <Text
                    color="yolisa.title"
                    fontSize="1.375rem"
                    fontWeight="medium"
                    lineHeight="1em"
                    textAlign="center"
                    mb="2rem"
                  >
                    Resultados (5)
                  </Text>
                  <Result />
                  <Result />
                  <Result />
                  <Box w="full">
                    <HStack
                      w="full"
                      display="flex"
                      justifyItems="center"
                      justifyContent="center"
                      alignItems="center"
                      p="6"
                      marginX="auto"
                    >
                      <IconButton
                        bg="#142b89"
                        color="#FFFFFF"
                        icon={<RiArrowLeftSLine color="#fff" />}
                        variant="ghost"
                        _hover={{ color: "#222" }}
                      />
                      <IconButton
                        color="#FFFFFF"
                        bg="#142b89"
                        icon={<RiArrowRightSLine color="#fff" />}
                        _hover={{ color: "#222" }}
                      />
                    </HStack>
                  </Box>
                </FadeIn>
              </VStack>
            </Flex>
          </Container>
        </Flex>
        ;
      </>
    );
}
