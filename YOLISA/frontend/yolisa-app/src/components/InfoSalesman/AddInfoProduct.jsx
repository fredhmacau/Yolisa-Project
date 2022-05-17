import { Flex, Container, Box, Text, VStack, chakra } from "@chakra-ui/react";
import FadeIn from "../Landing/animetions/FadeIn";

export default function AddInfoProduct({ descSalesman }) {
  return (
    <>
      <Flex w="full" h="full" mt="2rem">
        <Flex
          w="full"
          maxWidth="1100px"
          justifyContent="center"
          marginX="auto"
          direction="column"
        >
          <Container
            w="full"
            rounded="md"
            h="auto"
            maxHeight="full"
            maxWidth="800px"
            marginX="auto"
            justifyContent="center"
            alignItems="center"
            display="flex"
          >
            <Flex
              w="full"
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                w="full"
                display="flex"
                flexDirection="column"
                maxW="650px"
                marginX="auto"
                px="2"
              >
                <VStack
                  w="full"
                  mt="1rem"
                  align="flex-start"
                  display="flex"
                  justifyContent="flex-start"
                  mb="2"
                >
                  <Text
                    color="yolisa.title"
                    fontSize="1.475rem"
                    fontWeight="550"
                    lineHeight="1em"
                    mb="1rem"
                  >
                    Sobre o estabelecimento
                  </Text>
                  {/*  */}
                  <FadeIn>
                    <Flex w="full">
                      <Flex w="full" direction="column" h="auto">
                        <Flex
                          w="full"
                          direction="row"
                          marginX="auto"
                          maxWidth="800px"
                          py="2"
                          rounded="md"
                        >
                          <chakra.p
                            color="yolisa.title"
                            fontSize="0.975rem"
                            fontWeight="medium"
                            lineHeight="1.2em"
                            noOfLines={4}
                          >
                            {descSalesman}.
                          </chakra.p>
                        </Flex>
                      </Flex>
                    </Flex>
                  </FadeIn>
                  {/*  */}
                </VStack>
              </Box>
            </Flex>
          </Container>
        </Flex>
      </Flex>
    </>
  );
}
