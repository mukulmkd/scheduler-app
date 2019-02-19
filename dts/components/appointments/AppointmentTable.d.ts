import * as React from 'react';
import { IAppointments } from './model';
export default class AppointmentTable extends React.Component<IAppointments> {
    constructor(props: IAppointments);
    renderTableRows: () => JSX.Element[];
    render(): JSX.Element;
}
