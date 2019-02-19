import * as React from 'react';
import { IAppointment } from './model';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Button, ButtonType } from 'office-ui-fabric-react/lib/Button';
import dateFns from 'date-fns';
import './style.css';

export default class Appointments extends React.Component<IAppointment, IAppointment> {
    constructor(props: IAppointment) {
        super(props);
        this.state = {
            day: this.props.day
        };
    }
    nextDate = () => {
        this.setState({
            day: dateFns.addDays(this.state.day, 1)
        });
    };

    prevDate = () => {
        this.setState({
            day: dateFns.subDays(this.state.day, 1)
        });
    };
    render() {
        const dateArr: string[] = this.state.day.toString().split(" ");
        const currDate: string = dateArr[0] + ', ' + dateArr[1] + ' ' + dateArr[2] + ', ' + dateArr[3];
        return (
            <div>
                <div>
                    <Button buttonType={ButtonType.primary} onClick={this.prevDate}>{'<<'}</Button>
                    <Label><b>{currDate}</b></Label>
                    <Button buttonType={ButtonType.primary} onClick={this.nextDate}>{'>>'}</Button>
                </div>
                <div className="divTable">
                    <div className="divTableBody">
                        <div className="divTableHeading">
                            <div className="divTableHeaderCell">Meeting Set By</div>
                            <div className="divTableHeaderCell">Attendee</div>
                            <div className="divTableHeaderCell">Agenda</div>
                            <div className="divTableHeaderCell">Start Time</div>
                            <div className="divTableHeaderCell">End Time</div>
                        </div>
                        <div className="divTableRow">
                            <div className="divTableCell">&nbsp;</div>
                            <div className="divTableCell">&nbsp;</div>
                            <div className="divTableCell">&nbsp;</div>
                            <div className="divTableCell">&nbsp;</div>
                            <div className="divTableCell">&nbsp;</div>
                        </div>
                        <div className="divTableRow">
                            <div className="divTableCell">&nbsp;</div>
                            <div className="divTableCell">&nbsp;</div>
                            <div className="divTableCell">&nbsp;</div>
                            <div className="divTableCell">&nbsp;</div>
                            <div className="divTableCell">&nbsp;</div>
                        </div>
                        <div className="divTableRow">
                            <div className="divTableCell">&nbsp;</div>
                            <div className="divTableCell">&nbsp;</div>
                            <div className="divTableCell">&nbsp;</div>
                            <div className="divTableCell">&nbsp;</div>
                            <div className="divTableCell">&nbsp;</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}