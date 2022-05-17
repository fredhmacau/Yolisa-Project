import {
  Flex,
  Container,
  Box,
  Text,
  VStack,
  Image,
  chakra
} from "@chakra-ui/react";
import FadeIn from "../Landing/animetions/FadeIn";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Badge } from "@chakra-ui/react";

export default function InfoProduct({ idPost, price, descProduct, imageProduct, markers }) {
  return (
    <>
      <Flex w="full" h="full" mt="1rem">
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
                    textAlign="left"
                    mb="0.4rem"
                  >
                    Sobre o material
                  </Text>
                </VStack>
                <FadeIn>
                  <Flex w="full">
                    <Flex w="full" direction="column" h="auto">
                      <Flex
                        w="full"
                        direction="column"
                        marginX="auto"
                        maxWidth="800px"
                        py="2"
                        rounded="md"
                      >
                        <Badge
                          textAlign="center"
                          px="2"
                          py="2"
                          bgColor="#1b2342"
                          textColor="yolisa.50"
                          fontSize="0.75rem"
                          variant="solid"
                          fontWeight="500"
                          w="165px"
                          mb="3"
                        >
                          Preço: {price}kz
                        </Badge>
                        
                        <Box
                          mt="4"
                          w={{ base: "100%" }}
                          display="flex"
                          align="flex-start"
                          flexDirection="column"
                          mb="1rem"
                          justifyContent={{ base: "flex-start" }}
                        >
                          <Image
                            
                            src={imageProduct}
                            objectFit="cover"
                            w="14.5rem"
                            h="12.5rem"
                          />
                          <chakra.p
                            mt="1"
                            color="yolisa.title"
                            fontSize="0.75rem"
                            fontWeight="light"
                            lineHeight="1.2em"
                            noOfLines={4}
                            fontStyle="italic"
                          >
                            Imagem do material
                          </chakra.p>
                        </Box>
                        <chakra.p
                          color="yolisa.title"
                          fontSize="0.975rem"
                          fontWeight="medium"
                          lineHeight="1.2em"
                          noOfLines={4}
                        >
                          {descProduct}.
                        </chakra.p>
                      </Flex>
                    </Flex>
                  </Flex>
                </FadeIn>
                <FadeIn>
                  {/*  */}
                  <Flex
                    w="full"
                    direction="column"
                    maxWidth="800px"
                    py="2"
                    rounded="md"
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
                        textAlign="left"
                        mb="0.4rem"
                      >
                        Localização do estabelecimento
                      </Text>
                    </VStack>
                    <Flex
                      w="full"
                      maxWidth="100%"
                      rounded="md"
                      marginX="auto"
                      h="25rem"
                      mb="1rem"
                      maxHeight="25rem"
                    >
                      <MapContainer
                        style={{ width: "100%", height: "100%" }}
                        center={[markers[0], markers[1]]}
                        zoom={16}
                      >
                        <TileLayer
                          
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[markers[0], markers[1]]}>
                          <Popup>Capabana</Popup>
                        </Marker>
                      </MapContainer>
                    </Flex>
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
