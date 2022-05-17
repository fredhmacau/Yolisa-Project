import { extendTheme } from "@chakra-ui/react"
import "@fontsource/inter"


const theme = extendTheme({
  colors: {
    yolisa: {
      50: "#FFFFFF",
      title: "#222222",
      p: "#444444",
      bg: "#04091e",
      bgOp: "#04091ecc",
      button: "#f7631b",
      search: "#2427fa",
      buttonSecondary: "#03b24c",
      search2:"#d5046e",
      inputPrimary: "#dee5f1",

    },
  },
  fonts: {
    body: "inter,sans-serif",
  },
});

export default theme;