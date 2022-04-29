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

export default function EditPost() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  function onEditProfile(values) {
    console.log(values);
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
        onSubmit={handleSubmit(onEditProfile)}
      >
        <FadeIn>
          <FormControl isInvalid={errors.productName}>
            <FormLabel
              htmlFor="username"
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
          <FormControl color="yolisa.p" mt="1rem" isInvalid={errors.descProduct}>
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
