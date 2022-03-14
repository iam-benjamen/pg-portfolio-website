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
} from "@chakra-ui/react";
import { CheckIcon, EmailIcon, EditIcon } from "@chakra-ui/icons";
import { BsTelephone, FaPhone, FaCoffee, FaLinkedin } from "react-icons/fa";

const EnquirySection = () => {
  return (
    <Box
      bgColor={"#101010"}
      display="flex"
      justifyContent={"space-between"}
      px={"12rem"}
      flexDirection={["column", "column", "row"]}
      height="max-content"
      alignItems={"center"}
      pb="5rem"
      mt={"-1rem"}
    >
      <VStack alignItems={"start"} gap="2rem">
        <Text color={"#3d648f"} textDecoration="underline" mb="-2rem" fontStyle="underline">Get In Touch</Text>
        <Heading fontSize={"4xl"} color={"white"} mt="0.4rem">
          Talk or Meet With Me
        </Heading>
        <HStack gap="1rem" pl={"1rem"}>
          <Box>
            <FaPhone size={"2rem"} color="#3d648f" />
          </Box>
          <Box>
            <Text color="whiteAlpha.700">Call Me Now</Text>
            <Heading fontSize={"3xl"} color={"white"}>
              +2349030661028
            </Heading>
          </Box>
        </HStack>
        <HStack gap="1rem">
          <Box>
            <EmailIcon w="3rem" h="2rem" color="#3d648f" />
          </Box>
          <Box>
            <Text color="whiteAlpha.700">Chat With Me</Text>
            <Heading fontSize={"3xl"} color={"white"}>
              pgstudio@gmail.com
            </Heading>
          </Box>
        </HStack>
        <HStack gap="1rem">
          <Box>
            <FaCoffee size={"2.5rem"} color="#3d648f" />
          </Box>
          <Box>
            <Text color="whiteAlpha.700">Get Me Here</Text>
            <Heading fontSize={"3xl"} color={"white"}>
              Abuja, Nigeria.
            </Heading>
          </Box>
        </HStack>
        <HStack gap="1rem">
          <Box>
            <FaLinkedin size={"2.5rem"} color="#3d648f" />
          </Box>
          <Box>
            <Text color="whiteAlpha.700">Check My Profile</Text>
            <Heading fontSize={"3xl"} color={"white"}>
              pg.linkedin.com
            </Heading>
          </Box>
        </HStack>
      </VStack>
      <VStack alignItems={"flex-start"}>
        <Text color={"#3d648f"} textDecoration="underline">Send Me A Message</Text>
        <Heading fontSize={"4xl"} color={"white"} pb="1rem">
          Let Me Know Here
        </Heading>
        <form>
          <InputGroup
            outline={"none"}
            bgColor="#1c1c1c"
            pb={"2rem"}
            pt={"1rem"}
            mb="1rem"
            width={"30rem"}
          >
            <Input
              placeholder="Enter your name here"
              variant={"unstyled"}
              _placeholder={{ color: "whiteAlpha.700" }}
              color="white"
              paddingLeft={"1rem"}
              required
            />
            <InputRightElement children={<EditIcon color="#3d648f" />} />
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
            <InputRightElement children={<EmailIcon color={"#3d648f"} />} />
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
            <InputRightElement children={<EditIcon color="#3d648f" />} />
          </InputGroup>
          <Input
            width={"max-content"}
            bgColor="#3d648f"
            color="white"
            paddingX={"3rem"}
            paddingY="1rem"
            padding
            borderRadius="0rem"
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
