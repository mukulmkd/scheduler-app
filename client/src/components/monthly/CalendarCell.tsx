import * as React from "react";
import dateFns from "date-fns";
import { ICell, ICellState } from "./model";
import Appointments from "../appointments/Appointments";
import ReactModal from "react-modal";
import { Button, ButtonType } from "office-ui-fabric-react/lib/Button";
import Card from "../card/Card";

ReactModal.setAppElement("#app");

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
  };
  render(): JSX.Element {
    return (
      <div
        onClick={() => this.toggleModal()}
        className={`col cell ${
          !dateFns.isSameMonth(this.props.day, this.props.monthStart)
            ? "disabled"
            : dateFns.isSameDay(this.props.day, this.props.selectedDate)
            ? "selected bgblue"
            : "bgblue"
        }`}
      >
        <span className="number">{this.props.formattedDate}</span>
        <span className="bg">{this.props.formattedDate}</span>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.toggleModal}
          shouldCloseOnOverlayClick={false}
        >
          <Appointments day={dateFns.parse(this.props.cloneDay)} />
          <div style={{ marginTop: "1em" }}>
            <Button buttonType={ButtonType.primary} onClick={this.toggleModal}>
              Close
            </Button>
          </div>
        </ReactModal>
      </div>
    );
  }
}
