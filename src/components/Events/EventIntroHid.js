import React, { Component } from "react";

export default class EventIntroHid extends Component {
  render() {
    return (
      <div className="mainSideEventListContainerHid">
        <div
          onClick={this.props.showCurrentEvent}
          className="eventTitleSpanHid"
        >
          <h4 className="sideMainTitleHid">{this.props.title}</h4>
        </div>
      </div>
    );
  }
}
