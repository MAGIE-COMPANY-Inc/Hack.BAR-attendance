import dayjs from "dayjs";
import React from "react";
import { useRecoilState } from "recoil";
import { monthIdxState } from "../../atoms/month";

export default function CalendarHeader() {
  const [currentMonthIdx, setCurrentMonthIdx] = useRecoilState(monthIdxState)

  console.log(`current::::${currentMonthIdx}`);
  
  function handlePrevMonth() {
    setCurrentMonthIdx(currentMonthIdx - 1);
  }

  function handleNextMonth() {
    setCurrentMonthIdx(currentMonthIdx + 1);
  }

  function handleReset() {
    setCurrentMonthIdx(
      currentMonthIdx === dayjs().month()
        ? currentMonthIdx + Math.random()
        : dayjs().month()
    );
  }
  return (
    <header className="px-4 py-2 flex items-center">
      <h1 className="mr-10 text-xl text-gray-500 fond-bold">
        勤怠システム
      </h1>
      <button
        onClick={handleReset}
        className="border rounded py-2 px-4 mr-5"
      >
        Today
      </button>
      <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_left
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_right
        </span>
      </button>
      <h2 className="ml-4 text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), currentMonthIdx)).format(
          "MMMM YYYY"
        )}
      </h2>
    </header>
  );
}
