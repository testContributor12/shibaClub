import React, { Component } from "react";

export default class Event extends Component {
  render() {
    return (
      <div className="mainSideEventListContainer">
        <div onClick={this.props.showCurrentEvent} className="eventTitleSpan">
          <h4 className="sideMainTitle">{this.props.title}</h4>
        </div>

        <i onClick={this.props.deleteItem} className="fas fa-trash-alt" />

        <i
          onClick={this.props.updateItem}
          className="fas forCheck fa-pencil-alt"
        />
      </div>
    );
  }
}
