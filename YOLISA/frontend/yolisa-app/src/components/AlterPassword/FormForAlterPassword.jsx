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

export default function FormForAlterPassword() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
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
            Alterar a senha
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
            Confirme inicialmente o código enviado para o seu email
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
          <FormControl isInvalid={errors.codigo}>
            <FormLabel
              htmlFor="codigo"
              fontWeight="550"
              color="yolisa.p"
              pl="1"
            >
              Código:
            </FormLabel>
            <Input
              id="codigo"
              color="yolisa.p"
              type="number"
              {...register("codigo", {
                required: "Código inválido",
                maxLength: 6,
              })}
            />
            <FormErrorMessage>
              {errors.codigo && errors.codigo.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl mt="1rem" isInvalid={errors.email}>
            <FormLabel htmlFor="email" fontWeight="550" color="yolisa.p" pl="1">
              Email:
            </FormLabel>
            <Input
              id="email"
              color="yolisa.p"
              type="email"
              {...register("email", {
                required: "Email inválido",
                maxLength: 6,
              })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl mt="1rem" isInvalid={errors.newpassword}>
            <FormLabel htmlFor="email" fontWeight="550" color="yolisa.p" pl="1">
              Palavra-passe:
            </FormLabel>
            <Input
              id="newpassword"
              color="yolisa.p"
              type="password"
              {...register("newpassword", {
                required: "Caracteres insuficientes",
                maxLength: 6,
              })}
            />
            <FormErrorMessage>
              {errors.newpassword && errors.newpassword.message}
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
              Alterar senha
            </Button>
          </FormControl>
        </FadeIn>
      </chakra.form>
    </Flex>
  );
}
