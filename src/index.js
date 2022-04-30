import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/bundle";
import SimpleReactLightbox from "simple-react-lightbox";

ReactDOM.render(
  <SimpleReactLightbox>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </SimpleReactLightbox>,
  document.getElementById("root")
);
