import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/bundle";


ReactDOM.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
  ,
  document.getElementById('root')
);
