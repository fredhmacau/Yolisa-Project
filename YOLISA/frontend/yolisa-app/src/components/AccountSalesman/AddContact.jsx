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
import bannerInfo from "../../assets/icons/People buying school supplies-amico.svg";
import NextsForAddInfo from "./NextsForAddInfo";
import ProgressNext from "./ProgressNext";
import { useState, } from "react";
import { useForm } from "react-hook-form";
import FadeIn from "../Landing/animetions/FadeIn";
import useHttp from "../../Hooks/useHttp";
import { useNavigate } from "react-router-dom";
import { Textarea } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import provinces from "./data_local";

export default function AddContact() {
  const [error, setError] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({defaultValues:{
      provinceFocus:"Luanda"
  }});
  const {registerContact} = useHttp();
  const navigate = useNavigate();

  const onRegisterContact = async function (values) {
    const result= registerContact(values);
    await result.then((resp)=>{
      if (resp.status === 201) {
        navigate("/acount-salesman/config/add-map");
      }
    }).catch((err)=>{setError(true)});
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
            <Image src={bannerInfo} p="6" w="full" h="33.8125rem" />
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
                Adicionar contactos!
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
                Adicione contactos para o seu público-alvo obter mais
                informações sobre o seu estabelecimento.
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
                        Verifique os dados inseridos e tente novamente.
                      </AlertDescription>
                    </Flex>
                  </Alert>
                </Flex>
              )}
              <chakra.form
                onSubmit={handleSubmit(onRegisterContact)}
                maxWidth={{ base: "1000px", md: "500px" }}
                mt="1.6rem"
                rounded="md"
                shadow="md"
                w={{ base: "100%", md: "60%" }}
                h="auto"
                bg="#ffffff"
                p="8"
              >
                <FadeIn>
                  <FormControl isInvalid={errors.phoneNumber}>
                    <FormLabel
                      htmlFor="phoneNumber"
                      fontWeight="550"
                      color="yolisa.p"
                      pl="1"
                    >
                      Número de telefone:
                    </FormLabel>
                    <Input
                      id="phoneNumber"
                      color="yolisa.p"
                      type="tel"
                      {...register("phoneNumber", {
                        required: "Número inválido",
                        maxLength: 9,
                        pattern: "9[0-9]{8}",
                      })}
                    />
                    <FormErrorMessage>
                      {errors.phoneNumber && errors.phoneNumber.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl mt="1rem">
                    <FormLabel
                      htmlFor="provinceFocus"
                      fontWeight="550"
                      color="yolisa.p"
                      pl="1"
                    >
                      Província:
                    </FormLabel>
                    <Select
                      placeholder="Luanda"
                      {...register("provinceFocus")}
                      id="provinceFocus"
                      color="yolisa.p"
                      defaultValue="Luanda"
                    >
                      {provinces.map((province,i) => (
                        <option key={i} value={`${province}`}>
                          {province}
                        </option>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl
                    color="yolisa.p"
                    mt="1rem"
                    isInvalid={errors.descLocation}
                  >
                    <FormLabel pl="1" htmlFor="descLocation">
                      Descrever localização:
                    </FormLabel>
                    <Textarea
                      id="descLocation"
                      maxHeight="100"
                      maxWidth="full"
                      {...register("descLocation", { required: true })}
                      isRequired
                    ></Textarea>
                    <FormErrorMessage>
                      {errors.descLocation && errors.descLocation.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl>
                    <Button
                      mt="1rem"
                      _hover={{ bg: "yolisa.button", color: "yolisa.50" }}
                      bg="yolisa.button"
                      color="yolisa.50"
                      type="submit"
                      w="full"
                      isLoading={isSubmitting}
                    >
                      Adicionar contactos
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
