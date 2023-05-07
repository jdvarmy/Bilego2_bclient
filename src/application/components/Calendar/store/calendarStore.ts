import { getWeek } from '@/application/components/Calendar/utils/getWeek';
import { stateCreatorHelper } from '@/application/utils/storeHelpers/stateCreatorHelper';

type State = {
  day: Date | number;
  week: Date[] | number[];
  startDate: Date | number;
  endDate: Date | number;
};
type Actions = {
  setDay: (date: State['day']) => void;
  setWeek: (week: State['week']) => void;
  setOneDayDate: (date: Date | number) => void;
  setStartDate: (date: State['startDate']) => void;
  setEndDate: (date: State['endDate']) => void;
};

const now = Date.now();

export const calendarStore = stateCreatorHelper<State & Actions>(set => ({
  day: now,
  week: getWeek(now),
  startDate: now,
  endDate: now,
  setDay: date =>
    set(state => {
      state.day = date;
    }),
  setWeek: week =>
    set(state => {
      state.week = week;
    }),
  setOneDayDate: date =>
    set(state => {
      state.startDate = date;
      state.endDate = date;
    }),
  setStartDate: date =>
    set(state => {
      state.startDate = date;
    }),
  setEndDate: date =>
    set(state => {
      state.endDate = date;
    }),
}));