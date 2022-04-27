import { Box, Text, Heading, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import Design from "../assets/design.png";
import Graphics from "../assets/graphic-design.svg";
import Architecture from "../assets/architecture.svg";
import Visual from "../assets/visual-design.svg";
import Content from "../assets/content.svg";
import "../my-slick.css";
import { motion } from "framer-motion";

const ServiceSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnDotsHover: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 2200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <Box
      bgColor={"#141414"}
      height="max-content"
      display={"flex"}
      flexDir={"column"}
      gap="0.5rem"
      px={["1rem", "5rem", "8rem"]}
      mt="-1px"
      pt="1rem"
      pb={"5rem"}
      zIndex={-80}
      className="font-link"
      id="service-section"
    >
      <Text
        fontFamily={"Poppins"}
        className="font-link"
        textAlign={"center"}
        color={"#3d648f"}
        textDecor="underline"
        as={motion.p}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0.1, 0.5, 0.7, 1] }}
        transition={{ delay: 0.2, duration: 5 }}
      >
        Services
      </Text>
      <Heading
        fontFamily={"Poppins"}
        textAlign={"center"}
        color={"white"}
        pb="1rem"
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0.1, 0.5, 0.7, 1] }}
        transition={{ delay: 0.2, duration: 5 }}
      >
        What I Do?
      </Heading>

      <Slider {...settings} zIndex={-23}>
        <Box
          // bgColor={"#3d648f"}
          display={"flex !important"}
          gap="1rem"
          flexDir="column"
          alignItems="center"
          h={"20rem"}
          justifyContent="center"
          px={["0rem", "1rem", "1.5rem"]}
          _hover={{ cursor: "pointer" }}
          borderX="1px solid #3d648f"
        >
          <Image src={Graphics} />
          <Heading
            textAlign={"center"}
            color={"white"}
            fontSize="1.5rem"
            w="90%"
            fontFamily={"Poppins"}
          >
            Graphics Design
          </Heading>
          <Text
            fontFamily={"Poppins"}
            color={"white"}
            textAlign="center"
            w={"83%"}
          >
            Design is not just what it looks like and feels like. Design is how
            it works. Good design is good business. Get Noticed!
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
          px={["0rem", "1rem", "2rem"]}
          _hover={{ cursor: "pointer" }}
          borderX="1px solid #3d648f"
        >
          <Image src={Architecture} />
          <Heading
            fontFamily={"Poppins"}
            textAlign={"center"}
            color={"white"}
            fontSize="1.5rem"
          >
            Architectural <br /> Design
          </Heading>
          <Text
            fontFamily={"Poppins"}
            color={"white"}
            textAlign="center"
            w={"83%"}
          >
            Architecture is an expression of values the way we build is a
            reflection of the way we live. Let's create value for your building
            projects.
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
          px={["0rem", "1rem", "1.5rem"]}
          _hover={{ cursor: "pointer" }}
          borderX="1px solid #3d648f"
        >
          <Image src={Visual} />
          <Heading
            fontFamily={"Poppins"}
            textAlign={"center"}
            color={"white"}
            fontSize="1.5rem"
          >
            Visual Design
          </Heading>
          <Text
            fontFamily={"Poppins"}
            color={"white"}
            textAlign="center"
            w={"83%"}
          >
            Attractive Visuals creates effective communication of ideas, higher
            visibility, and enhanced credibility for your brand
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
          px={["0rem", "1rem", "1.5rem"]}
          _hover={{ cursor: "pointer" }}
          borderX="1px solid #3d648f"
        >
          <Image src={Content} />
          <Heading
            fontFamily={"Poppins"}
            textAlign={"center"}
            color={"white"}
            fontSize="1.5rem"
          >
            Content Writing
          </Heading>
          <Text
            fontFamily={"Poppins"}
            color={"white"}
            textAlign="center"
            w={"83%"}
          >
            Every great design begins with an even better story. Design in the
            absence of content is not design, it's decoration.
          </Text>
        </Box>
      </Slider>
    </Box>
  );
};

export default ServiceSection;
