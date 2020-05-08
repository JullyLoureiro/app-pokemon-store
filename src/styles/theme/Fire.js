import React from "react";
import { ThemeProvider } from "styled-components";
import {fire, white, gray} from '../colors/paleta'

const theme = {
  colors: {
    colorPrimary: fire,
    gradiente: 'linear-gradient(to bottom right, #e60000, #ff5c33)', 
    white: white,
    gray: gray
  },
  radius: 5,
  fonts: ["Century Gothic","sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;