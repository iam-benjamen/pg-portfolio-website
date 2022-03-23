import { Box, Text, Heading } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { ArrowForwardIcon } from "@chakra-ui/icons";
const breakpoints = createBreakpoints({
  sm: "400px",
  md: "1000px",
  lg: "1500px",
});

const theme = extendTheme({ breakpoints });
const AboutSection = () => {
  return (
    <Box
      height={"max-content"}
      bgColor="#141414"
      color={"white"}
      display="flex"
      justifyContent="center"
      flexDir={{ base: "column", md: "column", lg: "row" }}
      alignItems={{ base: "center", md: "center", lg: "flex-start" }}
      gap={{ base: "0rem", md: "3rem", lg: "10rem" }}
      mt="-1px"
      py="5rem"
    >
      <Box
        display={"flex"}
        flexDirection="column"
        gap=".5rem"
        maxW={{ base: "80%", md: "80%", lg: "32%" }}
      >
        <Text
          textDecoration={"underline"}
          color="#3d648f"
          position={"relative"}
          fontSize={"1.1rem"}
          _after={{
            content: "''",
            height: "1.5px",
            width: "5rem",
            bgColor: "#3d648f",
            position: "absolute",
            top: "14px",
            left: "5.3rem",
          }}
        >
          About me
        </Text>
        <Text fontSize={["1.2rem", "1.2rem", "1.5rem"]} fontWeight="bold">
          Design is not just what it looks like and feels like. Design is how it
          works.
        </Text>
        <Text color={"whiteAlpha.700"} textAlign="justify">
          The public is more familiar with bad design than good design. But we
          are here to change the narrative by creating outstanding, highly
          engaging and thought-provoking contents through designs. It's going to
          be a lot of meaningful and fun-filled contents here.
        </Text>
        <Box display={"flex"} alignItems="center" gap={".5rem"}> 
          <Heading
            fontFamily={"Montserrat"}
            fontSize={["4rem","4rem","5rem"]}
            color={"#3d648f"}
          >
            05
          </Heading>
          <Text
            color={"white"}
            fontSize={"1rem","1rem","1.2rem"}
            lineHeight={1.2}
          >
            Years Of <br /> Experience
          </Text>
        </Box>
      </Box>
      <Box
        pt={"2rem"}
        display="flex"
        flexDir={"column"}
        justifyContent="space-between"
        height={"18rem"}
      >
        <Box>
          <Heading fontFamily={"Montserrat"}>
            Any Type of Query <br /> & Discussion.
          </Heading>
          <Text pt={"1rem"}>Let's talk with me</Text>
        </Box>
        <Box display={"flex"} gap="1rem">
          <Text
            color="#3d648f"
            fontSize={"1.5rem"}
            textDecoration={"underline"}
          >
            Send Me A Message
          </Text>
          <Box
          >
            <ArrowForwardIcon color={"#3d648f"} w="2rem" h="2rem" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection;
