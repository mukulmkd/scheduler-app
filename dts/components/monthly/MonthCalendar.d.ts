import * as React from 'react';
import { ICalendarState } from './model';
export default class Calendar extends React.Component<{}, ICalendarState> {
    constructor(props: {});
    renderHeader(): JSX.Element;
    nextMonth: () => void;
    prevMonth: () => void;
    render(): JSX.Element;
}
