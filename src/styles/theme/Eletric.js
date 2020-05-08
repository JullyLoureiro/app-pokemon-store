import React from "react";
import { ThemeProvider } from "styled-components";
import {eletric, white, gray} from '../colors/paleta'

const theme = {
  colors: {
    colorPrimary: eletric,
    gradiente: 'linear-gradient(to bottom right, #ffcc00, #ffdb4d)', 
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