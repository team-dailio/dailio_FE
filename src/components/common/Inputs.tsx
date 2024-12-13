import styled from "styled-components";
import { color } from "../../style/themes/color";
import { fonts } from "../../style/themes/fonts";
import React, { useState } from "react";
import openEye from "../../assets/icons/openEye.svg";
import closeEye from "../../assets/icons/closeEye.svg";
import drop from "../../assets/icons/drop.svg";

interface isInputs {
  placeholder?: string;
  isPwd?: boolean;
  isDrop?: boolean;
  onblur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  children?: string;
  isExplain?: boolean;
}

export const Inputs = ({
  placeholder,
  isPwd,
  isDrop,
  onblur,
  value,
  onchange,
  name,
  children,
  isExplain,
}: isInputs) => {
  const [isType, setIsType] = useState<boolean>(false);
  const [viewDrop, setViewDrop] = useState<boolean>(false);
  const [isAddress, setIsAddress] = useState<string>(value);

  const eyeClick = () => {
    setIsType(!isType);
  };

  const dropClick = () => {
    setViewDrop(!viewDrop);
  };

  const dropUnClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setViewDrop(false);
    const selectedValue = e.currentTarget.innerText;
    setIsAddress(selectedValue);
    if (onchange) {
      onchange({
        target: { name, value: selectedValue } as HTMLInputElement,
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <>
      <ExplainContainer>
        <FakeInput>
          <InputContainer
            name={name}
            placeholder={placeholder}
            type={isType ? "password" : "text"}
            onBlur={onblur}
            value={value}
            onChange={onchange}
            isExplain={isExplain}
          />
          {isPwd && <Icon src={isType ? closeEye : openEye} alt="open" onClick={eyeClick} />}
          {isDrop && <Icon src={drop} alt="open" onClick={dropClick} />}
        </FakeInput>
        {isExplain && <Explain>{children}</Explain>}
      </ExplainContainer>
      {viewDrop && (
        <DropContainer>
          <DropContent onClick={dropUnClick}>gmail.com</DropContent>
          <DropContent onClick={dropUnClick}>naver.com</DropContent>
          <DropContent onClick={dropUnClick}>kakao.com</DropContent>
          <DropContent onClick={dropUnClick}>daum.net</DropContent>
          <DropContent onClick={dropUnClick}>직접입력</DropContent>
        </DropContainer>
      )}
    </>
  );
};

const Explain = styled.div`
  font-size: ${fonts.caption[1].fontSize};
  font-weight: ${fonts.caption[1].fontWeight};
  line-height: ${fonts.caption[1].lineHeight};
  color: ${color.interactive.error};
`;

const ExplainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const DropContent = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.interactive.white};
  &:hover {
    background-color: ${color.primary[100]};
  }
`;

const DropContainer = styled.div`
  position: absolute;
  z-index: 1;
  width: 194px;
  height: 217px;
  border-radius: 12px;
  border: 1px solid ${color.gray[200]};
  overflow: scroll;
  background-color: ${color.interactive.white};
`;

const FakeInput = styled.div`
  width: 100%;
  height: 48px;
  position: relative;
  display: flex;
  gap: 5px;
  flex-direction: column;
`;

const Icon = styled.img`
  position: absolute;
  width: 20px;
  right: 12px;
  top: 12px;
  cursor: pointer;
`;

const InputContainer = styled.input<{ isExplain: boolean }>`
  width: 100%;
  padding: 12px 10px;
  border-radius: 12px;
  border: 1px solid ${({ isExplain }) => (isExplain ? color.interactive.error : color.gray[500])};
  & ::placeholder {
    color: ${color.gray[300]};
    font-size: ${fonts.body[1].fontSize};
    font-weight: ${fonts.body[1].fontWeight};
    line-height: ${fonts.body[1].lineHeight};
  }
`;
