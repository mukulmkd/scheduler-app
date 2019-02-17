import * as React from 'react';
import { ICalendarHeader } from './model';
export default class CalendarHeader extends React.Component<{}, ICalendarHeader> {
    constructor(props: {});
    nextMonth: () => void;
    prevMonth: () => void;
    render(): JSX.Element;
}
