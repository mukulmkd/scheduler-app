import * as React from 'react';
import { IAppointment } from './model';
import datefns from 'date-fns';
import './style.css';

export default class Appointments extends React.Component<IAppointment> {
    render() {
        return (
            <div>
                Appointments for the day {this.props.day.toString()}
            </div>
        );
    }
}