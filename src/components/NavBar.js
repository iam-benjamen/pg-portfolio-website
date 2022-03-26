import { Flex, Square, Image, Text, Box, Link } from "@chakra-ui/react";
import mainLogo from "../assets/PGStudioLogo.png";
import { DownloadIcon, HamburgerIcon, LinkIcon } from "@chakra-ui/icons";
import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { Link as mylink, animateScroll as scroll } from "react-scroll";

const breakpoints = createBreakpoints({
  sm: "400px",
  md: "1000px",
  lg: "1500px",
});
const theme = extendTheme({ breakpoints });

const NavBar = () => {
  return (
    <Flex
      bgColor="#141414"
      justifyContent={["space-between", "space-between", "center"]}
      px="1rem"
      gap={["2rem", "3rem", "7rem"]}
      // position={"sticky"}
      // w="100%"
      // z-zIndex={999}
    >
      <Image src={mainLogo} w="6rem" h="80%" />
      <Flex
        color="white"
        alignItems="center"
        justifyContent="space-evenly"
        gap={{ base: "1rem", md: "2rem", lg: "4rem" }}
        fontFamily="sans-serif"
        fontSize="1rem"
        display={["none", "none", "flex"]}
      >
        <Link
          cursor="pointer"
          padding="3px"
          _hover={{
            textDecoration: "none",
            _after: { transform: "scaleX(1)" },
          }}
          className="font-link"
          position="relative"
          _after={{
            content: "''",
            width: "100%",
            display: "inline-block",
            height: "3px",
            bgColor: "#3d648f",
            position: "absolute",
            transform: "scaleX(0)",
            left: "0px",
            bottom: "-1px",
            transition: "transform 0.3s ease 0s",
          }}
        >
          Home
        </Link>
        <Link
          as={mylink}
          to="about-section"
          cursor="pointer"
          _hover={{
            textDecoration: "none",
            _after: { transform: "scaleX(1)" },
          }}
          className="font-link"
          position="relative"
          _after={{
            content: "''",
            width: "100%",
            display: "inline-block",
            height: "3px",
            bgColor: "#3d648f",
            position: "absolute",
            transform: "scaleX(0)",
            left: "0px",
            bottom: "-2px",
            transition: "transform 0.3s ease 0s",
          }}
        >
          About
        </Link>
        <Link
          to="about-section"
          cursor="pointer"
          _hover={{
            textDecoration: "none",
            _after: { transform: "scaleX(1)" },
          }}
          className="font-link"
          position="relative"
          _after={{
            content: "''",
            width: "100%",
            display: "inline-block",
            height: "3px",
            bgColor: "#3d648f",
            position: "absolute",
            transform: "scaleX(0)",
            left: "0px",
            bottom: "-2px",
            transition: "transform 0.3s ease 0s",
          }}
        >
          Services
        </Link>
        <Link
          to="works"
          cursor="pointer"
          _hover={{
            textDecoration: "none",
            _after: { transform: "scaleX(1)" },
          }}
          className="font-link"
          position="relative"
          _after={{
            content: "''",
            width: "100%",
            display: "inline-block",
            height: "3px",
            bgColor: "#3d648f",
            position: "absolute",
            transform: "scaleX(0)",
            left: "0px",
            bottom: "-2px",
            transition: "transform 0.3s ease 0s",
          }}
        >
          Works
        </Link>
        <Link
          to="about-section"
          cursor="pointer"
          _hover={{
            textDecoration: "none",
            _after: { transform: "scaleX(1)" },
          }}
          className="font-link"
          position="relative"
          _after={{
            content: "''",
            width: "100%",
            display: "inline-block",
            height: "3px",
            bgColor: "#3d648f",
            position: "absolute",
            transform: "scaleX(0)",
            left: "0px",
            bottom: "-2px",
            transition: "transform 0.3s ease 0s",
          }}
        >
          Contact
        </Link>
        <Link
          bgColor="#3d648f"
          cursor="pointer"
          padding=".5rem"
          _hover={{}}
          minWidth="8.5rem"
          pl="15px"
          minW={"fit-content"}
          className="font-link"
        >
          My Resume <DownloadIcon />
        </Link>
      </Flex>
      <Box justifySelf="flex-end" alignSelf="center">
        <HamburgerIcon
          w="2rem"
          h="2rem"
          color="white"
          cursor="pointer"
          display={["block", "block", "none"]}
        />
      </Box>
    </Flex>
  );
};

export default NavBar;
