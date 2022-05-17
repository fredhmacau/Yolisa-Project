import {
  Stack,
  chakra,
  Text,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Image,
  Flex,
  VStack,
} from "@chakra-ui/react";
import bannerInfo from "../../assets/icons/People buying school supplies-rafiki.svg";
import NextsForAddInfo from "./NextsForAddInfo";
import ProgressNext from "./ProgressNext";
import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import FadeIn from "../Landing/animetions/FadeIn";
import { VisuallyHidden } from "@chakra-ui/react";
import { Wrap } from "@chakra-ui/react";
import { WrapItem } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import useHttp from "../../Hooks/useHttp";
import { useNavigate } from "react-router-dom";

export default function AddImage() {
  const [error, setError] = useState(false);
  const [salesman, setSalesman] = useState("");
  const [picture,setPicture]=useState('')
  const [imageData,setImageData]=useState(null)
  const btnSubmit=useRef(null)
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const { getSalesmanInfo,registerImagem } = useHttp();
  const navigate=useNavigate()
  const CheckFile=e=>{
   if (e.target.files[0]){
      setImageData(e)
      btnSubmit.current.removeAttribute("disabled");
      setPicture(URL.createObjectURL(e.target.files[0]))
   }

  }
  const onPostImage = async function (values) {
    if (imageData!= null){
    const response=registerImagem(imageData)
    await response.then((resp)=>{
      if (resp.status===201){
        navigate("/acount-salesman/config/add-contact");
      }
    }).catch((error)=>setError(true))
  }
  };
  useEffect(() => {
    const result = getSalesmanInfo();
    result.then((resp) => {
      if (resp.status === 200) {
        setSalesman(`${resp.data.business_name}`);
      }
    });
  },[getSalesmanInfo]);

  return (
    <>
      <Flex maxH="100vh" bg="yolisa.button">
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
            <Image src={bannerInfo} p="6" w="full" h="33.8125rem" />
          </Stack>
        </Flex>
        <Flex
          bg="yolisa.bg"
          h={{ base: "auto", lg: "100vh" }}
          w={{ base: "100%", lg: "50%" }}
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
            <ProgressNext colorProgress="#a1a5b4c7" />
            <NextsForAddInfo
              bgNext="#a1a5b4c7"
              numberText={2}
              colorNext="yolisa.50"
            />
            <ProgressNext colorProgress="#a1a5b4c7" />
            <NextsForAddInfo
              bgNext="#a1a5b4c7"
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
                Adicionar uma imagem!
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
                Adicione uma imagem a sua conta vendedor para o seu público-alvo
                reconhecer facilmente o seu estabelecimento.
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
                      <AlertTitle>Dados inválidos</AlertTitle>
                      <AlertDescription>
                      Formato ou tamanho da imagem não suportada
                      </AlertDescription>
                    </Flex>
                  </Alert>
                </Flex>
              )}
              <chakra.form
                onSubmit={handleSubmit(onPostImage)}
                maxWidth={{ base: "1000px", md: "500px" }}
                mt="1.6rem"
                rounded="md"
                shadow="md"
                w={{ base: "100%", md: "60%" }}
                h="auto"
                bg="#ffffff"
                p="8"
                marginX="auto"
                onChange={CheckFile}
              >
                <FadeIn>
                  <Flex w="full" marginX="auto" mb="4">
                    <Wrap mt="4" marginX="auto">
                      <WrapItem>
                        <Avatar
                          ring="2"
                          ringColor="#f8fafc"
                          size="2xl"
                          src={picture}
                          name={`${salesman}`}
                        />
                      </WrapItem>
                    </Wrap>
                  </Flex>
                  <FormControl isInvalid={errors.imageSalesman}>
                    <FormLabel
                      htmlFor="imageSalesman"
                      fontWeight="550"
                      color="#6783f9"
                      pl="1"
                      cursor="pointer"
                      textAlign="center"
                    >
                      Carregar Imagem
                      <VisuallyHidden>
                        <Input
                          id="imageSalesman"
                          color="yolisa.p"
                          type="file"
                          
                          accept="image/*"
                          {...register("imageSalesman", {
                            required: "Ficheiro insuportável",
                          })}
                        />
                      </VisuallyHidden>
                    </FormLabel>
                    <FormErrorMessage>
                      {errors.imageSalesman && errors.imageSalesman.message}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl>
                    <Button
                      mt="1.4rem"
                      _hover={{ bg: "yolisa.button", color: "yolisa.50" }}
                      bg="yolisa.button"
                      color="yolisa.50"
                      type="submit"
                      w="full"
                      isLoading={isSubmitting}
                      disabled
                      ref={btnSubmit}
                    >
                      Adicionar imagem
                    </Button>
                  </FormControl>
                </FadeIn>
              </chakra.form>
            </Flex>
            {/*  */}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
