import {
  Box,
  chakra,
  Container,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import banner from "../../assets/imgs/banner5.png";
import { AiOutlineSearch } from "react-icons/ai";
import FadeIn from "./animetions/FadeIn";
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom";

export default function Hero() {
  const { handleSubmit, register } = useForm();
  const navigate=useNavigate();
  function onSearch(values){
    console.log(values);
    navigate(`/search=${values.query}`)
  };

  return (
    <>
      <Flex
        w="full"
        h="33.4375rem"
        bgImage={banner}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgAttachment="fixed"
        bgClip="unset"
      >
        <Flex w="full" h="full" bg="#04091edb">
          <Flex w="full" maxW="1100px" justifyContent="center" marginX="auto">
            <Container maxW="800px" w="full" marginX="auto">
              <FadeIn>
                <Box>
                  <Text
                    color="yolisa.50"
                    fontSize={{ base: "2rem", md: "3rem" }}
                    mt={{ base: "2rem", sm: "8rem" }}
                    textAlign="center"
                    lineHeight="1.2em"
                    fontWeight="extrabold"
                  >
                    Conecta-se a vendedores de materiais escolares
                  </Text>
                  <chakra.p
                    mt="4"
                    color="yolisa.50"
                    w="full"
                    maxW="600px"
                    marginX="auto"
                    textAlign="center"
                    lineHeight="1.2em"
                    letterSpacing="wide"
                  >
                    Pesquise o material escolar que necessitas e obtem
                    informações sobre lojas,estabelecimentos,tabacarias que o
                    vendem de acordo com o teu bolso e perto de sí.
                  </chakra.p>
                  <Box w="full" maxW="600px" marginX="auto">
                    <chakra.form onSubmit={handleSubmit(onSearch)}>
                      <InputGroup w="full" size="md" mt="5" marginX="auto">
                        <Input
                          pr="4.5rem"
                          color="yolisa.title"
                          bg="yolisa.inputPrimary"
                          rounded="md"
                          px="2"
                          _focus={{ ringColor: "#ccc" }}
                          variant="flushed"
                          type="text"
                          {...register("query", { required: true })}
                        />
                        <InputRightElement
                          roundedBottomRight="md"
                          roundedTopRight="md"
                          w="4rem"
                        >
                          <IconButton
                            type="submit"
                            bg="yolisa.buttonSecondary"
                            roundedBottomLeft="none"
                            roundedTopLeft="none"
                            variant="ghost"
                            color="yolisa.50"
                            fontSize="2xl"
                            _hover={{
                              bg: "yolisa.buttonSecondary",
                              color: "yolisa.50",
                            }}
                            w="full"
                            h="full"
                            icon={<AiOutlineSearch />}
                          />
                        </InputRightElement>
                      </InputGroup>
                    </chakra.form>
                  </Box>
                </Box>
              </FadeIn>
            </Container>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
