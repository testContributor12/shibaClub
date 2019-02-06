import React, { Component } from "react";
import Article from "./Article";
import { connect } from "react-redux";
import {
  getEvents,
  showEvent2,
  checkToUpdateEvent2,
  deleteEvent2,
  updateEvent2,
  addEvent2
} from "../../actions/actionReciever";
const uuidv1 = require("uuid/v1");
class Articles extends Component {
  state = {
    currID: "",
    stateTitle: "",
    stateDescription: "",
    stateAuthor: "",
    currIndex: 0,
    valueDesc: "",
    valueTitle: "",
    valueAuthor: "",
    showEditBar: false,
    missTitle: false,
    missDesc: false,
    missAuthor: false,
    showDialog: false,
    showDeleteAction: false,
    deleteEventConfirm: ""
  };

  componentDidMount() {
    let allTitles = document.querySelectorAll(".sideMainArticleTitle");
    allTitles.forEach((e, index) => {
      if (index === 0) {
        e.parentElement.parentElement.style.backgroundColor =
          "rgb(36, 187, 36)";
        e.parentElement.parentElement.style.borderBottom =
          "4px solid rgb(36, 187, 36)";
      }
    });

    this.props.getEvents();
    this.props.showEvent2({
      id: this.props.articles[0].id,
      title: this.props.articles[0].title,
      description: this.props.articles[0].description,
      author: this.props.articles[0].author
    });

    this.setState({
      currID: this.props.mainStage2[0].id,
      stateTitle: this.props.mainStage2[0].title,
      stateDescription: this.props.mainStage2[0].description,
      stateAuthor: this.props.mainStage2[0].author
    });
  }
  componentWillUnmount() {
    this.props.checkToUpdateEvent2("false");
  }

  showEdit = () => {
    this.setState({ showEditBar: !this.state.showEditBar });
    let allTitles = document.querySelectorAll(".sideMainArticleTitle");
    allTitles.forEach(e => {
      e.parentElement.parentElement.childNodes[2].classList.remove(
        "checkIfActive"
      );
      e.parentElement.parentElement.childNodes[2].classList.remove("fa-check");
      e.parentElement.parentElement.childNodes[2].classList.add(
        "fa-pencil-alt"
      );
      e.parentElement.parentElement.style.backgroundColor = "transparent";
      e.parentElement.parentElement.style = "border-bottom: 4px solid black";
    });
  };

  changeStateValue = e => {
    if (e.target.classList.contains("titleValue")) {
      this.setState({ valueTitle: e.target.value });
    }
    if (e.target.classList.contains("descriptionValue2")) {
      this.setState({ valueDesc: e.target.value });
    }
    if (e.target.classList.contains("authorValue")) {
      this.setState({ valueAuthor: e.target.value });
    }
  };
  removeErr = () => {
    setTimeout(() => {
      this.setState({
        missDesc: false,
        missTitle: false,
        missAuthor: false
      });
    }, 2000);
  };

  addToState = () => {
    if (String(this.state.valueTitle) === "") {
      this.setState({ missTitle: true });
      this.removeErr();
    }
    if (String(this.state.valueDesc) === "") {
      this.setState({ missDesc: true });
      this.removeErr();
    }
    if (String(this.state.valueAuthor) === "") {
      this.setState({ missAuthor: true });
      this.removeErr();
    }

    if (
      !String(this.state.valueTitle) == "" &&
      !String(this.state.valueAuthor) == "" &&
      !String(this.state.valueDesc) == ""
    ) {
      let newObject = {
        id: uuidv1(),
        title: this.state.valueTitle,
        description: this.state.valueDesc,
        author: this.state.valueAuthor
      };

      this.setState({ showEditBar: false });
      this.props.addEvent2(newObject);

      this.props.showEvent2({
        id: this.state.currID,
        title: this.state.valueTitle,
        description: this.state.valueDesc,
        author: this.state.valueAuthor
      });
    }
  };

