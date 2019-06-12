import * as React from "react";
import { ICell, ICellState } from "./model";
export default class CalendarCell extends React.Component<ICell, ICellState> {
    constructor(props: ICell);
    toggleModal: () => void;
    render(): JSX.Element;
}
