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
  colorCard: white,
  radius: 5,
  fonts: ["Malgun Gothic","Arial", "Roboto"],
  borderLeft: `none`, 
  borderRight: `none}`, 
  borderTop: `none`, 
  borderBottom: `none`, 
  boxShadow: `0px 5px 5px 0px rgba(207, 0, 15,.2)`,
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