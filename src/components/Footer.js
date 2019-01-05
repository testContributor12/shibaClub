import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footerContainer">
        <span className="messageFooter">
          <p>
            Sed congue sem vel condimentum sodales. Morbi dictum odio ac ex
            sollicitudin volutpat
          </p>
        </span>

        <div className="contactsContainer">
          <h3 className="footerHeader">Нашите контакти</h3>
          <div className="numberAndIcon">
            <i className="fas fa-phone" />
            <span className="teleNumber">+359 888 888888</span>
          </div>
          <div className="iconContainer">
            <img
              className="iconFooter iconFace"
              src={require("../img/facebook.png")}
              alt="facebookIcon"
            />
            <img
              className="iconFooter"
              src={require("../img/instagram.png")}
              alt="facebookIcon"
            />
          </div>
        </div>
      </div>
    );
  }
}