  changeState = newEle => {
    if (newEle.classList.contains("updateTitleStateArticles")) {
      this.setState({ stateTitle: String(newEle.value) });
    }
    if (newEle.classList.contains("updateAuthorStateArticles")) {
      this.setState({ stateAuthor: String(newEle.value) });
    }
    if (newEle.classList.contains("descriptionStageTextAreaArticles")) {
      this.setState({ stateDescription: String(newEle.value) });
    }
  };

  watchValue = () => {
    let state = this.state;

    this.props.articles.forEach(e => {
      if (e.id === this.props.mainStage2[0].id) {
        let storeUpdatedObject = {
          id: state.currID,
          title: state.stateTitle,
          description: state.stateDescription,
          author: state.stateAuthor
        };
        this.props.updateEvent2(storeUpdatedObject);
      }
    });
  };

  showitem = (id, title, description, author) => {
    this.setState({ showEditBar: false });
    let allTitles = document.querySelectorAll(".sideMainArticleTitle");
    allTitles.forEach(e => {
      e.parentElement.parentElement.childNodes[2].classList.remove(
        "checkIfActive"
      );
      e.parentElement.parentElement.childNodes[2].classList.remove("fa-check");
      e.parentElement.parentElement.childNodes[2].classList.add(
        "fa-pencil-alt"
      );
      e.parentElement.parentElement.style = "border-bottom: 4px solid black";

      e.parentElement.parentElement.style.backgroundColor = "transparent";
      if (e.innerHTML === title) {
        if (e.innerHTML !== this.props.articles[0].title) {
          e.parentElement.parentElement.previousSibling.style =
            "border-bottom:4px solid rgb(36, 187, 36)";
          e.parentElement.parentElement.style =
            "border-bottom:4px solid rgb(36, 187, 36)";
        }
        e.parentElement.parentElement.style =
          "border-bottom:4px solid rgb(36, 187, 36)";
        e.parentElement.parentElement.style.backgroundColor =
          "rgb(36, 187, 36)";
      }
    });

    this.props.showEvent2({
      id: id,
      title: title,
      description: description,
      author: author
    });

    this.props.checkToUpdateEvent2("false");
  };

