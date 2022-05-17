import {
  Flex,
  VStack,
  chakra,
  Text,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Select,
  Textarea,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import FadeIn from "../Landing/animetions/FadeIn";
import {useNavigate} from "react-router-dom"
import provinces from "./data_local";
import {useState} from "react";
import useHttp from "../../Hooks/useHttp";

export default function EditContacts() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const [error, setError] = useState(false);
  const navigate=useNavigate();
  const {upContact}=useHttp()
  async function onUpdateContact(values) {
    
     const result = upContact(values);
     await result
       .then((resp) => {
         if (resp.status === 200) {
           navigate("/acount-salesman");
         }
       })
       .catch((err) => {
         setError(true);
       });

  }
  const handlerButton=()=>{
    navigate("/acount-salesman/edit-contact/alter-map");
  }
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
              Atualizar contactos
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
              Altera e atualiza os contactos da sua conta
            </chakra.p>
          </FadeIn>
        </VStack>
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
          onSubmit={handleSubmit(onUpdateContact)}
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
                {provinces.map((province, i) => (
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
                Atualizar contactos
              </Button>
              <Button
                mt="0.6rem"
                _hover={{ bg: "yolisa.bg", color: "yolisa.50" }}
                bg="yolisa.bg"
                color="yolisa.50"
                type="button"
                onClick={handlerButton}
                w="full"
                
              >
                Alterar cordenadas
              </Button>
            </FormControl>
          </FadeIn>
        </chakra.form>
      </Flex>
    </>
  );
}
