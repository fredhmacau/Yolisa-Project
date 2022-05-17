import {Circle,Text} from "@chakra-ui/react"
export default function NextsForAddInfo({numberText,bgNext,colorNext,colorProgress}){
    return (
      <>
        <Circle size={{ base: "3rem", lg: "4rem" }} bg={`${bgNext}`}>
          <Text
            color={`${colorNext}`}
            fontSize="1.325rem"
            fontWeight={{ base: "medium", lg: "semibold" }}
            lineHeight="1.2em"
          >
            {numberText}
          </Text>
        </Circle>
      </>
    );
}