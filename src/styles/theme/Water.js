import React from "react";
import { ThemeProvider } from "styled-components";
import {water, white, gray, grayDark} from '../colors/paleta'

const theme = {
  colors: {
    colorPrimary: water,
    gradiente: 'linear-gradient(to bottom right, #3366ff, #6495ED)', 
    white: white,
    gray: gray
  },
  colorCard: grayDark, 
  radius: 5,
  fonts: ["Malgun Gothic","Arial", "Roboto"],
  borderLeft: `none`, 
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
    <ThemeProvider theme={theme} >
        {children}
    </ThemeProvider>
);

export default Theme;