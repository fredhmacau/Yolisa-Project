import {
  Avatar,
  Badge,
  Box,
  Button,
  chakra,
  Flex,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import FadeIn from "../Landing/animetions/FadeIn";
import { Link as BrowserLink } from "react-router-dom";
export default function Profile() {
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
            <Flex w="full" direction="column" h="auto">
              <Flex
                w="full"
                direction="row"
                marginX="auto"
                maxWidth="400px"
                py="1"
                px="8"
                bg="#f8fafc"
                roundedTopLeft="md"
                roundedTopRight="md"
              >
                <Wrap mt="4">
                  <WrapItem>
                    <Avatar
                      ring="2"
                      ringColor="#f8fafc"
                      size="md"
                      name="Tapabana"
                    />
                  </WrapItem>
                </Wrap>
                <Flex direction="column">
                  <Text
                    mt="6"
                    color="yolisa.title"
                    fontSize="0.875rem"
                    fontWeight="medium"
                    lineHeight="1.2em"
                    px="3"
                  >
                    @tapa43
                  </Text>
                  <chakra.p
                    color="yolisa.title"
                    fontSize="0.75rem"
                    fontWeight="medium"
                    lineHeight="1.2em"
                    px="3"
                  >
                    tapabana materiais
                  </chakra.p>
                </Flex>
              </Flex>
              <Flex
                w="full"
                direction="column"
                marginX="auto"
                maxWidth={{ base: "400px" }}
                py="2"
                bg="#f8fafc"
                roundedBottomLeft="md"
                roundedBottomRight="md"
                px={{ base: "6" }}
              >
                <chakra.p
                  color="yolisa.title"
                  fontSize="0.75rem"
                  fontWeight="medium"
                  lineHeight="1.2em"
                  px="3"
                  noOfLines={4}
                >
                  Como uma plataforma com foco exclusivo a vendedores de
                  materiais escolares em angola, conheça quantos vendedores
                  estão reunidos aqui na nossa plataforma. Como uma plataforma
                  com foco exclusivo a vendedores de materiais escolares em
                  angola, conheça quantos vendedores estão reunidos aqui na
                  nossa plataforma.
                </chakra.p>

                <Box
                  pl={{ base: "3", md: 0 }}
                  w="full"
                  display="flex"
                  flexDirection="column"
                  alignItems={{ base: "start", md: "center" }}
                  justifyItems={{ base: "start", md: "center" }}
                  justifyContent={{ base: "start", md: "center" }}
                >
                  <Stack mt="2" direction={{ base: "column", md: "row" }}>
                    <Badge
                      p="1"
                      bgColor="#74777d"
                      textColor="yolisa.50"
                      fontSize="0.625rem"
                      variant="solid"
                      fontWeight="500"
                      rounded="md"
                    >
                      Luanda
                    </Badge>
                    <Badge
                      p="1"
                      fontSize="0.625rem"
                      fontWeight="500"
                      variant="solid"
                      bgColor="#74777d"
                      rounded="md"
                    >
                      924249645
                    </Badge>
                    <Badge
                      p="1"
                      fontSize="0.625rem"
                      fontWeight="500"
                      variant="solid"
                      bgColor="#74777d"
                      rounded="md"
                    >
                      NIF: 1223555645LA9
                    </Badge>
                  </Stack>

                  <Badge
                    w={{ base: "auto", md: "68%" }}
                    mx={{ base: 0, md: "3" }}
                    mt="2"
                    mb="2"
                    p="1"
                    bgColor="#74777d"
                    textColor="yolisa.50"
                    fontSize="0.625rem"
                    variant="solid"
                    fontWeight="500"
                    rounded="md"
                    textAlign={{ base: "left", md: "center" }}
                  >
                    fredhmacau1088@gmail.com
                  </Badge>
                </Box>
              </Flex>
            </Flex>
            <Box w="full" maxWidth="400px" marginX="auto">
              <BrowserLink to="/acount-salesman/edit-profile">
                <Button
                  mt="1.4rem"
                  _hover={{ bg: "yolisa.button", color: "yolisa.50" }}
                  bg="yolisa.button"
                  color="yolisa.50"
                  type="button"
                  w="full"
                >
                  Editar informações do Perfil
                </Button>
              </BrowserLink>
              <BrowserLink to="/acount-salesman/edit-contact">
                <Button
                  mt="0.4rem"
                  _hover={{ bg: "#04124a", color: "yolisa.50" }}
                  bg="#04124a"
                  color="yolisa.50"
                  type="button"
                  w="full"
                >
                  Editar meus contactos
                </Button>
              </BrowserLink>
            </Box>
          </Flex>
        </Flex>
      </FadeIn>
    </>
  );
}
