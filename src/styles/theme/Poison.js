import React from "react";
import { ThemeProvider } from "styled-components";
import {poison, white, gray} from '../colors/paleta'

const theme = {
  colors: {
    colorPrimary: poison,
    gradiente: 'linear-gradient(to bottom right, #8600b3, #ac00e6)', 
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