import { createSelector } from '@/shared/helpers/storeHelpers/createSelector';
import { calendarStore } from '@/widgets/Calendar/store/calendarStore';

export const calendarActions = {
  setDay: () => {
    const handler = createSelector(calendarStore).use.setDay();
    return (date: Date | number) => handler(date);
  },
  setWeek: () => {
    const handler = createSelector(calendarStore).use.setWeek();
    return (date: Date[] | number[]) => handler(date);
  },
  setOneDayDate: () => {
    const handler = createSelector(calendarStore).use.setOneDayDate();
    return (date: Date | number) => handler(date);
  },
  setStartDate: () => {
    const handler = createSelector(calendarStore).use.setStartDate();
    return (date: Date | number) => handler(date);
  },
  setEndDate: () => {
    const handler = createSelector(calendarStore).use.setEndDate();
    return (date: Date | number) => handler(date);
  },
};
