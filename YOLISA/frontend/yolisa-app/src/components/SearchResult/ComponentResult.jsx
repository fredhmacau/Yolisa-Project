import {
  Container,
  Flex,
  chakra,
  Box,
  InputGroup,
  InputRightElement,
  Input,
  IconButton
} from "@chakra-ui/react";
import banner from "../../assets/imgs/banner5.png";
import {  useParams } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import FadeIn from "../Landing/animetions/FadeIn";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function ComponentResult() {
  const params = useParams();
  const navigate =useNavigate();
  const {register,handleSubmit}=useForm();
 
  function onSearch(values){
      
      navigate(`/search=${values.query}`)

  }

  return (
    <>
      <Flex
        w="full"
        h="18.75rem"
        bgImage={banner}
        bgAttachment="fixed"
        bgPos="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        bgClip="unset"
      >
        <Flex w="full" h="full" bg="#04091edb">
          <Flex
            w="full"
            maxWidth="1100px"
            justifyContent="center"
            marginX="auto"
            direction="column"
          >
            <Container w="full" maxWidth="800px" marginX="auto">
              <Flex
                w="full"
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Box w="full" maxW="800px" marginX="auto">
                  <chakra.form onSubmit={handleSubmit(onSearch)}>
                    <FadeIn>
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
                          defaultValue={params.query}
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
                    </FadeIn>
                  </chakra.form>
                </Box>
              </Flex>
            </Container>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
