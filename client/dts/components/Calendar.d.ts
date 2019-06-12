import * as React from "react";
import { ICalendarState } from './model';
export default class Calendar extends React.Component<{}, ICalendarState> {
    state: {
        currentMonth: Date;
        selectedDate: Date;
    };
    renderHeader: () => JSX.Element;
    renderDays: () => JSX.Element;
    renderCells: () => JSX.Element;
    onDateClick: (day: Date) => void;
    nextMonth: () => void;
    prevMonth: () => void;
    render(): JSX.Element;
}
