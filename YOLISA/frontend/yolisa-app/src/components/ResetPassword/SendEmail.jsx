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
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import FadeIn from "../Landing/animetions/FadeIn";


export default function SendEmail() {
    
    const {
      handleSubmit,
      register,
      formState: { errors, isSubmitting },
    } = useForm();
    function onSend(values) {
      console.log(values);
     
    }

  return (
    <Flex w="full" h="100vh" direction="column" align="center" bg="#f8fafc">
      <VStack
        w="full"
        mt="7.5rem"
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
            Confirme o seu email
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
            Insira o email associado a sua conta para alteração da senha
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
          <FormControl isInvalid={errors.username}>
            <FormLabel htmlFor="email" fontWeight="550" color="yolisa.p" pl="1">
              Email:
            </FormLabel>
            <Input
              id="email"
              color="yolisa.p"
              type="email"
              {...register("email", {
                required: "Email inválido",
              })}
            />
            <FormErrorMessage>
              {errors.username && errors.username.message}
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
            >
              Enviar
            </Button>
          </FormControl>
        </FadeIn>
      </chakra.form>
    </Flex>
  );
}
