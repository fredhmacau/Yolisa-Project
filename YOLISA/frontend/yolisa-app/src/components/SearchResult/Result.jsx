import {
  Badge,
  HStack,
  Image,
  Box,
  Flex,
  Text,
  VStack,
  chakra,
} from "@chakra-ui/react";

import {useNavigate} from "react-router-dom";
import useHttp from "../../Hooks/useHttp";
export default function Result({
  imageProduct,
  productName,
  salesmanName,
  provinceName,
  phoneNumber,
  price,
  idSalesman,
  descProduct,
  postId
}) {
  const { registerViewsInPost} = useHttp();
  const navigate = useNavigate();
  const registerViews = () => {
    const result = registerViewsInPost(idSalesman);
    result.then((resp) => {
      if (resp.status === 200) {
        navigate(`/info-salesman/${idSalesman}/${postId}`, { replace: true });
      }
    });
  };
  return (
    


    <>
      <Flex
        w={{ base: "full", md: "540px" }}
        direction={{ base: "column", md: "row" }}
        marginX="auto"
        
        bg="#f8fafc"
        rounded="md"
        mt="1rem"
      >
        <Box w={{ base: "100%", md: "40%" }} roundedLeft="md" p="3">
          <Image
            src={imageProduct}
            w="full"
            h="10rem"
            rounded="md"
            objectFit="cover"
          />
        </Box>
        <Flex
          w={{ base: "100%", md: "60%" }}
          roundedRight="md"
          direction="row"
          justifyContent="space-between"
        >
          <Box w="full">
            <VStack
              display="flex"
              px="2"
              align="flex-start"
              justifyContent="flex-start"
              mt="3"
              w="full"
            >
              <Flex direction="column" justifyContent="space-between" w="full">
                
                  <Text
                    color="yolisa.title"
                    fontSize="1.125rem"
                    fontWeight="medium"
                    lineHeight="1em"
                    cursor="pointer"
                    onClick={registerViews}
                  >
                    {productName}
                  </Text>
                
                
                  <Text
                    mt="2"
                    color="yolisa.title"
                    fontSize="0.875rem"
                    fontWeight="light"
                    lineHeight="1em"
                    cursor="pointer"
                    onClick={registerViews}
                  >
                    {salesmanName}
                  </Text>
                
              </Flex>

              <HStack>
                <Badge
                  px="1"
                  bgColor="#1b2342"
                  textColor="yolisa.50"
                  fontSize="0.625rem"
                  variant="solid"
                  fontWeight="500"
                  rounded="sm"
                >
                  {provinceName}
                </Badge>
                <Badge
                  px="1"
                  fontSize="0.625rem"
                  fontWeight="500"
                  variant="solid"
                  bgColor="#74777d"
                >
                  {phoneNumber}
                </Badge>
                <Badge
                  px="1"
                  fontSize="0.625rem"
                  fontWeight="500"
                  variant="solid"
                  bgColor="#74777d"
                >
                  {price}kz
                </Badge>
              </HStack>
              <chakra.p
                mt="2"
                color="yolisa.p"
                w="full"
                fontSize="0.75rem"
                textAlign="left"
                lineHeight="1.2em"
                maxWidth={{ base: "400px", md: "250px" }}
                fontWeight="300"
                noOfLines="5"
                pb="4"
              >
                {descProduct}
              </chakra.p>
            </VStack>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
