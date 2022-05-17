import {
  Stack,
  chakra,
  Text, 
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Image,
  Flex,
  VStack,
} from "@chakra-ui/react";
import bannerInfo from "../../assets/icons/Paper map-amico.svg";
import NextsForAddInfo from "./NextsForAddInfo";
import ProgressNext from "./ProgressNext";
import { useState, } from "react";
import FadeIn from "../Landing/animetions/FadeIn";
import useHttp from "../../Hooks/useHttp";
import { MapContainer, TileLayer } from "react-leaflet";
import GetPosition from "./MarkerPositions";
import { useRef } from "react";
import {Link as BrowserLink} from "react-router-dom";

export default function AddContact() {
  const [error, setError] = useState(false);
  const {registerPosition} = useHttp();
 
const button = useRef(null);
//dados da localizacao do vendedor
//localizacao inicial do mapa
const center = [-11.935211, 18.512743];
let filtersPosition=[]

const handlerMarker = (positon) => {
  const markers = [];

  markers.push(...positon);
  filtersPosition = markers.filter((values) => values !== null);
  if (filtersPosition.length > 0) {
    button.current.removeAttribute("disabled");
    const cordenates=[filtersPosition.slice(-1)]
    const result = registerPosition(cordenates[0][0]);
    
  }
  
};


  return (
    <>
      <Flex bg="yolisa.bg">
        <Flex
          bg="yolisa.bg"
          h={{ base: "auto", lg: "100vh" }}
          w={{ base: "100%", lg: "50%" }}
          display={{ base: "none", lg: "flex" }}
        >
          <Stack
            w="full"
            h="full"
            display="flex"
            align="center"
            justifyContent="center"
            direction={{ base: "column", lg: "row" }}
          >
            <Image src={bannerInfo} p="6" w="full" h="38.8125rem" />
          </Stack>
        </Flex>
        <Flex
          bg="yolisa.bg"
          h={{ base: "auto", lg: "auto" }}
          w={{ base: "100%" }}
          direction="column"
        >
          <Flex
            w="100%"
            h="auto"
            direction={{ base: "row" }}
            display="flex"
            align="center"
            justifyContent="center"
            p="8"
          >
            <NextsForAddInfo
              bgNext="yolisa.button"
              numberText={1}
              colorNext="yolisa.50"
            />
            <ProgressNext colorProgress="yolisa.button" />
            <NextsForAddInfo
              bgNext="yolisa.button"
              numberText={2}
              colorNext="yolisa.50"
            />
            <ProgressNext colorProgress="yolisa.button" />
            <NextsForAddInfo
              bgNext="yolisa.button"
              numberText={3}
              colorNext="yolisa.50"
            />
          </Flex>
          <Flex direction="column" marginX="auto" w="full" h="auto">
            <VStack>
              <Text
                color="yolisa.50"
                fontSize="2rem"
                fontWeight="semibold"
                lineHeight="1.2em"
                textAlign="center"
              >
                Adicionar cordenadas geográficas!
              </Text>
              <chakra.p
                mt="2"
                color="yolisa.50"
                w="full"
                maxW="500px"
                marginX="auto"
                textAlign="center"
                lineHeight="1.2em"
                letterSpacing="wide"
              >
                Adicione o endereço geográfico do seu estabelecimento, para o
                seu público-alvo facilmente localizar o seu estabelecimento.
              </chakra.p>
            </VStack>
            {/*  */}
            <Flex
              direction="column"
              w="full"
              justifyContent="center"
              align="center"
            >
              {error && (
                <Flex w="full" mt="2" maxW="500px">
                  <Alert
                    display="flex"
                    rounded="md"
                    status="error"
                    variant="solid"
                    justifyContent="center"
                  >
                    <Flex
                      direction="column"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <AlertIcon />
                      <AlertTitle>Ocorreu um erro!</AlertTitle>
                      <AlertDescription>
                        Ocorreu um erro no nosso servidor, por favor tente
                        novamente!
                      </AlertDescription>
                    </Flex>
                  </Alert>
                </Flex>
              )}
              <Flex
                maxWidth={{ base: "full" }}
                mt="0.6rem"
                rounded="md"
                shadow="md"
                w={{ base: "70%" }}
                h="auto"
                bg="yolisa.bg"
                marginX="auto"
                direction="column"
              >
                <FadeIn>
                  <Flex
                    w="90%"
                    rounded="md"
                    marginX="auto"
                    h="24rem"
                    maxHeight="24rem"
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
            {/*  */}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
