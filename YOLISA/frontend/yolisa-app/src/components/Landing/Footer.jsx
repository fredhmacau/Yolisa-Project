import { Box, chakra, Flex, HStack, IconButton, Text} from "@chakra-ui/react";
import {FaFacebookF,FaTwitter,FaInstagram} from "react-icons/fa"

export default function Footer(props){
    return (
      <Box w="full" bg="yolisa.bg" mt="7.5rem" {...props} >
        <Flex
          w="full"
          maxW="1100px"
          justifyContent="space-between"
          marginX="auto"
          px="4"
          py="4"
        >
          <Text color="yolisa.50" fontSize="1.75rem" fontWeight="500">
            YOLISA
          </Text>
          <HStack spacing="3">
            <chakra.a href="">
              <IconButton
                rounded="full"
                bg="yolisa.button"
                color="yolisa.50"
                size="sm"
                icon={<FaFacebookF />}
                _hover={{ color: "yolisa.button", bg: "yolisa.50" }}
              />
            </chakra.a>
            <chakra.a href="">
              <IconButton
                rounded="full"
                bg="yolisa.button"
                color="yolisa.50"
                size="sm"
                icon={<FaInstagram />}
                _hover={{ color: "yolisa.button", bg: "yolisa.50" }}
              />
            </chakra.a>
            <chakra.a href="">
              <IconButton
                rounded="full"
                bg="yolisa.button"
                color="yolisa.50"
                size="sm"
                icon={<FaTwitter />}
                _hover={{ color: "yolisa.button", bg: "yolisa.50" }}
              />
            </chakra.a>
          </HStack>
        </Flex>
      </Box>
    );
}