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
  Wrap,
  WrapItem,
  Avatar,
  VisuallyHidden,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import FadeIn from "../Landing/animetions/FadeIn";

export default function EditProfile() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  function onEditProfile(values) {
    console.log(values);
  }

  return (
    <Flex w="full" h="100vh" justifyContent={{base:"center",lg:"normal"}} direction="column" align="center" bg="#f8fafc">
      <VStack
        w="full"
        mt={{ base: "2rem",lg:"2.5rem" }}
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
            Editar o seu perfil
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
            Podes alterar as informações do seu perfil
          </chakra.p>
        </FadeIn>
      </VStack>
      <chakra.form
        maxWidth={{ base: "1000px", md: "500px" }}
        mt="1.6rem"
        roundedTopLeft="md"
        roundedTopRight="md"
        shadow="md"
        w={{ base: "100%", md: "60%" }}
        h="auto"
        bg="#ffffff"
        p="8"
      >
        <FadeIn>
          <Flex
            w="full"
            align="center"
            direction="column"
            justifyContent="center"
            marginX="auto"
          >
            <Wrap mt="-4">
              <WrapItem>
                <Avatar
                  ring="2"
                  ringColor="#f8fafc"
                  size="xl"
                  name="Tapabana"
                />
              </WrapItem>
            </Wrap>
            <FormControl>
              <FormLabel
                htmlFor="fileImg"
                fontWeight="550"
                color="#6783f9"
                fontSize="0.75rem"
                textAlign="center"
                mt="0.4rem"
                cursor="pointer"
              >
                Alterar foto de perfil
                <VisuallyHidden>
                  <Input type="file" id="fileImg" accept="image/*" name="fileImg" isRequired />
                </VisuallyHidden>
              </FormLabel>
            </FormControl>
          </Flex>
        </FadeIn>
      </chakra.form>
      <chakra.form
        maxWidth={{ base: "1000px", md: "500px" }}
        roundedBottomRight="md"
        roundedBottomLeft="md"
        shadow="md"
        w={{ base: "100%", md: "60%" }}
        h="auto"
        bg="#ffffff"
        p="8"
        mt="-3.8rem"
        onSubmit={handleSubmit(onEditProfile)}
      >
        <FadeIn>
          <FormControl isInvalid={errors.username}>
            <FormLabel
              htmlFor="username"
              fontWeight="550"
              color="yolisa.p"
              pl="1"
            >
              Nome de usuário:
            </FormLabel>
            <Input
              id="username"
              color="yolisa.p"
              type="text"
              {...register("username", {
                required: "Nome de usuário inválido",
                minLength: 4,
              })}
            />
            <FormErrorMessage>
              {errors.username && errors.username.message}
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
          <FormControl color="yolisa.p" mt="1rem" isInvalid={errors.desc}>
            <FormLabel pl="1" htmlFor="desc">
              Descrição da empresa:
            </FormLabel>
            <Textarea
              id="desc"
              maxHeight="100"
              maxWidth="full"
              {...register("desc", { required: true })}
              isRequired
            ></Textarea>
            <FormErrorMessage>
              {errors.desc && errors.desc.message}
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
              Atualizar informações
            </Button>
          </FormControl>
        </FadeIn>
      </chakra.form>
    </Flex>
  );
}
