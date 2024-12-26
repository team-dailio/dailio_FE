import { useState } from "react";
import { CalendarContainer, StyledCalendar, TodayDiv } from "../Calendar/_BigStyles";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export const MainCalendar = () => {
  const today = new Date();
  const [date, setDate] = useState<Value>(today);
  const [activeStartDate, setActiveStartDate] = useState(new Date());

  const handleDateChange = (newDate: Value) => {
    setDate(newDate);
  };

  return (
    <CalendarContainer>
      <StyledCalendar
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
        tileContent={({ date, view }) => {
          if (
            view === "month" &&
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
          ) {
            return <TodayDiv>{date.getDate()}</TodayDiv>;
          }
        }}
      />
    </CalendarContainer>
  );
};
