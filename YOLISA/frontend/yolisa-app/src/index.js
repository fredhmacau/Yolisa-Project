import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {ChakraProvider, CSSReset} from "@chakra-ui/react"
import theme from "./theme.js"

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <CSSReset/>
      <App />
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

