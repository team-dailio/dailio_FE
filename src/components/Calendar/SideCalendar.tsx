import { useState } from "react";
import { StyledCalendarWrapper, StyleCalendar } from "../Calendar/_SmallStyle";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export const SideCalendar = () => {
  const today = new Date();
  const [date, setDate] = useState<Value>(today);
  const [activeStartDate, setActiveStartDate] = useState(new Date());

  const handleDateChange = (newDate: Value) => {
    setDate(newDate);
  };

  return (
    <StyledCalendarWrapper>
      <StyleCalendar
        value={date}
        onChange={handleDateChange}
        formatDay={(_, date) => date.getDate().toString()}
        formatMonthYear={(_, date) => {
          const month = date.toLocaleString("en-US", { month: "long" });
          const year = date.getFullYear();
          return `${month}, ${year}`;
        }}
        formatShortWeekday={(_, date) => date.toLocaleString("en-US", { weekday: "short" }).slice(0, 3)}
        calendarType="gregory"
        showNeighboringMonth={false}
        next2Label={null}
        prev2Label={null}
        minDetail="year"
        activeStartDate={activeStartDate}
        onActiveStartDateChange={({ activeStartDate }) => setActiveStartDate(activeStartDate || today)}
      />
    </StyledCalendarWrapper>
  );
};
