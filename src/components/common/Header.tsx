import styled from "styled-components";
import { fonts } from "../../style/themes/fonts";
import { color } from "../../style/themes/color";
import logo from "../../assets/icons/logo/headerLogo.svg";

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo" />
      <NavContainer>
        <NavContent $isColor={false}>Project</NavContent>
        <NavContent $isColor={false}>Schedule</NavContent>
        <NavContent $isColor={false}>Chat</NavContent>
        <NavContent $isColor={false}>Document</NavContent>
      </NavContainer>
      <NavContent $isColor={true}>Login</NavContent>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
`;

const NavContainer = styled.nav`
  display: flex;
  gap: 16px;
`;

const NavContent = styled.button<{ $isColor: boolean }>`
  width: 102px;
  height: 60px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${fonts.body[1].fontSize};
  font-weight: ${fonts.body[1].fontWeight};
  line-height: ${fonts.body[1].lineHeight};
  color: ${({ $isColor }) => ($isColor ? color.primary[500] : color.gray[400])};
`;
