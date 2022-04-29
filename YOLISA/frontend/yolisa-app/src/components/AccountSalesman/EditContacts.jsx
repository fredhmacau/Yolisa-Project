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
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import FadeIn from "../Landing/animetions/FadeIn";
import {useNavigate} from "react-router-dom"

export default function EditContacts() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const navigate=useNavigate();
  function onSend(values) {
    console.log(values);
    navigate("/acount-salesman");

  }
  const handlerButton=()=>{
    navigate("/acount-salesman/edit-contact/alter-map");
  }
  return (
    <>
      <Flex w="full" h="100vh" justifyContent={{base:"center",lg:"normal"}} direction="column" align="center" bg="#f8fafc">
        <VStack
          w="full"
          mt={{base:"2rem",lg:"2.5rem"}}
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
        <chakra.form
          onSubmit={handleSubmit(onSend)}
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
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </FormControl>

            <FormLabel
              htmlFor="cityFocus"
              fontWeight="550"
              color="yolisa.p"
              pl="1"
              mt="1rem"
            >
              Município:
            </FormLabel>
            <Select
              placeholder="cacuaco"
              {...register("cityFocus")}
              id="cityFocus"
              color="yolisa.p"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>

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
                Atualizar
              </Button>
              <Button
                
                mt="0.2rem"
                _hover={{ bg: "yolisa.bg", color: "yolisa.50" }}
                bg="yolisa.bg"
                color="yolisa.50"
                type="button"
                w="full"
                onClick={handlerButton}

              >
                Alterar endereço
              </Button>
            </FormControl>
          </FadeIn>
        </chakra.form>
      </Flex>
    </>
  );
}
