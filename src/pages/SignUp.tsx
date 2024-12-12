import styled from "styled-components";
import { Header } from "../components/common";
import { fonts } from "../style/themes/fonts";
import { color } from "../style/themes/color";
import { Button } from "../components/common/Button";
import { Inputs } from "../components/common/Inputs";
import React, { useState } from "react";
import { PasswordRegex } from "../regex/Regex";

interface isInput {
  id: string;
  password1: string;
  password2: string;
  email: string;
  address: string;
}

export const SignUp = () => {
  const [idEmpty, setIdEmpty] = useState<boolean>(false);
  const [input, setInput] = useState<isInput>({
    id: "",
    password1: "",
    password2: "",
    email: "",
    address: "",
  });
  const [isAllFilled, setIsAllFilled] = useState<boolean>(false);
  const [isId, setIsId] = useState<boolean>(false);
  const [isPsw1, setIsPsw1] = useState<boolean>(false);
  const [isPsw2, setIsPsw2] = useState<boolean>(false);
  const { id, password1, password2, email, address } = input;

  const idCheck = () => {
    setIsId(true); //id 중복 확인 api 불러오기
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "id") {
      setIdEmpty(value.trim() !== "");
    }
    if (input.password1 !== "") {
      if (!PasswordRegex.test(input.password1)) {
        //password 정규식 체크
        setIsPsw1(true);
        console.log("no");
      } else {
        setIsPsw1(false);
        console.log("yes");
      }
    }

    if (input.password1 !== "" && input.password2 !== "") {
      if (input.password1 !== input.password2) {
        //password가 같은지 확인
        setIsPsw2(true);
      } else {
        setIsPsw2(false);
      }
    }
    const isFilled = Object.values(input).every((val) => val.trim() !== "");
    setIsAllFilled(isFilled);
  };

  return (
    <>
      <Header />
      <SignUpContainer>
        <SignUpContents>
          <TitleContainer>
            <Title>회원가입</Title>
            <SubTitle>회원가입을 통해 다양한 서비스를 즐겨보세요!</SubTitle>
          </TitleContainer>
          <InputsContainer>
            <IdContainer>
              <Inputs
                placeholder="아이디 입력 (5자 ~ 10자)"
                onblur={handleBlur}
                value={id}
                onchange={handleChange}
                name="id"
                isExplain={isId}
                children="이미 존재하는 아이디입니다."
              />
              <BtnContainer>
                <Button isColor={idEmpty} onclick={idCheck}>
                  중복 확인
                </Button>
              </BtnContainer>
            </IdContainer>
            <InputContainer>
              <Inputs
                placeholder="비밀번호 입력 (영어, 숫자, 특수문자, 5자 이상)"
                isPwd={true}
                onblur={handleBlur}
                value={password1}
                onchange={handleChange}
                name="password1"
                isExplain={isPsw1}
                children="5자 이상 영어, 숫자, 특수문자가 포함되어야 합니다."
              />
            </InputContainer>
            <InputContainer>
              <Inputs
                placeholder="비밀번호 재입력"
                isPwd={true}
                onblur={handleBlur}
                value={password2}
                onchange={handleChange}
                name="password2"
                isExplain={isPsw2}
                children="입력하신 비밀번호와 일치하지 않습니다."
              />
            </InputContainer>
            <EmailContainer>
              <Inputs
                placeholder="이메일 아이디 입력"
                onblur={handleBlur}
                value={email}
                onchange={handleChange}
                name="email"
              />
              <EmailIcon>@</EmailIcon>
              <AddressContainer>
                <Inputs
                  placeholder="이메일 주소 선택"
                  isDrop={true}
                  onblur={handleBlur}
                  value={address}
                  onchange={handleChange}
                  name="address"
                />
              </AddressContainer>
            </EmailContainer>
          </InputsContainer>
          <Button isColor={isAllFilled}>로그인</Button>
        </SignUpContents>
      </SignUpContainer>
    </>
  );
};

const InputContainer = styled.div`
  height: 60px;
`;

const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
`;

const SignUpContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  width: 512px;
`;

const AddressContainer = styled.div`
  width: 340px;
`;

const EmailIcon = styled.div`
  font-size: ${fonts.body[1].fontSize};
  font-weight: ${fonts.body[1].fontWeight};
  line-height: ${fonts.body[1].lineHeight};
`;

const EmailContainer = styled.div`
  display: flex;
  gap: 8px;
  display: flex;
  align-items: center;
`;

const InputsContainer = styled.div`
  width: 512px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const IdContainer = styled.div`
  display: flex;
  height: 60px;
  gap: 10px;
`;
const BtnContainer = styled.div`
  width: 216px;
`;

const TitleContainer = styled.header`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Title = styled.div`
  font-size: ${fonts.heading[2].fontSize};
  font-weight: ${fonts.heading[2].fontWeight};
  line-height: ${fonts.heading[2].lineHeight};
  color: ${color.primary[500]};
`;

const SubTitle = styled.div`
  font-size: ${fonts.body[1].fontSize};
  font-weight: ${fonts.body[1].fontWeight};
  line-height: ${fonts.body[1].lineHeight};
  color: ${color.gray[500]};
`;
