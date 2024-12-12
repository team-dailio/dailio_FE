import styled from "styled-components";
import { color } from "../../style/themes/color";
import { fonts } from "../../style/themes/fonts";

interface isButton {
  children: string;
  isColor?: boolean;
  onclick?: () => void;
}

export const Button = ({ children, isColor = false, onclick }: isButton) => {
  return (
    <ButtonContainer isColor={isColor} onClick={onclick}>
      {children}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button<{ isColor: boolean }>`
  width: 100%;
  padding: 12px 43.5px;
  border-radius: 12px;
  box-shadow: 0 0 8px 0 #00000040;
  background-color: ${({ isColor }) => (isColor ? color.primary[500] : color.primary[100])};
  color: ${({ isColor }) => (isColor ? color.primary[100] : color.primary[500])};
  font-size: ${fonts.body[1].fontSize};
  font-weight: ${fonts.body[1].fontWeight};
  line-height: ${fonts.body[1].lineHeight};
  opacity: ${({ isColor }) => (isColor ? "1" : "0.4")};
`;
