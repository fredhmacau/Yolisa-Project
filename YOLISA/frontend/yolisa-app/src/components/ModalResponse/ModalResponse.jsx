import { Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Spacer } from "@chakra-ui/react";
import {
  Flex,
  Button,
  chakra,
  
} from "@chakra-ui/react";
import {Link as BrowserLink} from "react-router-dom";
import FadeIn from "../Landing/animetions/FadeIn";
import {Portal} from "@chakra-ui/react"
export default function ModalResponse({colorButton, title, content,link,buttonText}) {



  return (
    <>
        <FadeIn>
      <Portal>
          <Flex
            w="100%"
            h="100vh"
            bg="#131924e8"
            justifyContent="center"
            align="center"
            pos="absolute"
            zIndex={0}
            top={0}
            bottom={0}
            left={0}
            right={0}
          >
            <Flex
              w="full"
              p="4"
              align="flex-start"
              justifyContent="flex-start"
              direction="column"
              rounded="md"
              maxW="400px"
              bg="white"
              h="13.3rem"
            >
              <Text
                color="yolisa.title"
                fontSize="1.125rem"
                fontWeight="medium"
                lineHeight="1.2em"
                textAlign="center"
                py="2"
              >
                {title}
              </Text>
              <chakra.blockquote
                rounded="md"
                bg="gray.300"
                w="full"
                h="0.5rem"
              />
              <Flex py="2" w="full">
                <chakra.p
                  w="full"
                  mt="2"
                  color="yolisa.p"
                  marginX="auto"
                  textAlign="left"
                  lineHeight="1.2em"
                  letterSpacing="wide"
                  fontSize="0.85rem"
                >
                  {content}
                </chakra.p>
              </Flex>
              <Spacer />
              <chakra.blockquote
                rounded="md"
                bg="gray.300"
                w="full"
                h="0.4rem"
              />
              <BrowserLink to={link}>
                <Button
                  mb="2"
                  mt="4"
                  color="yolisa.50"
                  _hover={{ bg: "yolisa.bg", color: "yolisa.50" }}
                  bg={`${colorButton}`}
                >
                  {buttonText}
                </Button>
              </BrowserLink>
            </Flex>
          </Flex>
      </Portal>
        </FadeIn>
    </>
  );
}
