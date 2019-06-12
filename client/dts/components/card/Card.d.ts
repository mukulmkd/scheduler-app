import * as React from "react";
import "./Card.css";
export interface ICardProps {
    title: string;
}
export default class Card extends React.Component<ICardProps> {
    render(): JSX.Element;
}
