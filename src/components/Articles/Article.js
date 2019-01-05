import React, { Component } from "react";

export default class Article extends Component {
  render() {
    return (
      <div className="mainSideArticleListContainer">
        <div
          className="eventTitleArticle"
          onClick={this.props.showCurrentArticle}
        >
          <h4 className="sideMainArticleTitle">{this.props.title}</h4>
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
