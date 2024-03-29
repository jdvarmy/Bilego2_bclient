import { addDays, isSaturday, isSunday, nextSaturday, nextSunday } from 'date-fns';
import React from 'react';

import { getWeek } from '@/refactor/Calendar/helpers/getWeek';
import { calendarActions } from '@/refactor/Calendar/store/calendarActions';

export const FastButtons = () => {
  const setDay = calendarActions.setDay();
  const setWeek = calendarActions.setWeek();
  const setOneDayDate = calendarActions.setOneDayDate();
  const setStartDate = calendarActions.setStartDate();
  const setEndDate = calendarActions.setEndDate();

  const date = Date.now();
  const clickTodayHandler = () => {
    setOneDayDate(date);

    setDay(date);
    setWeek(getWeek(date));
  };
  const clickWeekendHandler = () => {
    if (isSaturday(date)) {
      setStartDate(date);
      setEndDate(addDays(date, 1));
    } else if (isSunday(date)) {
      setOneDayDate(date);
    } else {
      setStartDate(nextSaturday(date));
      setEndDate(nextSunday(date));
    }

    setDay(date);
    setWeek(getWeek(date));
  };
  return (
    <div className='flex flex-row justify-between text-xs'>
      <div
        className='text-xs mt-8 border rounded-2xl border-chrome text-center pb-0.5 px-3 text-chrome cursor-pointer select-none'
        onClick={clickTodayHandler}
      >
        сегодня
      </div>
      <div
        className='text-xs mt-8 border rounded-2xl border-chrome text-center pb-0.5 px-3 text-chrome cursor-pointer select-none'
        onClick={clickWeekendHandler}
      >
        выходные
      </div>
    </div>
  );
};
