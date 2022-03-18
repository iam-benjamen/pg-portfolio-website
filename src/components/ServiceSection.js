import { Box, Text, Heading, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import Design from "../assets/design.png"

const ServiceSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Box
      bgColor={"#101010"}
      height="70vh"
      display={"flex"}
      flexDir={"column"}
      gap="1rem"
      px={["1rem","5rem","15rem"]}
      mt="-1px"
      pt={"5rem"}
      pb="35rem"
      id="service"
    >
      <Text textAlign={"center"} color={"#3d648f"} textDecor="underline">
        Services
      </Text>
      <Heading textAlign={"center"} color={"white"}>
        What We Do?
      </Heading>

      <Slider {...settings}>
        <Box
          // bgColor={"#3d648f"}
          display={"flex !important"}
          gap="1rem"
          flexDir="column"
          alignItems="center"
          h={"20rem"}
          justifyContent="center"
          px={"2rem"}
          w="18rem !important"
        >
          <Heading textAlign={"center"} color={"white"} fontSize="1.5rem">
            Graphics Design & Branding
          </Heading>
          <Text color={"white"} textAlign="center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio, quibusdam?
          </Text>
        </Box>
        <Box
          // bgColor={"#3d648f"}
          display={"flex !important"}
          gap="1rem"
          flexDir="column"
          alignItems="center"
          h={"20rem"}
          justifyContent="center"
          px={"2rem"}
          w="18rem !important"
        >
          <Heading textAlign={"center"} color={"white"} fontSize="1.5rem">
            Architectural Design
          </Heading>
          <Text color={"white"} textAlign="center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio, quibusdam?
          </Text>
        </Box>
        <Box
          // bgColor={"#3d648f"}
          display={"flex !important"}
          gap="1rem"
          flexDir="column"
          alignItems="center"
          h={"20rem"}
          justifyContent="center"
          px={"2rem"}
          w="18rem !important"
        >
          <Image src={Design} w="5rem" h="5rem" color={"#3d648f"}/>
          <Heading textAlign={"center"} color={"white"} fontSize="1.5rem">
            Visual Design
          </Heading>
          <Text color={"white"} textAlign="center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio, quibusdam?
          </Text>
        </Box>
        <Box
          // bgColor={"#3d648f"}
          display={"flex !important"}
          gap="1rem"
          flexDir="column"
          alignItems="center"
          h={"20rem"}
          justifyContent="center"
          px={"2rem"}
          w="18rem !important"
        >
          <Heading textAlign={"center"} color={"white"} fontSize="1.5rem">
            Content Creation
          </Heading>
          <Text color={"white"} textAlign="center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio, quibusdam?
          </Text>
        </Box>
      </Slider>
    </Box>
  );
};

export default ServiceSection;