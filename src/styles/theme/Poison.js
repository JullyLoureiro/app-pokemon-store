import React from "react";
import { ThemeProvider } from "styled-components";
import {poison, white, gray, grayDark} from '../colors/paleta'

const theme = {
  colors: {
    colorPrimary: poison,
    gradiente: 'linear-gradient(to bottom right, #8600b3, #ac00e6)', 
    white: white,
    gray: gray
  },
  colorCard: white, 
  radius: 5,
  fonts: ["Malgun Gothic","Arial", "Roboto"],
  borderLeft: `1px solid ${poison}`, 
  borderRight: `1px solid ${poison}`, 
  borderTop: `1px solid ${poison}`, 
  borderBottom: `1px solid ${poison}`, 
  boxShadow: `0px 5px 5px 5px rgba(174, 180, 185,.2)`,
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