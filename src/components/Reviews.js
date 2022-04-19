import { Box, Image, Heading, Avatar, Text } from "@chakra-ui/react";
import mainPicture from "../assets/sideView (1).png";
import commentIcon from "../assets/comments-solid.svg";
import Slider from "react-slick";

import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

// const mybreakpoints = {
//   sm: "1100px",
//   md: "1500px",
//   lg: "1501px",
// };
// const theme = extendTheme({ mybreakpoints });

const ReviewsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    slidesToShow: 1,
    fade: true,
  };
  return (
    <Box h="max-content" bgColor={"#121212"} color="white">
      <Box
        w="80%"
        display={"flex"}
        m="auto"
        justifyContent="center"
        mt={"-1px"}
        flexDir={{ base: "column-reverse", md: "column-reverse", lg: "row" }}
      >
        <Box
          w={{ base: "100%", md: "27rem" }}
          // border={".5px solid black"}
          padding={["1rem", "1.5rem", "2rem"]}
          margin={("auto", "auto", 0)}
          alignSelf="center"
        >
          <Slider {...settings} zIndex={-23}>
            <Box>
              <Box
                display={"flex"}
                flexDir="column"
                gap={"2.5rem"}
                justifyContent="space-between"
              >
                <Image src={commentIcon} w="4rem" />
                <Heading
                  fontFamily={"Poppins"}
                  lineHeight="1.5"
                  fontSize={"2rem"}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus, ipsa.
                </Heading>
                <Box display={"flex"} alignItems="center" gap="1rem">
                  <Avatar
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                    size={"md"}
                  />
                  <Box>
                    <Heading fontFamily={"Poppins"} fontSize="1rem">
                      Romada K. Velvin
                    </Heading>
                    <Text>Founder of KCO</Text>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box
                display={"flex"}
                flexDir="column"
                gap={"2.5rem"}
                justifyContent="space-between"
              >
                <Image src={commentIcon} w="4rem" />
                <Heading
                  fontFamily={"Poppins"}
                  lineHeight="1.5"
                  fontSize={"2rem"}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est,
                  voluptates dolor!
                </Heading>
                <Box display={"flex"} alignItems="center" gap="1rem">
                  <Avatar
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                    size={"md"}
                  />
                  <Box>
                    <Heading fontFamily={"Poppins"} fontSize="1rem">
                      Romada K. Velvin
                    </Heading>
                    <Text>Founder of KCO</Text>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box
                display={"flex"}
                flexDir="column"
                gap={"2.5rem"}
                justifyContent="space-between"
              >
                <Image src={commentIcon} w="4rem" />
                <Heading
                  fontFamily={"Poppins"}
                  lineHeight="1.5"
                  fontSize={"2rem"}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                  modi.
                </Heading>
                <Box display={"flex"} alignItems="center" gap="1rem" pb="3rem">
                  <Avatar
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                    size={"md"}
                  />
                  <Box>
                    <Heading fontFamily={"Poppins"} fontSize="1rem">
                      Romada K. Velvin
                    </Heading>
                    <Text>Founder of KCO</Text>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box
                display={"flex"}
                flexDir="column"
                gap={"2.5rem"}
                justifyContent="space-between"
              >
                <Image src={commentIcon} w="4rem" />
                <Heading
                  fontFamily={"Poppins"}
                  lineHeight="1.5"
                  fontSize={"2rem"}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed,
                  corporis?
                </Heading>
                <Box display={"flex"} alignItems="center" gap="1rem">
                  <Avatar
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                    size={"md"}
                  />
                  <Box>
                    <Heading fontFamily={"Poppins"} fontSize="1rem">
                      Romada K. Velvin
                    </Heading>
                    <Text>Founder of KCO</Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Slider>
        </Box>
        <Box>
          <Image
            src={mainPicture}
            w={"27rem"}
            border={"1px solid black"}
            margin="auto"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewsSection;
