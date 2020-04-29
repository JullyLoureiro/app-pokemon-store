import styled from "styled-components"


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.colors.gray};
  font-family: ${props => props.theme.fonts[0]};
`;

export const SearchBar = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.colorPrimary};
  font-family: ${props => props.theme.fonts[0]};
  overflow: hidden;
`;

export const SearchContainer = styled.div`
  font-family: ${props => props.theme.fonts[0]};
  overflow: hidden;
  margin: 10px;
  height: 40px;
`;


export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-family: ${props => props.theme.fonts[0]};
  border-radius: 5px;
  border: 1px solid #fff;
`;

// export const Teste = styled.div`
//   width: 100%;
//   border: ${props => `1px solid ${props.theme.colors.colorPrimary}`};
//   font-family: ${props => props.theme.fonts[0]};
// `;

// export const Heading = styled.h1`
//   font-size: ${({ isHeading, theme: { fontSizes } }) => isHeading ? fontSizes.large : fontSizes.small};
//   color: ${({ theme: { colors } }) => colors.fire};
// `;
