import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { color, fonts } from "../../style";

export const CalendarContainer = styled.div`
  width: 65%; // 캘린더의 너비를 60%로 설정
  display: flex; // 플렉스 박스를 사용하여 가운데 정렬
  justify-content: center; // 수평 중앙 정렬
  overflow: hidden; // 캘린더 밖으로 흐르는 콘텐츠 숨기기
  box-sizing: border-box; // 박스 모델의 크기를 border까지 포함시킴

  .react-calendar {
    width: 100%; // 캘린더의 너비를 100%로 설정
    border: none; // 테두리 제거
    overflow: hidden; // 캘린더 내부에서 넘치는 콘텐츠 숨기기
    margin-top: 30px;
  }

  .react-calendar__navigation {
    display: flex; // 플렉스 박스를 사용하여 네비게이션 항목을 정렬
    margin-bottom: 20px; // 네비게이션 하단에 여백 추가
  }

  .react-calendar__navigation button {
    min-width: 36px; // 버튼의 최소 너비 설정
    background: none; // 배경 제거
    font-size: ${fonts.heading[2]}; // 글꼴 크기 설정
    font-weight: bold; // 글꼴 두껍게
    color: ${color.primary[500]}; // 글자 색상 설정
  }

  .react-calendar__navigation button:disabled {
    background: none; // 비활성화된 버튼에 배경 제거
  }

  .react-calendar__navigation button:focus {
    background: none; // 포커스된 버튼에 배경 제거
  }

  .react-calendar__navigation button:hover {
    background: ${color.interactive.white}; // 버튼 호버 시 배경색 변경
  }

  .react-calendar__navigation__label {
    font-weight: bold; // 네비게이션 레이블 글꼴 두껍게
    color: ${color.primary[500]}; // 레이블 색상 설정
    text-transform: none; // 텍스트 대소문자 변환 안 함
    font-size: 20px; // 글꼴 크기 설정
  }

  .react-calendar__navigation__label:hover {
    color: ${color.primary[400]}; // 레이블 호버 시 색상 변경
  }

  .react-calendar__viewContainer {
    border: 2px solid ${color.primary[100]}; // 캘린더 뷰 컨테이너 테두리 설정
    border-radius: 16px; // 둥근 테두리 설정
  }

  .react-calendar__month-view__weekdays {
    text-align: center; // 요일을 중앙 정렬
    text-transform: uppercase; // 요일 텍스트를 모두 대문자로 변환
    font-weight: 600; // 글꼴 두껍게
    font-size: 14px; // 글꼴 크기 설정
    border: 2px solid ${color.primary[100]}; // 요일 헤더의 테두리 설정
    background-color: ${color.primary[100]}; // 요일 헤더 배경 색상 설정
    border-radius: 12px 12px 0 0; // 요일 헤더의 상단만 둥글게 설정
  }

  .react-calendar__month-view__weekdays__weekday {
    padding: 8px; // 각 요일 셀에 여백 추가
  }

  .react-calendar__month-view__weekdays__weekday abbr {
    text-decoration: none; // 요일 약어에 밑줄 제거
  }

  .react-calendar__month-view__weekdays__weekday:first-child abbr {
    color: ${color.interactive.error}; // 첫 번째 요일(Sun)의 텍스트 색상 변경
  }

  .react-calendar__month-view__days__day:nth-child(7n) {
    color: ${color.primary[500]}; // 토요일 색상 변경
  }

  .react-calendar__month-view__weekdays__weekday:nth-child(7) abbr {
    color: ${color.primary[500]}; // 요일 이름(SAT) 색상 변경
  }

  .react-calendar__month-view__days__day--weekend:nth-child(7n + 1) {
    color: ${color.interactive.error}; // 일요일 색상 변경
  }

  .react-calendar__month-view__days__day--weekend:last-child {
    color: ${color.primary[500]}; // 일요일(마지막 셀) 색상 변경
  }

  .react-calendar__tile {
    position: relative; // 타일을 상대 위치로 설정
    height: 80px; // 각 날짜 셀의 높이 설정
    background: none; // 배경 제거
    border-right: 1px solid ${color.primary[100]}; // 오른쪽 테두리 추가
    border: 1px solid ${color.primary[100]}; // 테두리 추가
    margin: 0; // 마진 제거
  }

  .react-calendar__month-view__days__day:nth-child(7n) {
    border-right: none; // 토요일의 오른쪽 테두리 제거
  }

  .react-calendar__tile > abbr {
    position: absolute; // 날짜 약어를 절대 위치로 설정
    top: 8px; // 상단 여백 추가
    right: 8px; // 우측 여백 추가
    font-size: 14px; // 약어의 글꼴 크기 설정
    text-decoration: none; // 밑줄 제거
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: rgba(26, 35, 126, 0.1); // 활성화된 타일에 호버 또는 포커스 시 배경색 변경
  }

  .react-calendar__tile--active {
    background: rgba(26, 35, 126, 0.2) !important; // 활성화된 타일의 배경색 변경
  }

  .react-calendar__tile--now {
    font-weight: bold; // 오늘 날짜의 글꼴을 두껍게 설정
  }

  .react-calendar__tile--now > div {
    background-color: ${color.primary[500]}; // 오늘 날짜의 배경색 변경
    color: white; // 오늘 날짜 텍스트 색상 변경
    width: 20px; // 원형 크기 설정
    height: 20px; // 원형 크기 설정
    display: flex; // flexbox로 원형 중앙 정렬
    justify-content: center; // 중앙 정렬
    align-items: center; // 중앙 정렬
    border-radius: 4px; // 원형으로 둥글게 설정
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    visibility: hidden; // 이웃 달의 날짜는 보이지 않도록 설정
    border: none; // 테두리 제거
  }

  .react-calendar__navigation__label {
    flex-grow: 0 !important; // 네비게이션 레이블의 크기 고정
  }

  .react-calendar__navigation__arrow {
    color: ${color.primary[500]}; // 화살표 색상 설정
  }
`;

// TodayDiv: 오늘 날짜에 표시되는 원형 요소
export const TodayDiv = styled.div`
  position: absolute; // 위치를 절대 위치로 설정
  top: 4px; // 상단 여백 설정
  right: 4px; // 우측 여백 설정
  width: 20px; // 원형 크기 설정
  height: 20px; // 원형 크기 설정
  display: flex; // flexbox로 원형 중앙 정렬
  justify-content: center; // 중앙 정렬
  align-items: center; // 중앙 정렬
  background-color: ${color.primary[500]}; // 원형 배경색 설정
  color: ${color.interactive.white}; // 텍스트 색상 설정
  border-radius: 4px; // 둥글게 설정
  font-size: ${fonts.caption[2]}; // 글꼴 크기 설정
  font-weight: bold; // 글꼴 두껍게 설정
  z-index: 10; // z-index 설정하여 다른 요소 위에 표시
`;

// StyledCalendar: react-calendar를 스타일링한 컴포넌트
export const StyledCalendar = styled(Calendar)``;
