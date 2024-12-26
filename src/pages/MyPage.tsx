import styled from "styled-components";
import { Header } from "../components/common/_index";
import { MainCalendar, SideCalendar, TodoItem } from "../components";
import { color, fonts } from "../style";
import Profil from "../assets/icons/profil.svg";
import Edit from "../assets/icons/edit.svg";
import { useState } from "react";

interface ITodoType {
  check: boolean;
  content: string;
}

export const MyPage = () => {
  const [todos, setTodos] = useState<ITodoType[]>([
    {
      check: false,
      content: "디자인하기",
    },
    {
      check: false,
      content: "디자인하기1",
    },
    {
      check: false,
      content: "디자인하기2",
    },
    {
      check: true,
      content: "디자인하기3",
    },
  ]);

  return (
    <>
      <Header />
      <MyPageAll>
        <ProfileBar>
          <MainProfil>
            <div>
              <ProfilContainer>
                <ProfilImg>
                  <img src={Profil} alt="프로필 이미지" />
                </ProfilImg>
                <EditButton>
                  <img src={Edit} alt="✏️" />
                </EditButton>
              </ProfilContainer>
              <UserName>jykim01</UserName>
            </div>
          </MainProfil>
          <ButtonContainer>
            <LogoutBtn>Logout</LogoutBtn>
            <DelField>Delete Account</DelField>
          </ButtonContainer>
        </ProfileBar>
        <MainCalendar />
        <RightBar>
          <SideCalendar />
          {/* 현재 날짜에 해당하는 TodoList만 표시됨, 날짜를 변경하고 싶다면 SideCalendar이용  */}
          <TodoContainer>
            <TodoTitle>TO DO LIST</TodoTitle>
            <TodoList>
              {todos.map((todo, index) => (
                <TodoItem key={index} todo={todo} />
              ))}
            </TodoList>
          </TodoContainer>
        </RightBar>
      </MyPageAll>
    </>
  );
};

const TodoTitle = styled.h3`
  font-size: ${fonts.body[1]};
  color: ${color.gray[500]};
  overflow-y: hidden;
`;

const TodoList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TodoContainer = styled.div`
  width: 75%;
  height: 420px;
  margin-top: 25px;
  background-color: ${color.gray[100]};
  padding: 8px;
  border-radius: 16px;
`;

const RightBar = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 18px 0;
  margin-top: 5%;
`;

const DelField = styled.div`
  font-size: ${fonts.body[1]};
  padding: 12px 43.5px;
  color: ${color.gray[400]};
  text-align: center;
  cursor: pointer;

  &:hover {
    color: ${color.interactive.error};
  }
`;

const LogoutBtn = styled.button`
  width: 100%;
  padding: 12px 43.5px;
  border-radius: 12px;
  background-color: ${color.interactive.white};
  border: 1px solid ${color.primary[500]};
  color: ${color.primary[500]};
  font-size: ${fonts.body[2].fontSize};
  font-weight: ${fonts.body[2].fontWeight};
  line-height: ${fonts.body[2].lineHeight};

  &:hover {
    background-color: ${color.primary[500]};
    color: ${color.interactive.white};
    transition: 0.3s;
  }
`;

const ButtonContainer = styled.div`
  height: 120px;
  border-top: 1px solid ${color.gray[200]};
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ProfilContainer = styled.div`
  position: relative;
  margin-top: 32px;
`;

const ProfilImg = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${color.gray[200]};
  overflow: hidden;

  img {
    width: 50%;
    height: 50%;
    object-fit: cover;
  }
`;

const EditButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${color.primary[500]};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px;

  &:hover {
    background-color: ${color.primary[400]};
  }

  img {
    width: 16px;
    height: 16px;
  }
`;

const UserName = styled.p`
  font-size: ${fonts};
  color: ${color.gray[500]};
  margin-top: 16px;
  text-align: center;
`;

const MainProfil = styled.div`
  height: 220px;
  border-bottom: 1px solid ${color.gray[200]};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MyPageAll = styled.div`
  display: flex;
`;

const ProfileBar = styled.div`
  width: 280px;
  height: 700px;
  background-color: ${color.gray[100]};
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