  editItem = (id, title, description, author, MyObject) => {
    let allTitles = document.querySelectorAll(".sideMainArticleTitle");

    allTitles.forEach(e => {
      e.parentElement.parentElement.style.backgroundColor = "transparent";
    });
    if (this.state.showEditBar) {
      this.setState({ showEditBar: false });
    } else {
      this.setState({ currID: id });
      let allActiveEditsCheck = document.querySelectorAll(".checkIfActive");
      let sideArticle = document.querySelector(".sideArticle");
      let individualEvent = document.querySelectorAll(
        ".mainSideArticleListContainer"
      );

      if (MyObject.target.classList.contains("checkIfActive")) {
        allTitles.forEach(e => {
          e.parentElement.parentElement.style.backgroundColor = "transparent";
        });

        allActiveEditsCheck.forEach(MyObject => {
          MyObject.classList.remove("checkIfActive");
          MyObject.classList.remove("fa-check");
        });

        MyObject.target.classList.add("fa-pencil-alt");
        this.props.checkToUpdateEvent2("else");
        this.watchValue();

        individualEvent.forEach(e => {
          e.style.backgroundColor = "transparent";
        });
      } else {
        if (this.state.showEditBar) {
          this.setState({ showEditBar: false });

          allTitles.forEach(e => {
            e.parentElement.parentElement.childNodes[2].classList.remove(
              "checkIfActive"
            );
            e.parentElement.parentElement.childNodes[2].classList.remove(
              "fa-check"
            );
            e.parentElement.parentElement.childNodes[2].classList.add(
              "fa-pencil-alt"
            );
            e.parentElement.parentElement.style =
              "border-bottom: 4px solid black";

            e.parentElement.parentElement.style.backgroundColor = "transparent";

            if (e.innerHTML === title) {
              if (e.innerHTML !== this.props.articles[0].title) {
                e.parentElement.parentElement.previousSibling.style =
                  "border-bottom:4px solid rgb(36, 187, 36)";
                e.parentElement.parentElement.style =
                  "border-bottom:4px solid rgb(36, 187, 36)";
              }
              e.parentElement.parentElement.style =
                "border-bottom:4px solid rgb(36, 187, 36)";
              e.parentElement.parentElement.style.backgroundColor =
                "rgb(36, 187, 36)";
            }
          });

          this.props.showEvent2({
            id: id,
            title: title,
            description: description,
            author: author
          });

          this.props.checkToUpdateEvent2("false");
        } else {
          allActiveEditsCheck.forEach(MyObject => {
            MyObject.classList.remove("checkIfActive");
            MyObject.classList.remove("fa-check");
            MyObject.classList.add("fa-pencil-alt");
          });

          individualEvent.forEach(e => {
            e.style.backgroundColor = "transparent";
          });
          let parent = sideArticle;
          let child = MyObject.target.parentElement;
          var index = Array.prototype.indexOf.call(parent.children, child);
          this.setState({ currIndex: index });

          sideArticle.childNodes.forEach(e => {
            e.style = "border-bottom:4px solid black";
          });

          sideArticle.childNodes[index].style.backgroundColor = "yellow";

          MyObject.target.classList.remove("fa-pencil-alt");
          MyObject.target.classList.add("fa-check");
          MyObject.target.classList.add("checkIfActive");

          this.setState({
            stateTitle: String(this.props.articles[index].title),
            stateDescription: String(this.props.articles[index].description),
            stateAuthor: String(this.props.articles[index].author)
          });
          this.props.checkToUpdateEvent2("true");
        }
      }

      this.props.showEvent2({
        id: id,
        title: this.state.stateTitle,
        description: this.state.stateDescription,
        author: this.state.stateAuthor
      });
    }
  };
  hideDeleteAction = () => {
    this.setState({ showDeleteAction: false });
  };
  submitDel = id => {
    this.setState({ deleteEventConfirm: id, showDeleteAction: true });
  };

  deleteItem = () => {
    if (this.props.articles.length > 1) {
      this.props.deleteEvent2(this.state.deleteEventConfirm);
      this.props.articles.forEach((e, index) => {
        if (e.id === this.state.deleteEventConfirm) {
          let arrIndex = () => (index === 0 ? index + 1 : index - 1);
          this.props.showEvent2({
            id: this.props.articles[arrIndex()].id,
            title: this.props.articles[arrIndex()].title,
            description: this.props.articles[arrIndex()].description,
            author: this.props.articles[arrIndex()].author
          });
        }
      });
    }
    this.setState({ showDeleteAction: false });
  };

