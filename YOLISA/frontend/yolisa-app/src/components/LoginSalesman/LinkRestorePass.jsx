import { chakra } from "@chakra-ui/react"
import { Link as BrowserLink } from "react-router-dom"

export default function LinkRestorePass({label,link}){
    return (
      <BrowserLink to={link}>
        <chakra.span fontSize="0.75rem" color="#6783f9" pl="1">
          {label}
        </chakra.span>
      </BrowserLink>
    );
}