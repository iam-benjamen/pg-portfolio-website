import { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { Flex, Square, Image, Text, Link, Box } from "@chakra-ui/react";
import mainLogo from "../assets/PGStudioLogo.png";
import { DownloadIcon, HamburgerIcon } from "@chakra-ui/icons";
import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

const breakpoints = createBreakpoints({
  sm: "400px",
  md: "1000px",
  lg: "1500px",
});
const theme = extendTheme({ breakpoints });

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("right");

  return (
    <Flex
      bgColor="#101010"
      justifyContent={["space-between","space-between","center"]}
      px="1rem"
      gap={["2rem", "3rem", "7rem"]}
      marginBottom= "-1rem"
      
    >
      <Image src={mainLogo} w="6rem" h="80%"/>
      <Flex
        color="white"
        alignItems="center"
        justifyContent="space-evenly"
        gap={{ base: "1rem", md: "2rem", lg: "4rem" }}
        fontFamily="sans-serif"
        fontSize="1rem"
        display={["none", "none", "flex"]}
      >
        <Text
          cursor="pointer"
          padding="3px"
          as={Link}
          _hover={{ textDecoration: "none", color: "#3d648f" }}
          className="font-link"
        >
          Home
        </Text>
        <Text
          cursor="pointer"
          as={Link}
          _hover={{ textDecoration: "none", color: "#3d648f" }}
        >
          About
        </Text>
        <Text
          cursor="pointer"
          as={Link}
          _hover={{ textDecoration: "none", color: "#3d648f" }}
        >
          Services
        </Text>
        <Text
          cursor="pointer"
          as={Link}
          _hover={{ textDecoration: "none", color: "#3d648f" }}
        >
          Works
        </Text>
        <Text
          cursor="pointer"
          as={Link}
          _hover={{ textDecoration: "none", color: "#3d648f" }}
        >
          Contact
        </Text>
        <Text
          bgColor="#3d648f"
          cursor="pointer"
          padding=".5rem"
          _hover={{}}
          minWidth="8.5rem"
          pl="15px"
        >
          My Resume <DownloadIcon />
        </Text>
      </Flex>
      <Box justifySelf="flex-end" alignSelf="center">
        <HamburgerIcon
          w="2rem"
          h="2rem"
          color="white"
          cursor="pointer"
          display={["block", "block", "none"]}
          onClick={onOpen}
        />
      </Box>
      <Drawer
        placement={placement}
        onClose={onClose}
        isOpen={isOpen}
        bgColor="#101010"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default NavBar;