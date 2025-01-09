import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { color, fonts } from "../../style";

export const CalendarContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  box-sizing: border-box;
  margin-left: 30px;

  .react-calendar {
    width: 100%;
    border: none;
    overflow: hidden;
    margin-top: 30px;
  }

  .react-calendar__navigation {
    display: flex;
    margin-bottom: 20px;
  }

  .react-calendar__navigation button {
    min-width: 36px;
    background: none;
    font-size: ${fonts.heading[2]};
    font-weight: bold;
    color: ${color.primary[500]};
  }

  .react-calendar__navigation button:disabled {
    background: none;
  }

  .react-calendar__navigation button:focus {
    background: none;
  }

  .react-calendar__navigation button:hover {
    background: ${color.interactive.white};
  }

  .react-calendar__navigation__label {
    font-weight: bold;
    color: ${color.primary[500]};
    text-transform: none;
    font-size: 20px;
  }

  .react-calendar__navigation__label:hover {
    color: ${color.primary[400]};
  }

  .react-calendar__viewContainer {
    border: 2px solid ${color.primary[100]};
    border-radius: 16px;
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
    border: 2px solid ${color.primary[100]};
    background-color: ${color.primary[100]};
    border-radius: 12px 12px 0 0;
  }

  .react-calendar__month-view__weekdays__weekday {
    padding: 8px;
  }

  .react-calendar__month-view__weekdays__weekday abbr {
    text-decoration: none;
  }

  .react-calendar__month-view__weekdays__weekday:first-child abbr {
    color: ${color.interactive.error};
  }

  .react-calendar__month-view__days__day:nth-child(7n) {
    color: ${color.primary[500]};
  }

  .react-calendar__month-view__weekdays__weekday:nth-child(7) abbr {
    color: ${color.primary[500]};
  }

  .react-calendar__month-view__days__day--weekend:nth-child(7n + 1) {
    color: ${color.interactive.error};
  }

  .react-calendar__month-view__days__day--weekend:last-child {
    color: ${color.primary[500]};
  }

  .react-calendar__tile {
    position: relative;
    height: 80px;
    background: none;
    border-right: 1px solid ${color.primary[100]};
    border: 1px solid ${color.primary[100]};
    margin: 0;
  }

  .react-calendar__month-view__days__day:nth-child(7n) {
    border-right: none;
  }

  .react-calendar__tile > abbr {
    position: absolute;
    top: 8px;
    right: 8px;
    font-size: 14px;
    text-decoration: none;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: rgba(26, 35, 126, 0.1);
  }

  .react-calendar__tile--active {
    background: rgba(26, 35, 126, 0.2) !important;
  }

  .react-calendar__tile--now {
    font-weight: bold;
  }

  .react-calendar__tile--now > div {
    background-color: ${color.primary[500]};
    color: white;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    visibility: hidden;
    border: none;
  }

  .react-calendar__navigation__label {
    flex-grow: 0 !important;
  }

  .react-calendar__navigation__arrow {
    color: ${color.primary[500]};
  }
`;

export const YearNavigationStyle = styled.div`
  .react-calendar__navigation {
    display: flex;
    margin-bottom: 20px;
  }

  .react-calendar__navigation button {
    min-width: 36px;
    background: none;
    font-size: ${fonts.heading[2]};
    font-weight: bold;
    color: ${color.primary[500]};
  }

  .react-calendar__navigation button:disabled {
    background: none;
  }

  .react-calendar__navigation button:focus {
    background: none;
  }

  .react-calendar__navigation button:hover {
    background: ${color.interactive.white};
  }

  .react-calendar__navigation__label {
    font-weight: bold;
    color: ${color.primary[500]};
    text-transform: none;
    font-size: 20px;
  }

  .react-calendar__navigation__label:hover {
    color: ${color.primary[400]};
  }
`;

export const TodayDiv = styled.div`
  position: absolute;
  top: 6px;
  right: 6px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.primary[500]};
  color: ${color.interactive.white};
  border-radius: 4px;
  font-size: ${fonts.caption[2]};
  font-weight: bold;
`;

export const YearSelectStyle = styled.div`
  .react-calendar__decade-view,
  .react-calendar__year-view {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    padding: 20px;
  }

  .react-calendar__tile {
    background-color: ${color.primary[100]};
    border: 1px solid ${color.primary[200]};
    border-radius: 8px;
    font-size: ${fonts.body[1]};
    color: ${color.primary[500]};
    text-align: center;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .react-calendar__tile:hover {
    background-color: ${color.primary[200]};
  }

  .react-calendar__tile--active {
    background-color: ${color.primary[500]};
    color: ${color.interactive.white};
    font-weight: bold;
  }

  .react-calendar__tile--now {
    border: 2px solid ${color.primary[400]};
  }
`;

export const StyledCalendar = styled(Calendar)``;
