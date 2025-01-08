import styled from "styled-components";
import { color, fonts } from "../style";

interface ITodoType {
  check: boolean;
  content: string;
}

interface TodoProps {
  todo: ITodoType;
}

export const TodoItem = ({ todo }: TodoProps) => {
  const { check, content } = todo;

  return (
    <TodoItemContainer>
      <CheckBox checked={check} />
      <ContentContainer>{content}</ContentContainer>
    </TodoItemContainer>
  );
};

const ContentContainer = styled.div`
  font-size: ${fonts.body[3]};
  color: ${color.gray[500]};
  width: 240px;
  height: 20px;
  overflow: hidden;
  white-space: nowrap;
`;

const CheckBox = styled.input.attrs({ type: "checkbox" })`
  width: 14px;
  height: 14px;
  appearance: none;
  border: 3px solid ${color.primary[500]};
  border-radius: 3px;
  cursor: pointer;

  &:checked {
    background-color: ${color.primary[500]};
    position: relative;
  }

  &:checked::after {
    content: "";
    position: absolute;
    width: 4px;
    height: 8px;
    border: 1px solid ${color.interactive.white};
    border-width: 0 2px 2px 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%) rotate(45deg);
  }
`;

const TodoItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 4px;
  gap: 8px;
`;
