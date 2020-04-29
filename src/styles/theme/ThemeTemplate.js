import styled from "styled-components"


export const Container = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.gray};
  font-family: ${props => props.theme.fonts[0]};
`;

export const SearchBar = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.colorPrimary};
  font-family: ${props => props.theme.fonts[0]};
  overflow: hidden;
  position: fixed;
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
  border: 1px solid ${props => props.theme.colors.white};
`;

export const CardContainer = styled.div`
  font-family: ${props => props.theme.fonts[0]};
`;

export const Card = styled.div`
  font-family: ${props => props.theme.fonts[0]};
  height: 250px;
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.white};
  border-radius: 5px;
  box-shadow: 0px 0px 15px rgba(174, 180, 185,.3);
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const CardCarrinho = styled.div`
  font-family: ${props => props.theme.fonts[0]};
  position: fixed;
  font-family: ${props => props.theme.fonts[0]};
  height: 100%;
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.white};
  border-radius: 5px;
  box-shadow: 0px 0px 15px rgba(174, 180, 185,.3);
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoCard = styled.div`
  font-family: ${props => props.theme.fonts[0]};
  text-align: center;
`;


export const ImgPokemon = styled.img`
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

// export const Heading = styled.h1`
//   font-size: ${({ isHeading, theme: { fontSizes } }) => isHeading ? fontSizes.large : fontSizes.small};
//   color: ${({ theme: { colors } }) => colors.fire};
// `;
