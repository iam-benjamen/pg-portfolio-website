import {
  Flex,
  Square,
  Image,
  Text,
  Box,
  Link,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import mainLogo from "../assets/PGStudioLogo.png";
import {
  DownloadIcon,
  HamburgerIcon,
  LinkIcon,
  ExternalLinkIcon,
} from "@chakra-ui/icons";
import { Link as mylink, animateScroll as scroll } from "react-scroll";

const NavBar = () => {
  return (
    <Flex
      bgColor="#141414"
      justifyContent={["space-between", "space-between", "center"]}
      px="1rem"
      gap={["2rem", "3rem", "7rem"]}
      position={"fixed"}
      w="100%"
      zIndex={999}
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
          as={mylink}
          smooth={true}
          to="home"
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
          smooth={true}
          to="about-section"
          offset={-60}
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
          as={mylink}
          smooth={true}
          to="service-section"
          offset={-20}
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
          as={mylink}
          smooth={true}
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
          as={mylink}
          smooth={true}
          to="enquiry-section"
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
          width="max-content"
        >
          Hire Me
        </Link>
        <Popover>
          <PopoverTrigger>
            <Button
              bgColor="white"
              color="#3d648f"
              cursor="pointer"
              padding=".5rem"
              _hover={{
                bgColor: "#3d648f",
                color: "white",
                transitionDuration: ".8s",
              }}
              minWidth="8.5rem"
              pl="15px"
              minW={"fit-content"}
              className="font-link"
              borderRadius={"3px"}
              fontStyle="none"
            >
              Download Resume
            </Button>
          </PopoverTrigger>
          <PopoverContent bgColor="#141414">
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader fontFamily={"Poppins"}>
              I have two Resumes available.
            </PopoverHeader>
            <PopoverBody display={"flex"} flexDirection="row" gap="1rem">
              <Button
                w="max-content"
                bgColor="#3d648f"
                fontFamily={"Poppins"}
                _hover={{
                  bgColor: "#3d648f",
                  color: "white",
                  transitionDuration: ".8s",
                  textDecor:"none"
                }}
                as={Link}
                href="https://drive.google.com/file/d/1jxOwaUdQ_ZaaYn2k2D_huU59JZoHIVo4/view?usp=sharing"
                isExternal
                fontSize={".8rem"}
              >
                Architecture <ExternalLinkIcon mx="2px" />
              </Button>
              <Button
                w="max-content"
                _hover={{
                  bgColor: "#3d648f",
                  color: "white",
                  transitionDuration: ".8s",
                  textDecor:"none"
                }}
                bgColor="#3d648f"
                fontFamily={"Poppins"}
                as={Link}
                href="https://drive.google.com/file/d/1sho2qI1bDzVqoe-osncRMB47-CR2eeUA/view?usp=sharing"
                isExternal
                fontSize={".8rem"}
              >
                Creative Design <ExternalLinkIcon mx="2px" />
              </Button>
            </PopoverBody>
          </PopoverContent>
        </Popover>
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
