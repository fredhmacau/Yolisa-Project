import {
  Text,
  Flex,
  VStack,
  chakra,
  Box,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import FadeIn from "../Landing/animetions/FadeIn";
import { RiArrowLeftSLine,RiArrowRightSLine } from "react-icons/ri";
import ViewPost from "./ViewPost";

export default function ViewPosts() {
  return (
    <>
      <FadeIn>
        <Flex w="full" p="2" mt="1rem">
          <Flex
            w="full"
            direction="column"
            h="auto"
            bg="#e8effb"
            rounded="md"
            shadow="md"
            p="18"
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
                >
                  Visualize suas publicações
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
                  fontSize="0.875rem"
                >
                  Visualize os produtos que foram publicados por sí
                </chakra.p>
              </FadeIn>
            </VStack>
            <Flex p="6" w="full" direction="column" h="auto">
              <ViewPost />
              <ViewPost />
              <ViewPost />
            </Flex>
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
                  _hover={{color:"#222"}}
                />
                <IconButton
                  color="#FFFFFF"
                  bg="#142b89"
                  icon={<RiArrowRightSLine color="#fff" />}
                  _hover={{color:"#222"}}
                />
              </HStack>
            </Box>
          </Flex>
        </Flex>
      </FadeIn>
    </>
  );
}
