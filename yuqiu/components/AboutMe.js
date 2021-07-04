/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { Box, useColorMode } from "@chakra-ui/react";
import LineText from "./LineText";
import TextLink from "./TextLink";

const AboutMe = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      width="100%"
      marginBottom={{ base: "25px", md: "50px" }}
      backgroundColor={colorMode === "light" ? "white" : "gray.700"}
    >
      <Box
        maxWidth="750px"
        paddingTop="25px"
        paddingBottom={{ base: "25px", md: "0" }}
        margin="0 auto"
        style={{ fontFamily: "LeituraNews-Roman2" }}
        textAlign={{ base: "start", md: "justify" }}
      >
        <LineText>About</LineText>
        <p style={{ margin: "25px" }}>
          I am pursuing a master’s degree of Software Engineering at&nbsp;
          <TextLink href="https://www.sjsu.edu/">
            San Jose State University
          </TextLink>
          . The courses include&nbsp;
          <TextLink href="https://catalog.sjsu.edu/preview_course_nopop.php?catoid=2&coid=6804">
            Software Systems Engineering
          </TextLink>
          ,&nbsp;
          <TextLink href="https://catalog.sjsu.edu/preview_course_nopop.php?catoid=2&coid=6794">
            Enterprise Software Platforms
          </TextLink>
          ,&nbsp;
          <TextLink href="https://catalog.sjsu.edu/preview_course_nopop.php?catoid=2&coid=6795">
            Enterprise Distributed Systems
          </TextLink>
          ,&nbsp;
          <TextLink href="https://catalog.sjsu.edu/preview_course_nopop.php?catoid=2&coid=6797">
            Enterprise Application Development
          </TextLink>
          ,&nbsp;
          <TextLink href="https://catalog.sjsu.edu/preview_course_nopop.php?catoid=2&coid=6800">
            Smartphone Application Development
          </TextLink>
          ,&nbsp;
          <TextLink href="https://catalog.sjsu.edu/preview_course_nopop.php?catoid=2&coid=6835">
            Data Structures and Algorithms in C++
          </TextLink>
          ,&nbsp;
          <TextLink href="https://catalog.sjsu.edu/preview_course_nopop.php?catoid=2&coid=6836">
            Database Systems
          </TextLink>
          ,&nbsp;
          <TextLink href="https://catalog.sjsu.edu/preview_course_nopop.php?catoid=2&coid=6837">
            Operating Systems Design
          </TextLink>
          .&nbsp;
        </p>
        <p style={{ margin: "25px" }}>
          Prior to joining SJSU, I received my bachelor’s degree of Flight
          Vehicle Design and Engineering from&nbsp;
          <TextLink href="http://sa.hit.edu.cn/">
            School of Astronautics
          </TextLink>
          &nbsp;
          <TextLink href="http://www.hit.edu.cn/">
            Harbin Institute of Technology
          </TextLink>
          , which is the best school of astronautics in China. I got the honor
          of second class of The People’s Scholarship in China in 2013. In order
          to broaden my horizons, I came to the United States and got my
          master’s degree of Mechanical Engineering at the&nbsp;
          <TextLink href="https://www.usc.edu/">
            University of Southern California
          </TextLink>
          . During my study at USC, I worked as a course grader of&nbsp;
          <TextLink href="https://classes.usc.edu/term-20173/course/ame-485/">
            Aerospace Structures I
          </TextLink>
          . In Summer 2019, I got an internship in&nbsp;
          <TextLink href="https://www.orbitelectric.com/">
            Orbit Industries, Inc.
          </TextLink>
          , which changed my career a lot. I did much coding related work in
          that internship. Although I completed the work perfectly, I realized
          that I need to learn more in Software Engineering. That’s the reason
          why I transferred my major and started my study at SJSU.
        </p>
        <p style={{ margin: "25px" }}>
          Currently, I am doing an internship at CletePoint, Inc., which is a
          startup focusing on automated stock trading. My primary work include
          building front-end UI applications with&nbsp;
          <TextLink href="https://reactjs.org/">React</TextLink>, developing
          back-end services with&nbsp;
          <TextLink href="https://spring.io/">Java Spring boot</TextLink>,
          designing database with&nbsp;
          <TextLink href="https://www.mysql.com/">Mysql</TextLink>
          &nbsp;and deploying services to&nbsp;
          <TextLink href="https://aws.amazon.com/elasticbeanstalk/">
            AWS Elastic Beanstalk
          </TextLink>
          .
        </p>
      </Box>
    </Box>
  );
};

export default AboutMe;
