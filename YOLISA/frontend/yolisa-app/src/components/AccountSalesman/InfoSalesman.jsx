import {
  Avatar,
  Badge,
  Container,
  Flex,
  Text,
  Wrap,
  WrapItem,
  HStack
} from "@chakra-ui/react";
import banner from "../../assets/imgs/banner5.png";
import Controls from "./Controls";
import {  useState, useEffect} from "react";
import useHttp from "../../Hooks/useHttp";
import { Spinner } from "@chakra-ui/react";

export default function InfoSalesman() {
  const [salesman, setSalesman] = useState({});
  const [loading, setLoading] = useState(true);
  const { getSalesmanInfo } = useHttp();

  useEffect(() => {
      getSalesmanInfo().then((data) => {
        setSalesman({...data.data});
        setLoading(false);
      }).catch((err) => setLoading(true));
      
    },[]);

  return (
    <>
      {loading ? (
        <Flex
          w="full"
          h="full"
          mt="6rem"
          align="center"
          justifyContent="center"
        >
          <Spinner size="xl" />
        </Flex>
      ) : (
        <>
          <Flex
            w="full"
            h="18.75rem"
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
                <Container w="full" maxWidth="800px" marginX="auto">
                  <Flex
                    w="full"
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Wrap mt="-4">
                      <WrapItem>
                        <Avatar
                          ring="2"
                          ringColor="#f8fafc"
                          size="2xl"
                          src={`http://127.0.0.1:8000/api/v1/salesman/acount/${localStorage.getItem(
                            "token"
                          )}/img/get_img`}
                          name={`${salesman.business_name}`}
                        />
                      </WrapItem>
                    </Wrap>
                    <Text
                      mt="3"
                      color="yolisa.50"
                      fontSize="1.125rem"
                      fontWeight="medium"
                      lineHeight="1.2em"
                    >
                      {salesman.business_name}
                    </Text>
                    <HStack mt="2">
                      <Badge
                        py="1"
                        px="1"
                        bgColor="#424344"
                        textColor="yolisa.50"
                        fontSize="0.525rem"
                        variant="solid"
                        fontWeight="500"
                        rounded="sm"
                        
                      >
                        NIF: {salesman.nif}
                      </Badge>
                      {salesman.views != null ? (
                        <Badge
                          py="1"
                          px="1"
                          bgColor="#424344"
                          textColor="yolisa.50"
                          fontSize="0.525rem"
                          variant="solid"
                          fontWeight="500"
                          rounded="sm"
                          
                        >
                          Visualizações: {salesman.views}
                        </Badge>
                      ) : (
                        <></>
                      )}
                    </HStack>
                  </Flex>
                </Container>
              </Flex>
            </Flex>
          </Flex>
          <Controls />
        </>
      )}
    </>
  );
}
