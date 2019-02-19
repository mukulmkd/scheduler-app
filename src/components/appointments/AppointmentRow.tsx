import * as React from 'react';
import { ITableData } from './model';

export default class AppointmentRow extends React.Component<ITableData> {
    constructor(props:ITableData) {
        super(props);        
    }
    render() {
        return (
            <div className="divTableRow">
                <div className="divTableCell">{this.props.organiser}</div>
                <div className="divTableCell">{this.props.attendee}</div>
                <div className="divTableCell">{this.props.agenda}</div>
                <div className="divTableCell">{this.props.start_time}</div>
                <div className="divTableCell">{this.props.end_time}</div>
            </div>
        );
    }
}