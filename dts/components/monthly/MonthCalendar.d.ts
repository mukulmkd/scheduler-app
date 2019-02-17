import * as React from 'react';
import { ICalendar } from './model';
export default class Calendar extends React.Component<{}, ICalendar> {
    constructor(props: {});
    renderHeader(): JSX.Element;
    nextMonth: () => void;
    prevMonth: () => void;
    render(): JSX.Element;
}
