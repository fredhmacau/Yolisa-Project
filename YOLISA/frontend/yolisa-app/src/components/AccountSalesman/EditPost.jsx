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
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import FadeIn from "../Landing/animetions/FadeIn";
import { useParams, useNavigate } from "react-router-dom";
import useHttp from "../../Hooks/useHttp";
import { useState } from "react";
import { Alert } from "@chakra-ui/react";
import { AlertIcon } from "@chakra-ui/react";
import { AlertTitle } from "@chakra-ui/react";
import { AlertDescription } from "@chakra-ui/react";
export default function EditPost() {
  const [error, setError] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const params = useParams();
  const { updatePosted } = useHttp();
  const navigate = useNavigate();
  async function onEditPost(values) {
    const result = updatePosted(values, params.id);
    await result
      .then((resp) => {
        if (resp.status === 200) {
          navigate("/acount-salesman",{replace:true});
        }
      })
      .catch(() => {
        setError(true);
      });
  }

  return (
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
        mt={{ base: "2rem", lg: "3.5rem" }}
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
            Editar publicação
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
            Edite e atualize a sua publicação na YOLISA
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
                Por favor, verifique os dados inseridos e tente novamente.
              </AlertDescription>
            </Flex>
          </Alert>
        </Flex>
      )}
      <chakra.form
        maxWidth={{ base: "1000px", md: "500px" }}
        roundedBottomRight="md"
        roundedBottomLeft="md"
        shadow="md"
        w={{ base: "100%", md: "60%" }}
        h="auto"
        bg="#ffffff"
        p="8"
        mt="2rem"
        onSubmit={handleSubmit(onEditPost)}
      >
        <FadeIn>
          <FormControl isInvalid={errors.productName}>
            <FormLabel
              htmlFor="productName"
              fontWeight="550"
              color="yolisa.p"
              pl="1"
            >
              Nome do produto:
            </FormLabel>
            <Input
              id="productName"
              color="yolisa.p"
              type="text"
              {...register("productName", {
                required: "Valores inválidos",
                minLength: 4,
              })}
            />
            <FormErrorMessage>
              {errors.productName && errors.productName.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl mt="1rem" isInvalid={errors.price}>
            <FormLabel htmlFor="email" fontWeight="550" color="yolisa.p" pl="1">
              Preço:
            </FormLabel>
            <Input
              id="price"
              color="yolisa.p"
              type="text"
              {...register("price", {
                required: "Valores inválidos",
                maxLength: 6,
              })}
            />
            <FormErrorMessage>
              {errors.price && errors.price.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl
            color="yolisa.p"
            mt="1rem"
            isInvalid={errors.descProduct}
          >
            <FormLabel pl="1" htmlFor="desc">
              Descrição do produto:
            </FormLabel>
            <Textarea
              id="descProduct"
              maxHeight="100"
              maxWidth="full"
              {...register("descProduct", { required: true })}
              isRequired
            ></Textarea>
            <FormErrorMessage>
              {errors.descProduct && errors.descProduct.message}
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
              Atualizar publicação
            </Button>
          </FormControl>
        </FadeIn>
      </chakra.form>
    </Flex>
  );
}
