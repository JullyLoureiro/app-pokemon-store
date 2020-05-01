import styled from "styled-components"


export const Container = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.gray};
  font-family: ${props => props.theme.fonts[0]};
  overflow: hidden;
`;

export const SearchBar = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts[0]};
  overflow: hidden;
  border-bottom: solid 1px #E2E2E2;
  position: fixed;
  z-index: 99999;

`;

export const SearchContainer = styled.div`
  font-family: ${props => props.theme.fonts[0]};
  overflow: hidden;
  margin: 10px;
  height: 60px;
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
  &:hover {
    box-shadow: 0px 5px 5px 5px rgba(174, 180, 185,.2);
  }
`;

export const CardBag = styled.div`
  font-family: ${props => props.theme.fonts[0]};
  height: 60px;
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.white};
  border-radius: 5px;
  box-shadow: 0px 0px 15px rgba(174, 180, 185,.3);
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    box-shadow: 0px 5px 5px 5px rgba(174, 180, 185,.2);
  }
`;

export const CardShop = styled.div`
  font-family: ${props => props.theme.fonts[0]};
  height: calc(100% - 100px) ;
  position: fixed;
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
`;

export const InfoCard = styled.div`
  font-family: ${props => props.theme.fonts[0]};
  text-align: center;
  display: flex;
  flex-direction: column;
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
  z-index: 999999;
  transition: width 2s, height 2s;
  &:hover {
    opacity: 0.9;
  }
  .textTotal{
    display: none;
  }
`;

export const ImgPokemon = styled.img`
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BagImgPokemon = styled.img`
    width: 50px;
    height: 50px;
`;


export const Button = styled.button`
    height: 40px;
    background-color:  ${props => props.theme.colors.colorPrimary};
    widht: 100%;
    border-radius: 5px;
    border: none;
    color: #fff;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
`;

export const DivOptions = styled.div`
    position: fixed;
    z-index: 99999999;
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
        z-index:99999;
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
