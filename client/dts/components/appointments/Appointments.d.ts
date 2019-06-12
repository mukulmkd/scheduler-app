import * as React from 'react';
import { IAppointment, IAppointments } from './model';
import './style.css';
export default class Appointments extends React.Component<IAppointment, IAppointments> {
    constructor(props: IAppointment);
    nextDate: () => void;
    prevDate: () => void;
    render(): JSX.Element;
}
