import {
  Box,
  Text,
  Heading,
  Flex,
  Input,
  InputRightElement,
  InputGroup,
  VStack,
  Button,
  HStack,
  Image,
} from "@chakra-ui/react";
import { CheckIcon, EmailIcon, EditIcon } from "@chakra-ui/icons";
import { BsTelephone, FaPhone, FaCoffee, FaLinkedin } from "react-icons/fa";
import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import testIcon from "../assets/linkedin-svg.svg";
import handshake from "../assets/business-meeting.svg"
import call from "../assets/phone-call.svg"
import message from "../assets/chat-Icon.svg" 

const breakpoints = createBreakpoints({
  sm: "400px",
  md: "1000px",
  lg: "1500px",
});
const theme = extendTheme({ breakpoints });

const EnquirySection = () => {

  return (
    <Box
      id="enquiry-section"
      bgColor={"#141414"}
      display="flex"
      justifyContent={"center"}
      gap={["3rem","5rem","7rem"]}
      flexDirection={{ base: "column", md: "column", lg: "row" }}
      height="max-content"
      alignItems={"center"}
      pb="5rem"
      pt="5rem"
      mt={"-1rem"}
    >
      <VStack alignItems={"start"} gap="2rem" pt="1rem">
        <Text
          color={"#3d648f"}
          textDecoration="underline"
          mb="-2rem"
          fontStyle="underline"
          fontFamily={"Poppins"}
        >
          Get In Touch
        </Text>
        <Heading
          fontSize={["1.5rem", "1.8rem", "2rem"]}
          color={"white"}
          mt="0.4rem"
          fontFamily={"Poppins"}
        >
          Talk or Meet With Me
        </Heading>
        <HStack gap=".5rem">
          <Box>
            <Image src={call} w="2.5rem"/>
          </Box>
          <Box pt={".5rem"}>
            <Text fontFamily={"Poppins"} color="whiteAlpha.700">Call Me Now</Text>
            <Text fontFamily={"Poppins"} fontSize={["1.5rem", "1.5rem", "1.5rem"]} color={"white"}>
              (+234) 903 066 1028.
            </Text>
          </Box>
        </HStack>
        <HStack gap=".5rem">
          <Box>
            <Image src={message} w="2.5rem"/>
          </Box>
          <Box pt={".5rem"}>
            <Text fontFamily={"Poppins"} color="whiteAlpha.700">Chat With Me</Text>
            <Text fontFamily={"Poppins"} fontSize={["1.5rem", "1.5rem", "1.5rem"]} color={"white"}>
              pgstudio@gmail.com
            </Text>
          </Box>
        </HStack>
        <HStack gap=".5rem">
          <Box>
            <Image src={handshake} w="2.5rem"/>
          </Box>
          <Box pt={".5rem"}>
            <Text fontFamily={"Poppins"} color="whiteAlpha.700">Get Me Here</Text>
            <Text fontFamily={"Poppins"} fontSize={["1.5rem", "1.5rem", "1.5rem"]} color={"white"}>
              Abuja, Nigeria.
            </Text>
          </Box>
        </HStack>
        <HStack gap=".5rem">
          <Box>
            <Image src={testIcon} w="2.5rem"/>
          </Box>
          <Box pt={".5rem"}>
            <Text fontFamily={"Poppins"} color="whiteAlpha.700">Check My Profile</Text>
            <Text fontFamily={"Poppins"} fontSize={["1.4rem", "1.5rem", "1.5rem"]} color={"white"}>
              linkedin.com/in/pg
            </Text>
          </Box>
        </HStack>
      </VStack>
      <VStack alignItems={"flex-start"} mx="1rem">
        <Text fontFamily={"Poppins"} color={"#3d648f"} textDecoration="underline">
          Send Me A Message
        </Text>
        <Heading
          fontSize={["1.5rem", "1.8rem", "2rem"]}
          color={"white"}
          pb="1rem"
          fontFamily={"Poppins"}
        >
          Let Me Know Here
        </Heading>
        <form name="contact" method="POST" netlify>
          <InputGroup
            outline={"none"}
            bgColor="#1c1c1c"
            pb={"2rem"}
            pt={"1rem"}
            mb="1rem"
            width={["100%", "100%", "30rem"]}
          >
            <Input
              placeholder="Enter your name here"
              variant={"unstyled"}
              _placeholder={{ color: "whiteAlpha.700" }}
              color="white"
              paddingLeft={"1rem"}
              required
            />
            <InputRightElement
              pt={"8px"}
              pr={"8px"}
              children={<EditIcon color="#3d648f" />}
            />
          </InputGroup>
          <InputGroup
            outline={"none"}
            bgColor="#1c1c1c"
            pb={"2rem"}
            pt={"1rem"}
            mb="1rem"
          >
            <Input
              variant={"unstyled"}
              placeholder="Enter your email"
              _placeholder={{ color: "whiteAlpha.700" }}
              color="white"
              paddingLeft={"1rem"}
              type="email"
              required
            />
            <InputRightElement
              pt={"8px"}
              pr={"8px"}
              children={<EmailIcon color={"#3d648f"} />}
            />
          </InputGroup>
          <InputGroup
            outline={"none"}
            bgColor="#1c1c1c"
            pb={"5rem"}
            pt={"1rem"}
            mb="1rem"
          >
            <Input
              variant={"unstyled"}
              placeholder="Tell me details about project"
              _placeholder={{ color: "whiteAlpha.700" }}
              color="white"
              paddingLeft={"1rem"}
              required
            />
            <InputRightElement
              pt={"8px"}
              pr={"8px"}
              children={<EditIcon color="#3d648f" />}
            />
          </InputGroup>
          <Input
            width={"max-content"}
            bgColor="#3d648f"
            color="white"
            paddingX={"2.5rem"}
            paddingY="1rem"
            padding
            borderRadius="3px"
            cursor={"pointer"}
            type="submit"
            value={"Get A Quote"}
            variant="unstyled"
          />
        </form>
      </VStack>
    </Box>
  );
};

export default EnquirySection;
