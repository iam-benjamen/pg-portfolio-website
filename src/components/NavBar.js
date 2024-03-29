import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import {
  Flex,
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
  PopoverArrow,
  PopoverCloseButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import mainLogo from "../assets/PGStudio Logo.jpg";
import { HamburgerIcon, ExternalLinkIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as mylink, animateScroll as scroll } from "react-scroll";
const breakpoints = createBreakpoints({
  sm: "400px",
  md: "1000px",
  lg: "1500px",
});
const theme = extendTheme({ breakpoints });

const NavBar = () => {
  function openNav() {
    let sideNav = document.getElementById("mySidenav");
    sideNav.style.width = "60%";
    sideNav.style.height = "100%";
  }
  function closeNav() {
    let sideNav = document.getElementById("mySidenav");
    sideNav.style.width = 0;
    sideNav.style.height = 0;
  }

  return (
    <Flex
      bgColor="#141414"
      justifyContent={["space-between", "space-between", "center"]}
      pr="3rem"
      pl={["1rem","2rem","8rem"]}
      gap={{base:"2rem", md:"3rem", lg:"6rem"}}
      position={"fixed"}
      w="100%"
      zIndex={99}
    >
      <Box as={mylink} smooth={true} to={"home"}>
        <Image
          src={mainLogo}
          w={["3rem", "3rem", "4rem"]}
          minW="3rem"
          h="100%"
          py={"5px"}
          cursor="pointer"
        />
      </Box>

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
          to="work-section"
          offset = {-50}
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
              px="1rem"
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
                  textDecor: "none",
                }}
                as={Link}
                href="https://drive.google.com/file/d/1jxOwaUdQ_ZaaYn2k2D_huU59JZoHIVo4/view?usp=sharing"
                isExternal
                fontSize={".8rem"}
                position="relative"
                pr="1rem"
                rightIcon={ <ExternalLinkIcon position="absolute" right={2} top=".8rem"/>}
              >
                Architecture 
              </Button>
              <Button
                w="max-content"
                _hover={{
                  bgColor: "#3d648f",
                  color: "white",
                  transitionDuration: ".8s",
                  textDecor: "none",
                }}
                bgColor="#3d648f"
                fontFamily={"Poppins"}
                as={Link}
                href="https://drive.google.com/file/d/1sho2qI1bDzVqoe-osncRMB47-CR2eeUA/view?usp=sharing"
                isExternal
                fontSize={".8rem"}
                position="relative"
                rightIcon={ <ExternalLinkIcon position="absolute" right={2} top=".8rem"/>}
              >
                Creative Design
              </Button>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
      <Box justifySelf="flex-end" alignSelf="center">
        <HamburgerIcon
          w="2.5rem"
          h="2rem"
          color="white"
          cursor="pointer"
          display={["block", "block", "none"]}
          onClick={openNav}
          border="2px solid #3d648f"
          borderRadius={"5px"}
          mt=".5rem"
        />
      </Box>
      <Box
        id="mySidenav"
        className="sidenav"
        height={0}
        width={0}
        top={0}
        right={0}
        zIndex={999}
        overflowX="hidden"
        bg="#141414"
        color="white"
        position={"fixed"}
        display="flex"
        flexDir={"column"}
        alignItems="center"
        gap={"2rem"}
        transition="0.5s"
      >
        <Link
          to={null}
          alignSelf={"start"}
          className="closebtn"
          onClick={closeNav}
        >
          <CloseIcon w="1.5rem" h="2rem" m=".5rem" />
        </Link>
        <Link
          as={mylink}
          to="home"
          smooth={true}
          onClick={closeNav}
          fontSize="1.3rem"
        >
          Home
        </Link>
        <Link
          as={mylink}
          to="about-section"
          smooth={true}
          onClick={closeNav}
          fontSize="1.3rem"
        >
          About
        </Link>
        <Link
          as={mylink}
          to="service-section"
          smooth={true}
          onClick={closeNav}
          fontSize="1.3rem"
        >
          Services
        </Link>
        <Link
          as={mylink}
          to="work-section"
          smooth={true}
          onClick={closeNav}
          fontSize="1.3rem"
        >
          Works
        </Link>
        <Link
          as={mylink}
          to="enquiry-section"
          smooth={true}
          onClick={closeNav}
          fontSize="1.3rem"
        >
          Hire Me
        </Link>
        <Menu closeOnSelect={true}>
          <MenuButton
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
            minW={"fit-content"}
            className="font-link"
            borderRadius={"3px"}
            fontStyle="none"
          >
            Download Resume
          </MenuButton>
          <MenuList w={"80%"}>
            <MenuItem>
              <Button
                href="https://drive.google.com/file/d/1jxOwaUdQ_ZaaYn2k2D_huU59JZoHIVo4/view?usp=sharing"
                w="max-content"
                bgColor="#3d648f"
                fontFamily={"Poppins"}
                as={Link}
                isExternal
                fontSize={"1rem"}
                position="relative"
                rightIcon={ <ExternalLinkIcon top=".7rem" right={1}/>}
              >
                Architecture 
              </Button>
            </MenuItem>
            <MenuItem>
              <Button
                href="https://drive.google.com/file/d/1sho2qI1bDzVqoe-osncRMB47-CR2eeUA/view?usp=sharing"
                fontFamily={"Poppins"}
                w="max-content"
                bgColor="#3d648f"
                as={Link}
                isExternal
                fontSize={"1rem"}
                position="relative"
                rightIcon={ <ExternalLinkIcon top=".7rem" right={1}/>}
              >
                Creative Design 
              </Button>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default NavBar;
