import Calendar from "react-calendar";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";
import { color, fonts } from "../../style";

export const StyledCalendarWrapper = styled.div`
  width: 80%;
  display: flex; // 플렉스 박스를 사용하여 가운데 정렬
  justify-content: center; // 수평 중앙 정렬
  overflow: hidden; // 캘린더 밖으로 흐르는 콘텐츠 숨기기
  box-sizing: border-box; // 박스 모델의 크기를 border까지 포함시킴
  .react-calendar {
    width: 100%;
    border: none;
    border-radius: 0.5rem;
    background-color: ${color.gray[100]};
    padding: 8px;
  }
  /* 네비게이션 가운데 정렬 */
  .react-calendar__navigation {
    justify-content: flex-start;
    margin-bottom: 0;
  }

  /* 네비게이션 폰트 설정 */
  .react-calendar__navigation button {
    min-width: 36px; // 버튼의 최소 너비 설정
    background: none; // 배경 제거
    font-size: ${fonts.caption[1]}; // 글꼴 크기 설정
    font-weight: bold; // 글꼴 두껍게
    color: ${color.primary[500]}; // 글자 색상 설정
  }

  .react-calendar__navigation button:hover {
    background: ${color.gray[100]}; // 버튼 호버 시 배경색 변경
  }

  /* 년/월 상단 네비게이션 칸 크기 줄이기 */
  .react-calendar__navigation__label {
    flex-grow: 0 !important;
  }

  .react-calendar__navigation__label:hover {
    color: ${color.primary[400]}; // 레이블 호버 시 색상 변경
  }

  /* 요일 밑줄 제거 */
  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
    font-weight: 800;
  }

  .react-calendar__month-view__days__day:nth-child(7n) {
    color: ${color.primary[500]}; /* 토요일 색상 변경 */
  }

  .react-calendar__month-view__weekdays__weekday:nth-child(7) abbr {
    color: ${color.primary[500]}; /* 요일 이름(SAT) */
  }

  /* 일요일에만 빨간 폰트 */
  .react-calendar__month-view__weekdays__weekday--weekend abbr[title="일요일"] {
    color: ${color.interactive.error};
  }

  .react-calendar__month-view__weekdays__weekday:first-child abbr {
    color: ${color.interactive.error};
  } // Sunday 빨간색

  /* 일 날짜 간격 */
  .react-calendar__tile {
    padding: 5px 0px 18px;
    position: relative;
    border-radius: 4px;
  }

  /* 선택한 날짜 스타일 적용 */
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    background-color: ${color.gray[200]};
    border-radius: 0.3rem;
    color: ${color.interactive.black};
  }

  /* 오늘 날짜 스타일 적용 */
  .react-calendar__tile--now {
    background-color: ${color.primary[300]}; // 오늘 날짜 배경색 파랑색 적용
    color: ${color.primary[100]}; // 글자색 변경
    font-weight: bold; // 굵기 조절
    border-radius: 0.3rem;
  }
`;

export const StyleCalendar = styled(Calendar)``;
