export interface ICalendar {
  currentMonth: Date;
  selectedDate: Date;
}
export interface ICalendarHeader {
  month: Date;
}
export interface ICell {
  day: Date;
  monthStart: Date;
  selectedDate: Date;
  cloneDay: Date;
  formattedDate: string;
}
export interface ICellState {
  showModal: boolean;
}
