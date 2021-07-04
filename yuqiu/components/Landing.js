import React from "react";
import { Box, Flex, Text, IconButton, useColorMode } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import LineText from "./LineText";

const Landing = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      width="100%"
      height={{ base: "480px", md: "360px" }}
      backgroundColor={colorMode === "light" ? "gray.100" : "gray.800"}
    >
      <Flex
        maxWidth="1000px"
        margin="0 auto"
        paddingTop="30px"
        direction={{ base: "column-reverse", md: "row" }}
        justify="space-between"
      >
        <Flex
          width={{ base: "100%", md: "50%" }}
          justify={{ base: "center", md: "flex-end" }}
        >
          <Flex
            width="380px"
            direction="column"
            justify="center"
            textAlign="center"
          >
            <LineText
              fontSize="4xl"
              fontWeight="bold"
              color={colorMode === "light" ? "gray.800" : "white"}
              heading="true"
            >
              Yu Qiu
            </LineText>
            <Text color={colorMode === "light" ? "gray.500" : "gray.400"}>
              M.S. Software Engineering @ SJSU
            </Text>
            <Text color={colorMode === "light" ? "gray.500" : "gray.400"}>
              M.S. Mechanical Engineering @ USC
            </Text>
            <Text color={colorMode === "light" ? "gray.500" : "gray.400"}>
              B.S. Flight Vehicle Design and Engineering @ HIT
            </Text>
            <Flex marginTop="5px" marginLeft={{ md: "-5px" }} justify="center">
              <IconButton
                aria-label="Resume"
                label="Resume"
                icon={<FiFileText />}
                variant={colorMode === "light" ? "solid" : "ghost"}
                _focus={{ outline: 0 }}
                fontSize="24px"
                as="a"
                target="_blank"
                href="/YuQiu.pdf"
              />
              <IconButton
                aria-label="LinkedIn"
                icon={<FaLinkedin />}
                variant={colorMode === "light" ? "solid" : "ghost"}
                _focus={{ outline: 0 }}
                fontSize="24px"
                as="a"
                target="_blank"
                href="https://www.linkedin.com/in/qiu690-81961b173/"
              />
              <IconButton
                aria-label="Github"
                icon={<FaGithub />}
                variant={colorMode === "light" ? "solid" : "ghost"}
                _focus={{ outline: 0 }}
                fontSize="24px"
                as="a"
                target="_blank"
                href="https://github.com/qiuyutianwen"
              />
              <IconButton
                aria-label="Email"
                icon={<MdEmail />}
                variant={colorMode === "light" ? "solid" : "ghost"}
                fontSize="24px"
                as="a"
                target="_blank"
                href="mailto:qiuyutianwen@gmail.com"
              />
            </Flex>
          </Flex>
        </Flex>
        <Flex
          width={{ base: "100%", md: "50%" }}
          justify={{ base: "center", md: "flex-start" }}
        >
          <div
            className={
              colorMode === "light"
                ? "photo_box white_background"
                : "photo_box black_background"
            }
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <line className="top" x1="0" y1="0" x2="800" y2="0" />
              <line className="left" x1="0" y1="271" x2="0" y2="-920" />
              <line className="bottom" x1="200" y1="271" x2="-400" y2="271" />
              <line className="right" x1="200" y1="0" x2="200" y2="813" />
            </svg>
            <img src="YuQiu.jpg" width="200" height="271" alt="no pic" />
          </div>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Landing;