  render() {
    return (
      //      {/*                   SECTION ONE START                             */}
      <div className="EventsMainContainer">
        {this.state.showDeleteAction ? (
          <div className="deleteActionContainer">
            {" "}
            <span className="deleteActionContainerHeader">
              Сигурни ли сте,че искате да изтриете събитието?
            </span>
            <span
              className="deleteActionContainerDelete"
              onClick={this.deleteItem}
            >
              Изтрий
            </span>{" "}
            <span
              className="deleteActionContainerCancel"
              onClick={this.hideDeleteAction}
            >
              Отмени
            </span>{" "}
          </div>
        ) : null}
        <section className="selectEvent">
          <div className="topEventHandler">
            <div className="topEventHandlerSpan">Статии</div>

            {this.state.showEditBar ? (
              <div onClick={this.showEdit} className="cancelButton">
                <span>Отмени</span> <i className="fas fa-minus" />{" "}
              </div>
            ) : (
              <div onClick={this.showEdit} className="addButton">
                <span>Добави</span>
                <i className="fas fa-plus" />
              </div>
            )}
          </div>
          <div className="sideArticle">
            {this.props.articles.map(e => {
              return (
                <Article
                  updateItem={this.editItem.bind(
                    this,
                    e.id,
                    e.title,
                    e.description,
                    e.author
                  )}
                  deleteItem={this.submitDel.bind(this, e.id)}
                  key={e.id}
                  title={e.title}
                  showCurrentArticle={this.showitem.bind(
                    this,
                    e.id,
                    e.title,
                    e.description,
                    e.author,
                    e
                  )}
                />
              );
            })}
          </div>
        </section>

        <section className="showStageContainerArticles">
          {this.state.showEditBar ? (
            <div className="addEventContainer">
              <div className="toBeCreatedDetail">
                <div className="createTitleContainer">
                  <span className="createTitleLabel">Заглавие</span>
                  {this.state.missTitle ? (
                    <span className="hiddenErrorMsg">Добавете Заглавие</span>
                  ) : null}
                  <input
                    className="titleValue"
                    onChange={this.changeStateValue}
                    value={this.state.valueTitle}
                    type="text"
                  />
                </div>
              </div>

              <div className="createDescriptionContainer">
                <span className="createDescriptionSpan">Описание</span>
                {this.state.missDesc ? (
                  <span className="hiddenErrorMsg">Добавете Описание</span>
                ) : null}
                <textarea
                  className="descriptionValue2"
                  onChange={this.changeStateValue}
                  value={this.state.valueDesc}
                  type="text"
                />
              </div>
              <div className="createAuthorContainer">
                <span className="createAuthorSpan">Автор: </span>

                <input
                  className="authorValue"
                  onChange={this.changeStateValue}
                  value={this.state.valueAuthor}
                  type="text"
                />
                {this.state.missAuthor ? (
                  <span className="hiddenErrorMsgInput">Добавете Автор</span>
                ) : null}
              </div>

              <div className="finalTouchButton">
                <div className="createArticleButton" onClick={this.addToState}>
                  Създай Статия
                </div>
              </div>
            </div>
          ) : (
            <div>
              {String(this.props.toEditOrNot2.showEditableList) === "true" ? (
                <div>
                  <div className="updateTitleContainerArticles">
                    <span className="updateTitleSpanArticles">Заглавие: </span>

                    <input
                      suppressContentEditableWarning="true"
                      contentEditable="true"
                      className="updateTitleStateArticles"
                      onChange={newTitle => this.changeState(newTitle.target)}
                      value={this.state.stateTitle}
                    />
                  </div>

                  <div className="updateDescriptionContainerArticles">
                    <span className="updateDescriptionSpanArticles">
                      Описание:
                    </span>

                    <textarea
                      contenteditable="true"
                      className="descriptionStageTextAreaArticles listenMutate"
                      onChange={newDescription =>
                        this.changeState(newDescription.target)
                      }
                      value={this.state.stateDescription}
                    />
                  </div>

                  <div className="updateAuthorContainerArticles ">
                    <span className="updateAuthorSpanArticles">Автор:</span>

                    <input
                      suppressContentEditableWarning="true"
                      contentEditable="true"
                      className="updateAuthorStateArticles"
                      onChange={newAuthor => this.changeState(newAuthor.target)}
                      value={this.state.stateAuthor}
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <div className="titleStage">
                    <span className="actualTitle2">
                      {this.props.mainStage2[0].title}
                    </span>
                  </div>

                  <div className="starRealDescription">
                    <p className="starRealActualDescription">
                      {this.props.mainStage2[0].description}
                    </p>
                  </div>

                  <div className="authorStage">
                    <span>Автор:</span>
                    <span className="actualAuthor">
                      {this.props.mainStage2[0].author}
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.event.articles,
  mainStage2: state.event.mainStage2,
  toEditOrNot2: state.event.toEditOrNot2
});

export default connect(
  mapStateToProps,
  {
    getEvents,
    showEvent2,
    deleteEvent2,
    checkToUpdateEvent2,
    updateEvent2,
    addEvent2
  }
)(Articles);
