import * as React from "react";
import { IAppointments, ITableData } from "./model";
import AppointmentRow from "./AppointmentRow";

export default class AppointmentTable extends React.Component<IAppointments> {
  constructor(props: IAppointments) {
    super(props);
  }
  renderTableRows = () => {
    return this.props.todayData.map((data: ITableData, key: number) => {
      return (
        <AppointmentRow
          id={data.id}
          organiser={data.organiser}
          attendee={data.attendee}
          agenda_title={data.agenda_title}
          agenda_description={""}
          appointment_date=""
          start_time={data.start_time}
          end_time={data.end_time}
          key={key}
        />
      );
    });
  };
  render(): JSX.Element {
    let tableRows = this.renderTableRows();
    return (
      <div className="divTable">
        <div className="divTableBody">
          <div className="divTableHeading">
            <div className="divTableHeaderCell">Organizer</div>
            <div className="divTableHeaderCell">Attendee</div>
            <div className="divTableHeaderCell">Agenda</div>
            <div className="divTableHeaderCell">Start Time</div>
            <div className="divTableHeaderCell">End Time</div>
          </div>
          {tableRows}
        </div>
      </div>
    );
  }
}
