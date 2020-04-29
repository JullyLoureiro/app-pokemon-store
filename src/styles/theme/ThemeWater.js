import React from "react";
import { ThemeProvider } from "styled-components";
import {water, white, gray} from '../colors/paleta'
// import Quicksand from './fonts/Quicksand-Regular.ttf';

const theme = {
  colors: {
    colorPrimary: water,
    white: white,
    gray: gray
  },
  fonts: ["Century Gothic","sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme} >
        {children}
    </ThemeProvider>
);

export default Theme;