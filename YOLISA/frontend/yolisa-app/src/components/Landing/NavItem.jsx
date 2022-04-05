import { chakra } from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";

export default function NavItem({ label, link }) {
  return (
    <>
      <RouteLink to={link}>
        <chakra.span
          fontSize="0.8125rem"
          _hover={{ color: "yolisa.button" }}
          color="yolisa.50"
          textTransform="uppercase"
        >
          {label}
        </chakra.span>
      </RouteLink>
    </>
  );
}
