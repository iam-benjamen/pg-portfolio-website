import { Box, Text, Heading } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

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
      pt={"3rem"}
      pb="3rem"
    >
      <Box
        display={"flex"}
        flexDirection="column"
        gap="1rem"
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
            left: "5.5rem",
          }}
        >
          About me
        </Text>
        <Text fontSize={"1.5rem"} fontWeight="bold">
          Design is not just what it looks like and feels like. Design is how it
          works.
        </Text>
        <Text color={"whiteAlpha.700"}>
          The public is more familiar with bad design than good design. It is,
          in effect, conditioned to prefer bad design, because that is what it
          lives with. But we are here to change the narrative by creating
          outstanding, highly engaging and thought-provoking contents through
          designs. It's going to be a lot of meaningful and fun-filled contents
          here.
        </Text>
        <Box>
          <Heading
            fontFamily={""}
            position={"relative"}
            fontSize="5rem"
            color={"#3d648f"}
          >
            5
            <Text
              color={"white"}
              fontSize={"1.2rem"}
              lineHeight={1.5}
              position={"absolute"}
              left="4rem"
              bottom="1.3rem"
            >
              Years Of <br /> Experience
            </Text>
          </Heading>
        </Box>
      </Box>
      <Box pt={"2rem"}>
        <Heading fontFamily={"Montserrat"}>
          Any Type of Query <br /> & Discussion.
        </Heading>
        <Text pt={"1rem"}>Let's talk with me</Text>
      </Box>
    </Box>
  );
};

export default AboutSection;
