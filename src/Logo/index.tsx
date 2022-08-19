import styled from "styled-components";
import logo from "../../assets/logo.svg";

const LogoImg = styled.img`
  width: 126px;
  height: 48px;
`;

export const Logo = () => {
  return <LogoImg src={logo}></LogoImg>;
};
