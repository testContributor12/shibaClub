import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class navbar extends Component {
  render() {
    return (
      <div className="NavbarMainContainer">
        <nav className="NavListContainer">
          <li>
            <Link className="listEl" to="/">
              Начало
            </Link>
          </li>

          <li>
            <Link className="listEl" to="/about">
              Цел
            </Link>
          </li>
          <Link to="/">
            <img
              className="myLogo"
              src={require("../img/logo.jpg")}
              alt="logo"
            />
          </Link>
          <li>
            <Link className="listEl" to="/events">
              Събития
            </Link>
          </li>

          <li>
            <Link className="listEl" to="/articles">
              Статии
            </Link>
          </li>
        </nav>
      </div>
    );
  }
}
