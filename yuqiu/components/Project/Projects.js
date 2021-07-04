import React from "react";
import { Box, useColorMode } from "@chakra-ui/react";
import LineText from "../LineText";
import raProject from "./RAproject";
import eventSearch from "./EventSearchMultiplatform";
import emailFeedback from "./EmailFeedback";
import bitcorner from "./Bitcorner";
import fancyMarket from "./FancyMarket";
import housing from "./Housing";

const Projects = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      width="100%"
      paddingTop="25px"
      paddingBottom="25px"
      backgroundColor={colorMode === "light" ? "gray.100" : "gray.800"}
    >
      <Box
        maxWidth="750px"
        paddingTop="25px"
        margin="0 auto"
        style={{ fontFamily: "LeituraNews-Roman2", textAlign: "justify" }}
      >
        <LineText>Projects</LineText>
        {raProject}
        {eventSearch}
        {bitcorner}
        {emailFeedback}
        {housing}
        {fancyMarket}
      </Box>
    </Box>
  );
};

export default Projects;
