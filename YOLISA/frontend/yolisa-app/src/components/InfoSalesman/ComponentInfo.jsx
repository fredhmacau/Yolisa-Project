import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Badge } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Flex, Container } from "@chakra-ui/react";
import banner from "../../assets/imgs/banner5.png";
import example from "../../assets/imgs/example2.jpg";
import AddInfoProduct from "./AddInfoProduct";
import InfoProduct from "./InfoProduct";

export default function ComponentInfo() {
  return (
    <>
      <Flex
        w="full"
        h={{ base: "36.4375rem", md: "21.75rem" }}
        bgImage={banner}
        bgAttachment="fixed"
        bgPos="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        bgClip="unset"
      >
        <Flex w="full" h="full" bg="#04091edb">
          <Flex
            w="full"
            maxWidth="1100px"
            justifyContent="center"
            marginX="auto"
            direction="column"
          >
            <Container
              w="full"
              bg="#f8fafc"
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
                  maxW="800px"
                  marginX="auto"
                  p="6"
                >
                  <Stack direction={{ base: "column", md: "row" }}>
                    <Box
                      w={{ base: "100%", md: "35%" }}
                      display="flex"
                      justifyContent={{ base: "center", md: "flex-end" }}
                      roundedLeft="md"
                    >
                      <Image
                        src={example}
                        rounded="md"
                        objectFit="cover"
                        w="12.5rem"
                        h="12.5rem"
                      />
                    </Box>
                    <Box
                      w={{ base: "100%", md: "65%" }}
                      pl="6"
                      roundedLeft="md"
                      display="flex"
                      justifyContent="start"
                      justifyItems="start"
                      alignItems="start"
                    >
                      <Stack
                        direction={{ base: "column", md: "row" }}
                        spacing={{base:4,md:10}}
                      >
                        <VStack w="full" spacing="3" alignItems="start">
                          <Box>
                            <Badge
                              rounded="md"
                              px="2"
                              bgColor="#1b2342"
                              textColor="yolisa.50"
                              fontSize="0.75rem"
                              variant="solid"
                              fontWeight="500"
                            >
                              NIF
                            </Badge>
                            <Text
                              color="yolisa.title"
                              fontSize="0.9rem"
                              fontWeight="medium"
                              as="h4"
                              lineHeight="0.8em"
                              pl="1"
                              mt="2"
                            >
                              4556655544
                            </Text>
                          </Box>
                          <Box>
                            <Badge
                              rounded="md"
                              px="2"
                              bgColor="#1b2342"
                              textColor="yolisa.50"
                              fontSize="0.75rem"
                              variant="solid"
                              fontWeight="500"
                            >
                              Email
                            </Badge>
                            <Text
                              color="yolisa.title"
                              fontSize="0.9rem"
                              fontWeight="medium"
                              as="h4"
                              lineHeight="0.8em"
                              pl="1"
                              mt="2"
                            >
                              angomaterial@gmail.com
                            </Text>
                          </Box>
                          <Box>
                            <Badge
                              px="2"
                              bgColor="#1b2342"
                              textColor="yolisa.50"
                              fontSize="0.75rem"
                              variant="solid"
                              fontWeight="500"
                              rounded="md"
                            >
                              Nome da empresa
                            </Badge>
                            <Text
                              color="yolisa.title"
                              fontSize="0.9rem"
                              fontWeight="medium"
                              as="h4"
                              lineHeight="0.8em"
                              pl="1"
                              mt="2"
                            >
                              Ango Material
                            </Text>
                          </Box>
                        </VStack>
                        <VStack w="full" spacing="3" alignItems="start">
                          <Box>
                            <Badge
                              rounded="md"
                              px="2"
                              bgColor="#1b2342"
                              textColor="yolisa.50"
                              fontSize="0.75rem"
                              variant="solid"
                              fontWeight="500"
                            >
                              Número de telefone
                            </Badge>
                            <Text
                              color="yolisa.title"
                              fontSize="0.9rem"
                              fontWeight="medium"
                              as="h4"
                              lineHeight="0.8em"
                              pl="1"
                              mt="2"
                            >
                              +244 924949494
                            </Text>
                          </Box>
                          <Box>
                            <Badge
                              rounded="md"
                              px="2"
                              bgColor="#1b2342"
                              textColor="yolisa.50"
                              fontSize="0.75rem"
                              variant="solid"
                              fontWeight="500"
                            >
                              Província
                            </Badge>
                            <Text
                              color="yolisa.title"
                              fontSize="0.9rem"
                              fontWeight="medium"
                              as="h4"
                              lineHeight="0.8em"
                              pl="1"
                              mt="2"
                            >
                              Luanda
                            </Text>
                          </Box>
                          <Box>
                            <Badge
                              rounded="md"
                              px="2"
                              bgColor="#1b2342"
                              textColor="yolisa.50"
                              fontSize="0.75rem"
                              variant="solid"
                              fontWeight="500"
                            >
                              Município/Bairro
                            </Badge>
                            <Text
                              color="yolisa.title"
                              fontSize="0.9rem"
                              fontWeight="medium"
                              as="h4"
                              lineHeight="0.8em"
                              pl="1"
                              mt="2"
                            >
                              Cacuaco
                            </Text>
                          </Box>
                        </VStack>
                      </Stack>
                    </Box>
                  </Stack>
                </Box>
              </Flex>
            </Container>
          </Flex>
        </Flex>
      </Flex>
      <AddInfoProduct/>
      <InfoProduct/>
    </>

  );
}
