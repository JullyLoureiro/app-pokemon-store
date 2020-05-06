import styled from "styled-components"

// CONTAINERS
export const Container = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.gray};
  font-family: ${props => props.theme.fonts[0]};
  overflow: hidden;
 
`;

export const HomeContainer = styled.div`
  
`;

export const CardContainer = styled.div`
  font-family: ${props => props.theme.fonts[0]};
`;

export const SearchContainer = styled.div`
  font-family: ${props => props.theme.fonts[0]};
  overflow: hidden;
  margin: 10px;
  height: 60px;
`;

export const ContainerShop = styled.div`
  cursor: pointer;
  display: flex; 
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  text-align: center;
  border-radius: 50px;
  background-color: ${props => props.theme.colors.colorPrimary};
  color: #fff;
  position: fixed;
  bottom: 20px;
  box-shadow: 10px 10px 15px rgba(174, 180, 185,.3);
  right: 20px;
  z-index: 50;
  transition: width 2s, height 2s;
  &:hover {
    opacity: 0.9;
  }
  .textTotal{
    display: none;
  }
`;


// SEARCH 
export const SearchBar = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts[0]};
  overflow: hidden;
  border-bottom: solid 1px #E2E2E2;
  position: fixed;
  z-index: 100;

`;

export const Input = styled.input`
  width: 100%;
  font-family: ${props => props.theme.fonts[0]};
  border-radius: 5px;
  height: 50px;
  padding-left: 10px;
  font-sze: 20px;
  border: 1px solid ${props => props.theme.colors.white};
  &:hover{
    background:#EBEBEB;
  }
`;

// CARDS
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
  &:hover {
    box-shadow: 0px 5px 5px 5px rgba(174, 180, 185,.2);
  }
`;

export const CardBag = styled.div`
  font-family: ${props => props.theme.fonts[0]};
  height: 60px;
  background-color: ${props => props.theme.colors.white};
  border-left: 3px solid ${props => props.theme.colors.colorPrimary};
  border-radius: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 15px rgba(174, 180, 185,.3);
  margin: 5px;
  &:hover {
    box-shadow: 0px 5px 5px 5px rgba(174, 180, 185,.2);
  }
`;

export const CardShop = styled.div`
  font-family: ${props => props.theme.fonts[0]};
  height: calc(100% - 100px) ;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  width: calc(25% - 25px);
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.white};
  border-radius: 5px;
  box-shadow: 0px 0px 15px rgba(174, 180, 185,.3);
  margin: 10px;
  padding: 10;
  &:hover {
    box-shadow: 0px 5px 5px 5px rgba(174, 180, 185,.2);
  }
  @media only screen and (max-width: 600px) {
    display: none;
  }

`;

//Modal de carrinho para celular
export const ModalBag = styled.div`  
    display: none;
    @media (max-width: 960px){
        display: flex;
        width: 100%;
        height: 90%;
        flex-direction: column;
        bottom: 0;
        position: fixed;
        background-color:  #fff;
        flex: 1;
        justify-content: space-between;
        align-items: space-between;
        box-shadow: 0px 5px 5px 5px rgba(174, 180, 185,.2);
        border-radius: 5px;
        z-index: 200;
    }
`;

// HEADER
export const HeaderBag = styled.div`
    display: flex;
    background-color: ${props => props.theme.colors.colorPrimary};
    justify-content: space-between;
    padding: 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`;

// INFO CARD
export const InfoCard = styled.div`
  font-family: ${props => props.theme.fonts[0]};
  text-align: center;
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  .price{
    margin-bottom:20px;
  }
  .iconPhotos{
    display: flex;
    width: 100%;
    margin: 5px;
    justify-content: flex-end;
  }
`;


// IMAGES
export const BagImgPokemon = styled.img`
    width: 50px;
    height: 50px;
`;

// BUTTON
export const Button = styled.button`
    height: 40px;
    background-color: #EBEBEB;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border: none;
    width: 100%;
    font-size: 18px;
    font-weight: bold;
    color:  ${props => props.theme.colors.colorPrimary};
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
`;

//Total do carrinho
export const Total = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 15px;
    font-size: 17px;
    font-weight: bold;   
`;

//Título do carrinho
export const TitleBag = styled.div`
    color: #fff;
`;

//Quantidade de itens no carrinho
export const QtdItems = styled.div`
    margin: 10px;
    display: flex;
    justify-content: flex-end;
`;

//Select com opções de loka
export const DivOptions = styled.div`
    position: fixed;
    z-index: 100;
    top: 4px;
    right: 4px;
    border-radius: 4px;
    height: 56px;
    float:right;
    box-sizing:border-box;
    padding: 0 0 0 8px;
    transition: all .2s ease;
    cursor: pointer;
    &:hover{
        background:#EBEBEB;
        box-shadow: 0 1px 3px rgba(0,0,0,.16);
        border-radius: 4px 4px 0 0;
    }

    .content{
        position:absolute;
        right:0;
        top:56px;
        height:0;
        opacity:0;
        overflow:hidden;
        width: 100%;   
        background: #fff;
        transition: all .2s ease;
        box-sizing: border-box;
        z-index: 100;
    }
    &:hover .content{
        opacity:1;
        height: auto;
        border-radius: 4px;
        box-shadow: 0 1px 3px rgba(0,0,0,.3); 
    }
    
    > div{
        display: inline-block;
        position: relative;
        top: 50%;
    }

    .info{
        width:200px;
        text-align:right;
        margin-right: 10px;
        transform: translateY(-45%);
        transition:all .2s ease;
        h5, h6{
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-weight: 400;
        }

        h5{
            font-size:16px;
            margin-block-end: 0;
            margin-top: 5px;
            font-weight: 500;
        }
        h6{
            font-size:14px;
            color:#666666;
            margin-block-start:0;
            overflow: hidden;
        }
    }

    .MuiAvatar-root, .avatar, .sb-avatar{
        background:#666666;
        transform: translateY(-60%);
    }
    .sb-avatar{
        border-radius: 50%;
        overflow: hidden;
        transform: translateY(-100%);
    }
    .MuiSvgIcon-root{
        transform:translateY(-23px);
        transform: translateY(-50%);
        color:#767676;
    }

    @media (max-width:576px){
        .info{
            /* display:none; */
            width: 0;
            overflow: hidden;
        }

        .content{
            min-width:fit-content;
            max-width: 90vw;
            right: 5px;
            position:fixed;
        }
    }

`;

// export const Heading = styled.h1`
//   font-size: ${({ isHeading, theme: { fontSizes } }) => isHeading ? fontSizes.large : fontSizes.small};
//   color: ${({ theme: { colors } }) => colors.fire};
// `;
