import * as React from 'react';
import { IAppointment, IAppointments } from './model';
import { Button, ButtonType } from 'office-ui-fabric-react/lib/Button';
import AppointmentTable from './AppointmentTable';
import dateFns from 'date-fns';
import './style.css';
import data from './data';

export default class Appointments extends React.Component<IAppointment, IAppointments> {
    constructor(props: IAppointment) {
        super(props);
        this.state = {
            day: this.props.day,
            todayData: data
        };
    }
    nextDate = () => {
        this.setState({
            day: dateFns.addDays(this.state.day, 1),
            todayData: data
        });
    };

    prevDate = () => {
        this.setState({
            day: dateFns.subDays(this.state.day, 1),
            todayData: data
        });
    };
    render() {
        const dateArr: string[] = this.state.day.toString().split(" ");
        const currDate: string = dateArr[0] + ', ' + dateArr[1] + ' ' + dateArr[2] + ', ' + dateArr[3];
        return (
            <div>
                <div>
                    <Button buttonType={ButtonType.primary} onClick={this.prevDate} style={{ marginRight: "1em" }}>{'<<'}</Button>
                    <div style={{ width: "10em", textAlign: "center", float: "left" }}><b>{currDate}</b></div>
                    <Button buttonType={ButtonType.primary} onClick={this.nextDate}>{'>>'}</Button>
                </div>
                <AppointmentTable todayData={this.state.todayData} day={this.state.day} />
            </div>
        );
    }
}