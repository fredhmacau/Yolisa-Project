import { Button, chakra } from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";

export default function ButtonLink({ label,link }) {
  return (
    <>
      <RouteLink to={link}>
        <Button
          fontWeight="600"
          bg="yolisa.button"
          variant="unstyled"
          display="flex"
          align="center"
          justifyContent="center"
          color="yolisa.50"
          _hover={{ bg: "yolisa.50", color: "yolisa.button" }}
        >
          <chakra.span mx="0.9375rem" fontSize="0.75rem">
            {label}
          </chakra.span>
        </Button>
      </RouteLink>
    </>
  );
}
