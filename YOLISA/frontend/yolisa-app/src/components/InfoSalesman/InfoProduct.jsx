import {
  Flex,
  Container,
  Box,
  Text,
  VStack,
  Tabs,
  TabPanel,
  TabList,
  Tab,
  TabPanels,
  Image,
  chakra
} from "@chakra-ui/react";
import FadeIn from "../Landing/animetions/FadeIn";
import example from "../../assets/imgs/example2.jpg";
import { MapContainer, TileLayer } from "react-leaflet";

export default function InfoProduct() {
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
            bg="#e8effb"
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
                <VStack
                  w="full"
                  mt="1rem"
                  marginX="auto"
                  display="flex"
                  justifyContent="center"
                  mb="4"
                >
                  <Text
                    color="yolisa.title"
                    fontSize="1.375rem"
                    fontWeight="medium"
                    lineHeight="1em"
                    textAlign="center"
                    mb="0.4rem"
                  >
                    Sobre o produto ou material!
                  </Text>
                </VStack>
                <FadeIn>
                  {/*  */}
                  <Flex
                    w="full"
                    direction="row"
                    maxWidth="1100px"
                    py="2"
                    bg="#f8fafc"
                    rounded="md"
                  >
                    <Tabs w="full">
                      <Container w="full" maxWidth="600px" marginX="auto">
                        <TabList
                          w="full"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          marginX="auto"
                        >
                          <Tab>Imagem</Tab>
                          <Tab>Preço e descrição</Tab>
                          <Tab>Localização</Tab>
                        </TabList>
                      </Container>

                      <TabPanels>
                        <TabPanel
                          w="full"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          p="6"
                        >
                          <Image src={example} rounded="md" />
                        </TabPanel>
                        <TabPanel>
                          <Flex w="full" direction="column" h="auto">
                            <Flex
                              w="full"
                              direction="column"
                              marginX="auto"
                              maxWidth="800px"
                              py="2"
                              px="8"
                              bg="#f8fafc"
                              rounded="md"
                            >
                              <chakra.p
                                color="yolisa.title"
                                fontSize="1.275rem"
                                fontWeight="medium"
                                lineHeight="1.2em"
                                px="3"
                                noOfLines={4}
                                mb="0.6rem"
                              >
                                Preço:1000kz
                              </chakra.p>

                              <chakra.p
                                color="yolisa.title"
                                fontSize="0.875rem"
                                fontWeight="medium"
                                lineHeight="1.2em"
                                px="3"
                                noOfLines={4}
                              >
                                Como uma plataforma com foco exclusivo a
                                vendedores de materiais escolares em angola,
                                conheça quantos vendedores estão reunidos aqui
                                na nossa plataforma. Como uma plataforma com
                                foco exclusivo a vendedores de materiais
                                escolares em angola, conheça quantos vendedores
                                estão reunidos aqui na nossa plataforma.
                              </chakra.p>
                            </Flex>
                          </Flex>
                        </TabPanel>
                        <TabPanel>
                          <Flex
                            w="full"
                            maxWidth="100%"
                            rounded="md"
                            marginX="auto"
                            h="25rem"
                            maxHeight="25rem"
                          >
                            <MapContainer
                              style={{ width: "100%", height: "100%" }}
                              center={[-11.935211, 18.512743]}
                              zoom={8}
                            >
                              <TileLayer url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png" />
                            </MapContainer>
                          </Flex>
                        </TabPanel>
                      </TabPanels>
                    </Tabs>
                  </Flex>
                </FadeIn>
                {/*  */}
              </Box>
            </Flex>
          </Container>
        </Flex>
      </Flex>
    </>
  );
}
