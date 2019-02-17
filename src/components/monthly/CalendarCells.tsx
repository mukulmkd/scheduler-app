import * as React from 'react';
import dateFns from 'date-fns';
import { ICalendar } from './model';
import CalendarCell from './CalendarCell';

export default class CalendarCells extends React.Component<ICalendar> {
    render() {
        const { currentMonth, selectedDate } = this.props;
        const monthStart = dateFns.startOfMonth(currentMonth);
        const monthEnd = dateFns.endOfMonth(monthStart);
        const startDate = dateFns.startOfWeek(monthStart);
        const endDate = dateFns.endOfWeek(monthEnd);

        const dateFormat = "D";
        const rows = [];

        let days = [];
        let day = startDate;
        let whileCounter: number = 0;
        while (day <= endDate) {
            whileCounter++;
            for (let i = 0; i < 7; i++) {
                let formattedDate = dateFns.format(day, dateFormat);
                const cloneDay = day;
                days.push(
                    <CalendarCell
                        day={day}
                        monthStart={monthStart}
                        selectedDate={selectedDate}
                        cloneDay={cloneDay}
                        formattedDate={formattedDate}
                        key={i}
                    />
                );
                day = dateFns.addDays(day, 1);
            }
            rows.push(
                <div className="row" key={whileCounter}>
                    {days}
                </div>
            );
            days = [];
        }
        return (
            <div className="body">
                {rows}
            </div>
        );
    }
}