import styled from "styled-components";
import { fonts } from "../../style/themes/fonts";
import { color } from "../../style/themes/color";
import logo from "../../assets/icons/logo/headerLogo.svg";
import { useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const loginClick = () => {
    if (pathname === "/login") {
      window.location.reload();
    } else {
      navigate("/login");
    }
  };

  return (
    <HeaderContainer>
      <img src={logo} alt="logo" />
      <NavContainer>
        <NavContent>Project</NavContent>
        <NavContent>Schedule</NavContent>
        <NavContent>Chat</NavContent>
        <NavContent>Document</NavContent>
      </NavContainer>
      <LoginContent onClick={loginClick}>Login</LoginContent>
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

const NavContent = styled.button`
  width: 102px;
  height: 60px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${fonts.body[1].fontSize};
  font-weight: ${fonts.body[1].fontWeight};
  line-height: ${fonts.body[1].lineHeight};
  color: ${color.gray[400]};
`;

const LoginContent = styled(NavContent)`
  color: ${color.primary[500]};
`;
