import { chakra, Flex, VStack, Text, Button } from "@chakra-ui/react";
import FadeIn from "../Landing/animetions/FadeIn";
import { MapContainer, TileLayer } from "react-leaflet";
import GetPosition from "./MarkerPositions";
import { useRef } from "react";
import useHttp from "../../Hooks/useHttp";
import {useNavigate} from "react-router-dom"
import { Link as BrowserLink } from "react-router-dom";

export default function EditMap() {
  const button = useRef(null);
  //dados da localizacao do vendedor
  //localizacao inicial do mapa
  const center = [-11.935211, 18.512743];
  const {updatePosition} =useHttp()
  const navigate=useNavigate();
  const handlerMarker = (positon) => {
    const markers = [];

    markers.push(...positon);
    const filtersPosition = markers.filter((values) => values !== null);
    if (filtersPosition.length > 0) {
      button.current.removeAttribute("disabled");
      const cordenates = [filtersPosition.slice(-1)];
      const result = updatePosition(cordenates[0][0]);
    }
   
    
  };

  return (
    <>
      <Flex
        w="full"
        h="100vh"
        justifyContent={{ base: "center", lg: "normal" }}
        direction="column"
        align="center"
        bg="#f8fafc"
      >
        <VStack
          w="full"
          mt={{ base: "2rem", lg: "2.5rem" }}
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
              Atualiza seu endereço
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
              Altera e atualiza a localização do seu estabelecimento
            </chakra.p>
          </FadeIn>
        </VStack>
        <Flex
          maxWidth={{ base: "1000px", md: "900px" }}
          mt="1.6rem"
          rounded="md"
          shadow="md"
          w={{ base: "100%", md: "90%" }}
          h="auto"
          bg="#ffffff"
          p="8"
          direction="column"
        >
          <FadeIn>
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
                center={center}
                zoom={8}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <GetPosition positions={handlerMarker} />
              </MapContainer>
            </Flex>

            <Flex w="full" justifyContent="center" align="center">
              <BrowserLink to="/acount-salesman">
                <Button
                  mt="1.4rem"
                  _hover={{ bg: "yolisa.button", color: "yolisa.50" }}
                  bg="yolisa.button"
                  color="yolisa.50"
                  type="button"
                  w="full"
                  ref={button}
                  marginX="auto"
                  disabled
                >
                  Concluir configurações
                </Button>
              </BrowserLink>
            </Flex>
          </FadeIn>
        </Flex>
      </Flex>
    </>
  );
}
