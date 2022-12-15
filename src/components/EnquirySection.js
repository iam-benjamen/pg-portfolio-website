import { useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import {
  Box,
  Text,
  Heading,
  Input,
  InputRightElement,
  InputGroup,
  VStack,
  HStack,
  Link,
  Image,
  Textarea,
} from "@chakra-ui/react";
import { EmailIcon, EditIcon } from "@chakra-ui/icons";
import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import testIcon from "../assets/linkedin-svg.svg";
import handshake from "../assets/business-meeting.svg";
import call from "../assets/phone-call.svg";
import message from "../assets/chat-Icon.svg";
import { motion } from "framer-motion";
const breakpoints = createBreakpoints({
  sm: "400px",
  md: "1000px",
  lg: "1500px",
});
const theme = extendTheme({ breakpoints });

const EnquirySection = () => {
  const [success, setSuccess] = useState(false);
  const toast = useToast();
  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, []);

  const handleClick = () => {
    if (success === true) {
      toast({
        status: "success",
        duration: 5000,
        isClosable: true,
        title: "We've received your message and will respond shortly",
      });
    }
  };

  return (
    <Box
      id="enquiry-section"
      bgColor={"#141414"}
      display="flex"
      justifyContent={"center"}
      gap={["3rem", "5rem", "7rem"]}
      flexDirection={{ base: "column", md: "column", lg: "row" }}
      height="max-content"
      alignItems={"center"}
      pb="5rem"
      pt={["2rem", "3rem", "5rem"]}
      mt={"-1rem"}
    >
      <VStack
        alignItems={"start"}
        gap="1.2rem"
        pt="1rem"
        px=".5rem"
        as={motion.div}
        whileInView={{ y: [30, 0] }}
        transition={{ delay: 2 }}
      >
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
          pt="1rem"
          fontFamily={"Poppins"}
        >
          Talk or Meet With Me
        </Heading>
        <HStack gap=".5rem">
          <Box>
            <Image src={call} w="2.5rem" />
          </Box>
          <Box pt={".5rem"}>
            <Text fontFamily={"Poppins"} color="whiteAlpha.700">
              Call Me Now
            </Text>
            <Heading
              fontFamily={"Poppins"}
              fontSize={["1.5rem", "1.5rem", "1.5rem"]}
              color={"white"}
            >
              (+234) 813 748 8193.
            </Heading>
          </Box>
        </HStack>
        <HStack gap=".5rem">
          <Box>
            <Image src={message} w="2.5rem" />
          </Box>
          <Box pt={".5rem"}>
            <Text fontFamily={"Poppins"} color="whiteAlpha.700">
              Chat With Me
            </Text>
            <Heading
              fontFamily={"Poppins"}
              fontSize={["1.5rem", "1.5rem", "1.5rem"]}
              color={"white"}
              as={Link}
              href={"mailto:promiseguy02@gmail.com"}
              isExternal
            >
              promiseguy02
              <br />
              @gmail.com
            </Heading>
          </Box>
        </HStack>
        <HStack gap=".5rem">
          <Box>
            <Image src={handshake} w="2.5rem" />
          </Box>
          <Box pt={".5rem"}>
            <Text fontFamily={"Poppins"} color="whiteAlpha.700">
              Get Me Here
            </Text>
            <Heading
              fontFamily={"Poppins"}
              fontSize={["1.5rem", "1.5rem", "1.5rem"]}
              color={"white"}
            >
              Suite C4, Tripple H Plaza,
              <br /> Wuye District,Abuja, Nigeria.
            </Heading>
          </Box>
        </HStack>
        <HStack gap=".5rem">
          <Box>
            <Image src={testIcon} w="2.5rem" />
          </Box>
          <Box pt={".5rem"}>
            <Text fontFamily={"Poppins"} color="whiteAlpha.700">
              Check My Profile
            </Text>
            <Heading
              fontFamily={"Poppins"}
              fontSize={["1.5rem", "1.5rem", "1.5rem"]}
              color={"white"}
              as={Link}
              href="https://linkedin.com/in/adediran-ilerioluwa"
              isExternal
            >
              linkedin.com/in/
              <br />
              adediran-ilerioluwa
            </Heading>
          </Box>
        </HStack>
      </VStack>
      <VStack
        alignItems={"flex-start"}
        mx="1rem"
        as={motion.div}
        whileInView={{ y: [30, 0] }}
        transition={{ duration: 0.5 }}
      >
        <Text
          fontFamily={"Poppins"}
          color={"#3d648f"}
          textDecoration="underline"
        >
          Send Me A Message
        </Text>
        <Heading
          fontSize={["1.5rem", "1.8rem", "2rem"]}
          color={"white"}
          pb="1rem"
          pt=".5rem"
          fontFamily={"Poppins"}
        >
          Let Me Know Here
        </Heading>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          action="/"
          onSubmit={handleClick}
        >
          <InputGroup
            outline={"none"}
            bgColor="#1c1c1c"
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
              name="name"
              height={"5rem"}
            />
            <InputRightElement
              top={"1rem"}
              pt={"8px"}
              pr={"8px"}
              children={<EditIcon color="#3d648f" />}
            />
          </InputGroup>
          <input type="hidden" name="form-name" value="contact" />
          <InputGroup outline={"none"} bgColor="#1c1c1c" mb="1rem">
            <Input
              variant={"unstyled"}
              placeholder="Enter your email"
              _placeholder={{ color: "whiteAlpha.700" }}
              color="white"
              paddingLeft={"1rem"}
              type="email"
              required
              name="email"
              height={"5rem"}
            />
            <InputRightElement
              top={"1rem"}
              pt={"8px"}
              pr={"8px"}
              children={<EmailIcon color={"#3d648f"} />}
            />
          </InputGroup>
          <InputGroup outline={"none"} bgColor="#1c1c1c" mb="1rem">
            <Textarea
              variant={"unstyled"}
              placeholder="Tell me details about project"
              _placeholder={{ color: "whiteAlpha.700" }}
              color="white"
              paddingLeft={"1rem"}
              required
              name="message"
              pr="2rem"
              minHeight={["15rem", "15rem", "6rem"]}
            />
            <InputRightElement
              top={"10px"}
              pt={"8px"}
              pr={"8px"}
              children={<EditIcon color="#3d648f" />}
            />
          </InputGroup>
          <Input
            width={"max-content"}
            bgColor="#3d648f"
            color={"white"}
            paddingX={"2rem"}
            paddingY=".6rem"
            padding
            borderRadius="3px"
            cursor={"pointer"}
            type="submit"
            value={"Get A Quote"}
            variant="unstyled"
            _hover={{ transform: "scale(1.05)" }}
          />
        </form>
      </VStack>
    </Box>
  );
};

export default EnquirySection;
