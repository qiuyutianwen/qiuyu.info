import { theme } from "@chakra-ui/react";

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    brand: {
      text: "#333333",
      primary: "#00bbcc",
      secondary: "#9b175e",
    },
  },
};

export default customTheme;
