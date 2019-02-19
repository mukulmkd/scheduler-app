import * as React from 'react';
import { IAppointment } from './model';
import './style.css';
export default class Appointments extends React.Component<IAppointment, IAppointment> {
    constructor(props: IAppointment);
    nextDate: () => void;
    prevDate: () => void;
    render(): JSX.Element;
}
