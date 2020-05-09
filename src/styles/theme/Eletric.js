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
  colorCard: white, 
  radius: 5,
  fonts: ["Malgun Gothic","Arial", "Roboto"],
  borderLeft: `3px solid ${eletric}`, 
  borderRight: `none}`, 
  borderTop: `none`, 
  borderBottom: `none`, 
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