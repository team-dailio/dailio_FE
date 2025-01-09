import { useState } from "react";
import { CalendarContainer, StyledCalendar, TodayDiv } from "../Calendar/_BigStyles";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export const MainCalendar = () => {
  const today: Date = new Date();
  const [date, setDate] = useState<Value>(today);
  const [activeStartDate, setActiveStartDate] = useState<Date>(new Date());

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
        prev2Label={null}
        calendarType="gregory"
        showNeighboringMonth={false}
        next2Label={null}
        minDetail="month"
        maxDetail="month"        activeStartDate={activeStartDate}
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
