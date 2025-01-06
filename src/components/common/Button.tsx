import styled from "styled-components";
import { color, fonts } from "../../style";

interface isButton {
  children: string;
  isColor?: boolean;
  isCancel?: boolean;
  onclick?: () => void;
}

export const Button = ({ children, isColor = false, isCancel = false, onclick }: isButton) => {
  return isCancel ? (
    <CancelButton onClick={onclick} type="button">
      {children}
    </CancelButton>
  ) : (
    <ButtonContainer isColor={isColor} onClick={onclick} type="button">
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
  font-size: ${fonts.body[2].fontSize};
  font-weight: ${fonts.body[2].fontWeight};
  line-height: ${fonts.body[2].lineHeight};
  opacity: ${({ isColor }) => (isColor ? "1" : "0.4")};
`;

const CancelButton = styled.button`
  width: 100%;
  padding: 12px 43.5px;
  border-radius: 12px;
  font-size: ${fonts.body[2].fontSize};
  font-weight: ${fonts.body[2].fontWeight};
  line-height: ${fonts.body[2].lineHeight};
  background-color: ${color.interactive.white};
  color: ${color.primary[500]};
  border: 1px solid ${color.primary[500]};
`;
