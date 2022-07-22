import dayjs from "dayjs";

export function getMonth(month:number) {
  const year = dayjs().year();
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfTheMonth;
  /*** 週を表示(前月の最終+その月の4週間分=> 5週間分を表示) ***/
  const daysMatrix = new Array(5).fill([]).map(() => {
    /*** 7日間に分別する */
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });
  return daysMatrix;
}