import styled from "styled-components";
import { Header } from "../components/common";
import { fonts } from "../style/themes/fonts";
import { color } from "../style/themes/color";
import { Inputs } from "../components/common/Inputs";
import { useState } from "react";
import { Button } from "../components/common/Button";

interface isInput {
  id: string;
  password: string;
}
export const Login = () => {
  const [input, setInput] = useState<isInput>({
    id: "",
    password: "",
  });
  const [isId, setIsId] = useState<boolean>(false);
  const [isPsw, setIsPsw] = useState<boolean>(false);

  const [isAllFilled, setIsAllFilled] = useState<boolean>(false);

  const { id, password } = input;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const isBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const isFilled = Object.values(input).every((val) => val.trim() !== "");
    setIsAllFilled(isFilled);
    if (name === "id") {
      if (value !== "") {
        setIsId(true);
      } else {
        setIsId(false);
      }
    } else {
      if (value !== "") {
        setIsPsw(true);
      } else {
        setIsPsw(false);
      }
    }
  };

  return (
    <>
      <Header />
      <LoginContainer>
        <LoginContents>
          <div>
            <Title>로그인</Title>
            <SubTitle>로그인하여 다양한 기능을 사용해보세요.</SubTitle>
          </div>
          <InputAllContainer>
            <InputContainer>
              <Inputs
                placeholder="아이디 입력"
                name="id"
                value={id}
                onchange={handleChange}
                onblur={isBlur}
                children="존재하지 않는 아이디입니다."
                isExplain={isId}
              />
            </InputContainer>
            <InputContainer>
              <Inputs
                placeholder="비밀번호 입력"
                name="password"
                value={password}
                onchange={handleChange}
                isPwd={true}
                onblur={isBlur}
                children="비밀번호가 일치하지 않습니다."
                isExplain={isPsw}
              />
            </InputContainer>
          </InputAllContainer>
          <FooterContainer>
            <Button children="로그인" isColor={isAllFilled} />
            <SignUpContainer>
              <SignUpTitle>아직 가입하지 않으셨나요?</SignUpTitle>
              <SignUpNav>회원가입</SignUpNav>
            </SignUpContainer>
          </FooterContainer>
        </LoginContents>
      </LoginContainer>
    </>
  );
};

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  margin-top: 130px;
`;

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const SignUpContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const SignUpNav = styled.a`
  color: ${color.primary[500]};
  font-size: ${fonts.body[3].fontSize};
  font-weight: ${fonts.body[3].fontWeight};
  line-height: ${fonts.body[3].lineHeight};
  text-decoration: underline;
  cursor: pointer;
`;

const SignUpTitle = styled.div`
  font-size: ${fonts.body[3].fontSize};
  font-weight: ${fonts.body[3].fontWeight};
  line-height: ${fonts.body[3].lineHeight};
`;

const LoginContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  width: 512px;
`;

const InputAllContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const InputContainer = styled.div`
  height: 60px;
`;

const Title = styled.div`
  font-size: ${fonts.heading[2].fontSize};
  font-weight: ${fonts.heading[2].fontWeight};
  line-height: ${fonts.heading[2].lineHeight};
  color: ${color.primary[500]};
  margin-bottom: 4px;
`;

const SubTitle = styled.div`
  font-size: ${fonts.body[1].fontSize};
  font-weight: ${fonts.body[1].fontWeight};
  line-height: ${fonts.body[1].lineHeight};
  color: ${color.gray[500]};
`;
