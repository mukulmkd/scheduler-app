import * as React from "react";
import dateFns from "date-fns";
import { ICalendar } from "./model";
import CalendarCells from "./CalendarCells";
import CalendarDays from "./CalendarDays";
import "./calendar.css";

export default class Calendar extends React.Component<{}, ICalendar> {
  constructor(props: {}) {
    super(props);
    this.state = {
      currentMonth: new Date(),
      selectedDate: new Date()
    };
  }

  renderHeader() {
    const dateFormat = "MMMM YYYY";

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  };

  render(): JSX.Element {
    return (
      <div className="calendar">
        {this.renderHeader()}
        <CalendarDays />
        <CalendarCells
          currentMonth={this.state.currentMonth}
          selectedDate={this.state.selectedDate}
        />
      </div>
    );
  }
}
