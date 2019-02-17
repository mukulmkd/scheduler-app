import * as React from 'react';
import dateFns from 'date-fns';
import { ICell, ICellState } from './model';
import Appointments from '../appointments/Appointments';
import ReactModal from 'react-modal';
ReactModal.setAppElement('#app');

export default class CalendarCell extends React.Component<ICell, ICellState> {
    constructor(props: ICell) {
        super(props);
        this.state = {
            showModal: false
        };
    }
    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        });
    }
    render() {
        return (
            <div
                className={`col cell ${
                    !dateFns.isSameMonth(this.props.day, this.props.monthStart)
                        ? "disabled"
                        : dateFns.isSameDay(this.props.day, this.props.selectedDate) ? "selected bgblue" : "bgblue"
                    }`}
            >
                <span className="number" onClick={() => this.toggleModal()}>{this.props.formattedDate}</span>
                <span className="bg">{this.props.formattedDate}</span>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="onRequestClose Example"
                    onRequestClose={this.toggleModal}
                    shouldCloseOnOverlayClick={false}
                >
                    <Appointments
                        day={dateFns.parse(this.props.cloneDay)}
                    />
                    <button onClick={this.toggleModal}>Close</button>
                </ReactModal>
            </div>
        );
    }
}