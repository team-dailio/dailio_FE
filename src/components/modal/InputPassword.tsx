import React, { useState } from "react";
import styled from "styled-components";
import { color, fonts } from "../../style";
import { Inputs } from "../common/Inputs";
import { Button } from "../common/Button";
import Modal from "react-modal";
Modal.setAppElement("#root");
Modal.defaultStyles.overlay = {};
Modal.defaultStyles.content = {};

type ModalInputPWProps = {
  isOpen: boolean;
  onCancel?: () => void;
};

export const InputPassword = ({ isOpen, onCancel }: ModalInputPWProps) => {
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [isPsw, setIsPsw] = useState<boolean>(false);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setIsEmpty(value.trim() !== "");
    if (password !== "") {
      // 비밀번호 일치 확인
    }
  };

  const handlePswChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
  };

  const handleCancel = () => {};

  return (
    <Modal style={ModalStyle} className="modal-content" overlayClassName="modal-overlay" isOpen={isOpen}>
      <TitleContainer>
        <PWTitle>비밀번호 입력</PWTitle>
        <PWContent>정보 보호를 위해 비밀번호를 입력해주세요</PWContent>
      </TitleContainer>
      <PswContainer>
        <Inputs
          placeholder="비밀번호 입력 (영어, 숫자, 특수문자, 5자 이상)"
          isPwd={true}
          onblur={handleBlur}
          onchange={handlePswChange}
          value={password}
          name="password"
          isExplain={isPsw}
          children="비밀번호가 일치하지 않습니다."
        />
      </PswContainer>
      <ButtonContainer>
        <Button children="취소" isCancel={true} onclick={onCancel} />
        <Button children="확인" isColor={true} />
      </ButtonContainer>
    </Modal>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  gap: 16px;
`;

const PswContainer = styled.div`
  margin-top: 36px;
`;

const PWContent = styled.div`
  font-size: ${fonts.body[2]};
  color: ${color.gray[400]};
`;

const PWTitle = styled.div`
  font-size: ${fonts.heading[4]};
  font-weight: bold;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const ModalStyle: ReactModal.Styles = {
  overlay: {
    backgroundColor: `rgba(0,0,0,0.6)`,
    width: "100%",
    height: "100vh",
    zIndex: "10",
    position: "fixed",
    top: "0",
    left: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: " center",
  },
  content: {
    position: "absolute",
    width: "40%",
    minWidth: "360px",
    height: "350px",
    opacity: "1",
    zIndex: "9999",
    backgroundColor: `${color.gray[100]}`,
    border: "none",
    borderRadius: "16px",
    outline: "none",

    display: "flex",
    flexDirection: "column",
    padding: "40px 32px",
  },
};
