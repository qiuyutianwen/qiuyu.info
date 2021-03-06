import React from "react";
import PropTypes from "prop-types";
import { Link, useColorMode } from "@chakra-ui/react";
import { BsCodeSlash } from "react-icons/bs";
import { FaChrome } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { RiSlideshow3Line, RiFilePptLine } from "react-icons/ri";

const TextLink = (props) => {
  const { colorMode } = useColorMode();
  const { href, children } = props;
  return (
    <Link
      href={href}
      target="_blank"
      style={{
        color: colorMode === "light" ? "black" : "white",
        backgroundColor: colorMode === "light" ? "#f5e8bb" : "#6e2811",
      }}
      _hover={{
        textDecoration: "none",
        backgroundColor:
          colorMode === "light" ? "#eeda90 !important" : "#9a3918 !important",
      }}
      _focus={{ outline: 0 }}
    >
      {children}
    </Link>
  );
};

TextLink.propTypes = {
  children: PropTypes.string,
  href: PropTypes.string,
};

TextLink.defaultProps = {
  children: "",
  href: "",
};

export const IconTextLink = (props) => {
  const { title, iconType, href } = props;

  let icon;
  const iconStyle = {
    marginLeft: "25px",
    marginRight: "10px",
    display: "inline-block",
    position: "relative",
    bottom: "2px",
  };

  switch (iconType) {
    case "CODE":
      icon = <BsCodeSlash style={iconStyle} />;
      break;
    case "DEMO":
      icon = <RiSlideshow3Line style={iconStyle} />;
      break;
    case "WEBSITE":
      icon = <FaChrome style={iconStyle} />;
      break;
    case "PAPER":
      icon = <FiFileText style={iconStyle} />;
      break;
    case "PPT":
      icon = <RiFilePptLine style={iconStyle} />;
      break;
    default:
      break;
  }

  return (
    <span style={{ fontSize: "90%", fontFamily: "Larsseit" }}>
      {icon}
      <TextLink style={{ display: "inline-block" }} href={href}>
        {title}
      </TextLink>
    </span>
  );
};

IconTextLink.propTypes = {
  title: PropTypes.string,
  iconType: PropTypes.string,
  href: PropTypes.string,
};

IconTextLink.defaultProps = {
  title: "",
  iconType: "",
  href: "",
};

export default TextLink;
