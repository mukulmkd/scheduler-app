import * as React from "react";
import { ICardProps } from "./CardModel";
import "./Card.css";

export default class Card extends React.Component<ICardProps> {
  render(): JSX.Element {
    return (
      <div className="card">
        <div className="header">{this.props.title} position </div>
        <div className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          autem sapiente labore architecto exercitationem optio quod dolor
          cupiditate
        </div>
      </div>
    );
  }
}
