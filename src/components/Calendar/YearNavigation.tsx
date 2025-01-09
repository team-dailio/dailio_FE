import { useState } from "react";
import styled from "styled-components";
import { color, fonts } from "../../style";

export const YearSelector = () => {
  const [date, setDate] = useState(new Date());

  const goToPreviousMonth = () => {
    setDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  };

  const goToNextMonth = () => {
    setDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };

  const formatDate = (date: Date) => {
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.toLocaleString("en-US", { year: "numeric" });
    return `${month}, ${year}`;
  };

  return (
    <StyledNavigationContainer>
      <StyledNavigationButton onClick={goToPreviousMonth} aria-label="Previous month">
        ‹
      </StyledNavigationButton>
      <StyledNavigationLabel>{formatDate(date)}</StyledNavigationLabel>
      <StyledNavigationButton onClick={goToNextMonth} aria-label="Next month">
        ›
      </StyledNavigationButton>
    </StyledNavigationContainer>
  );
};

const StyledNavigationContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledNavigationButton = styled.button`
  min-width: 36px;
  background: none;
  font-size: 24px;
  font-weight: bold;
  color: ${color.primary[500]};
  font-size: ${fonts.heading[2]};

  &:disabled {
    background: none;
  }

  &:focus {
    background: none;
  }

  &:hover {
    background: ${color.interactive.white};
  }
`;

const StyledNavigationLabel = styled.span`
  font-weight: bold;
  color: ${color.primary[500]};
  text-transform: none;
  font-size: ${fonts.heading[2]};

  &:hover {
    color: ${color.primary[400]};
  }
`;
