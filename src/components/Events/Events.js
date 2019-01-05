import React, { Component } from "react";
import Event from "./Event";
import axios from "axios";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getEvents,
  showEvent,
  checkToUpdateEvent,
  deleteEvent,
  updateEvent,
  addImages,
  addEvent
} from "../../actions/actionReciever";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
const uuidv1 = require("uuid/v1");
class Events extends Component {
  state = {
    currID: "",
    photoIndex: 0,
    isOpen: false,
    stateTitle: "",
    stateDate: "",
    stateLocation: "",
    stateDescription: "",
    stateTax: "",
    stateNote: "",
    showDeletePics: false,
    currIndex: 0,
    showEditBar: false,
    currImg: [],
    valueDesc: "",
    valueTitle: "",
    valueTax: "",
    valueNote: "",
    valueDate: "",
    valueLocation: "",
    missDesc: false,
    missImg: false,
    missLoc: false,
    missTax: false,
    missNote: false,
    missTitle: false,
    missDate: false,
    showDeleteAction: false,
    deleteEventConfirm: ""
  };

  componentDidMount() {
    let allTitles = document.querySelectorAll(".sideMainTitle");
    allTitles.forEach((e, index) => {
      if (index === 0) {
        e.parentElement.parentElement.style.backgroundColor =
          "rgb(36, 187, 36)";
        e.parentElement.parentElement.style.borderBottom =
          "4px solid rgb(36, 187, 36)";
      }
    });
    this.props.getEvents();
    this.props.showEvent({
      id: this.props.events[0].id,
      title: this.props.events[0].title,
      images: this.props.events[0].images,
      date: this.props.events[0].date,
      description: this.props.events[0].description,
      location: this.props.events[0].location,
      tax: this.props.events[0].tax,
      note: this.props.events[0].note
    });

    this.setState({
      currID: this.props.mainStage[0].id,
      stateTitle: this.props.mainStage[0].title,
      stateDate: this.props.mainStage[0].date,
      stateLocation: this.props.mainStage[0].location,
      stateDescription: this.props.mainStage[0].description,
      stateTax: this.props.mainStage[0].tax,
      stateNote: this.props.mainStage[0].note
    });
  }

  notify = () => {
    toast.info("Добавени 7 снимки!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  };

  componentWillUnmount() {
    this.props.checkToUpdateEvent("false");
  }

  showEdit = () => {
    this.setState({ showEditBar: !this.state.showEditBar });
    this.setState({
      currImg: [],
      valueDesc: "",
      valueTitle: "",
      valueTax: "",
      valueNote: "",
      valueDate: "",
      valueLocation: ""
    });
    let allTitles = document.querySelectorAll(".sideMainTitle");
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
    if (e.target.classList.contains("descriptionValue")) {
      this.setState({ valueDesc: e.target.value });
    }
    if (e.target.classList.contains("taxValue")) {
      this.setState({ valueTax: e.target.value });
    }
    if (e.target.classList.contains("noteValue")) {
      this.setState({ valueNote: e.target.value });
    }
    if (e.target.classList.contains("dateValue")) {
      this.setState({ valueDate: e.target.value });
    }
    if (e.target.classList.contains("locationValue")) {
      this.setState({ valueLocation: e.target.value });
    }
  };

  removeErr = () => {
    setTimeout(() => {
      this.setState({
        missDesc: false,
        missImg: false,
        missLoc: false,
        missTax: false,
        missNote: false,
        missTitle: false,
        missDate: false
      });
    }, 2000);
  };

  addToState = () => {
    if (String(this.state.valueTitle) == "") {
      this.setState({ missTitle: true });
      this.removeErr();
    }
    if (String(this.state.valueDate) == "") {
      this.setState({ missDate: true });
      this.removeErr();
    }
    if (String(this.state.valueTax) == "") {
      this.setState({ missTax: true });
      this.removeErr();
    }
    if (String(this.state.valueDesc) == "") {
      this.setState({ missDesc: true });
      this.removeErr();
    }
    if (String(this.state.valueNote) == "") {
      this.setState({ missNote: true });
      this.removeErr();
    }
    if (String(this.state.valueLocation) == "") {
      this.setState({ missLoc: true });
      this.removeErr();
    }
    if (this.state.currImg.length < 1) {
      this.setState({ missImg: true });
      this.removeErr();
    }

    if (
      !String(this.state.valueTitle) == "" &&
      !String(this.state.valueDate) == "" &&
      !String(this.state.valueTax) == "" &&
      !String(this.state.valueDesc) == "" &&
      !String(this.state.valueNote) == "" &&
      !String(this.state.valueLocation) == "" &&
      !this.state.currImg.length < 1
    ) {
      let newObject = {
        id: uuidv1(),
        title: this.state.valueTitle,
        date: this.state.valueDate,
        tax: this.state.valueTax,
        images: this.state.currImg,
        description: this.state.valueDesc,
        note: this.state.valueNote,
        location: this.state.valueLocation
      };
      this.setState({ showEditBar: false });
      this.props.addEvent(newObject);

      this.props.showEvent({
        id: this.state.currID,
        title: this.state.valueTitle,
        images: this.state.currImg,
        date: this.state.valueDate,
        location: this.state.valueLocation,
        description: this.state.valueDesc,
        tax: this.state.valueTax,
        note: this.state.valueNote
      });
    }
  };

  addShibas = ide => {
    let thisProps = this.props;
    let thisState = this;
    let thisStateReal = this.state;

    axios
      .get(
        "https://api.codetabs.com/v1/proxy?quest=http://shibe.online/api/shibes?count=7"
      )
      .then(function(response) {
        let myImages = {
          id: ide,
          images: response.data
        };
        thisState.notify();
        thisState.setState({
          currImg: thisStateReal.currImg.concat(response.data)
        });

        thisProps.addImages(myImages);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  updateAddImg = () => {
    this.props.events.forEach((e, index) => {
      if (e.id === this.props.mainStage[0].id) {
        this.setState({ currImg: this.props.events[index].images });
      }
    });
  };

  changeState = newEle => {
    if (newEle.classList.contains("updateDateState")) {
      this.setState({ stateDate: String(newEle.value) });
    }
    if (newEle.classList.contains("updateTitleState")) {
      this.setState({ stateTitle: String(newEle.value) });
    }
    if (newEle.classList.contains("updateLocationState")) {
      this.setState({ stateLocation: String(newEle.value) });
    }
    if (newEle.classList.contains("descriptionStageTextArea")) {
      this.setState({ stateDescription: String(newEle.value) });
    }
    if (newEle.classList.contains("updateTaxState")) {
      this.setState({ stateTax: String(newEle.value) });
    }
    if (newEle.classList.contains("updateNoteState")) {
      this.setState({ stateNote: String(newEle.value) });
    }
  };

  watchValue = () => {
    let state = this.state;

    this.props.events.forEach(e => {
      if (e.id === this.props.mainStage[0].id) {
        let storeUpdatedObject = {
          id: state.currID,
          title: state.stateTitle,
          images: e.images,
          date: state.stateDate,
          location: state.stateLocation,
          description: state.stateDescription,
          tax: state.stateTax,
          note: state.stateNote
        };
        this.props.updateEvent(storeUpdatedObject);
      }
    });
  };

  showitem = (id, title, images, date, location, description, tax, note) => {
    let allStuff = document.querySelectorAll(".mainSideEventListContainer");
    allStuff.forEach(e => {
      if (e.childNodes[2].classList.contains("checkIfActive")) {
        let addButt = document.querySelector(".addShibaImages");
        let removeButt = document.querySelector(".deleteImages");
        addButt.style = "visibility: hidden";
        removeButt.style = "visibility: hidden";
      }
    });

    this.setState({ showEditBar: false });
    let allTitles = document.querySelectorAll(".sideMainTitle");
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
        if (e.innerHTML !== this.props.events[0].title) {
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

    this.props.showEvent({
      id: id,
      title: title,
      images: images,
      date: date,
      location: location,
      description: description,
      tax: tax,
      note: note
    });

    this.props.checkToUpdateEvent("false");
  };

  deleteImages = () => {
    this.props.events.forEach((e, index) => {
      if (e.id === this.props.mainStage[0].id) {
        this.setState({ currImg: this.props.events[index].images });
      }
    });

    let toAnimate = document.querySelector(".imgContainerMain");
    if (String(this.state.showDeletePics) === "true") {
      toAnimate.classList.remove("animateDown");
    } else {
      let toAnimate = document.querySelector(".imgContainerMain");
      toAnimate.classList.add("animateDown");
    }
    this.setState({
      showDeletePics: !this.state.showDeletePics
    });
  };

  deleteItemImage = e => {
    let currImg = e.target.parentElement.childNodes[0].innerHTML;
    let objectNewImg = this.state.currImg.filter(img =>
      img !== currImg ? img : null
    );

    this.props.updateEvent({
      id: this.state.currID,
      title: this.state.stateTitle,
      images: objectNewImg,
      date: this.state.stateDate,
      location: this.state.stateLocation,
      description: this.state.stateDescription,
      tax: this.state.stateTax,
      note: this.state.stateNote
    });

    this.setState({
      currImg: objectNewImg
    });
  };

  editItem = (
    id,
    title,
    images,
    date,
    location,
    description,
    tax,
    note,
    MyObject
  ) => {
    let allTitles = document.querySelectorAll(".sideMainTitle");
    allTitles.forEach(e => {
      e.parentElement.parentElement.style.backgroundColor = "transparent";
    });
    if (String(this.state.showDeletePics) === "true") {
      let toAnimate = document.querySelector(".imgContainerMain");
      toAnimate.classList.remove("animateDown");
      this.setState({
        showDeletePics: false
      });
    }

    if (this.state.showEditBar) {
      this.setState({ showEditBar: false });
    } else {
      this.setState({ currID: id });

      let hiddenButton1 = document.querySelector(".deleteImages");
      let hiddenButton2 = document.querySelector(".addShibaImages");
      let allActiveEditsCheck = document.querySelectorAll(".checkIfActive");
      let sideEvent = document.querySelector(".sideEvent");
      let individualEvent = document.querySelectorAll(
        ".mainSideEventListContainer"
      );

      if (MyObject.target.classList.contains("checkIfActive")) {
        let allTitles = document.querySelectorAll(".sideMainTitle");

        allTitles.forEach(e => {
          e.parentElement.parentElement.style.backgroundColor = "transparent";
        });

        allActiveEditsCheck.forEach(MyObject => {
          MyObject.classList.remove("checkIfActive");
          MyObject.classList.remove("fa-check");
        });

        MyObject.target.classList.add("fa-pencil-alt");

        hiddenButton1.style = "visibility: hidden";
        hiddenButton2.style = "visibility: hidden";
        this.props.checkToUpdateEvent("else");
        this.watchValue();

        individualEvent.forEach(e => {
          e.style.backgroundColor = "transparent";
        });
      } else {
        if (this.state.showEditBar) {
          this.setState({ showEditBar: false });
          let allTitles = document.querySelectorAll(".sideMainTitle");
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
              if (e.innerHTML !== this.props.events[0].title) {
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

          this.props.showEvent({
            id: id,
            title: title,
            images: images,
            date: date,
            location: location,
            description: description,
            tax: tax,
            note: note
          });

          // this.props.checkToUpdateEvent("false");
        } else {
          allActiveEditsCheck.forEach(MyObject => {
            MyObject.classList.remove("checkIfActive");
            MyObject.classList.remove("fa-check");
            MyObject.classList.add("fa-pencil-alt");
          });

          individualEvent.forEach(e => {
            e.style.backgroundColor = "transparent";
          });
          let parent = sideEvent;
          let child = MyObject.target.parentElement;
          var index = Array.prototype.indexOf.call(parent.children, child);
          this.setState({ currIndex: index });

          sideEvent.childNodes.forEach(e => {
            e.style = "border-bottom:4px solid black";
          });
          sideEvent.childNodes[index].style.backgroundColor = "yellow";

          MyObject.target.classList.remove("fa-pencil-alt");
          MyObject.target.classList.add("fa-check");
          MyObject.target.classList.add("checkIfActive");

          hiddenButton1.style = "visibility: visible";
          hiddenButton2.style = "visibility: visible";

          this.setState({
            stateTitle: String(this.props.events[index].title),
            stateDate: String(this.props.events[index].date),
            stateDescription: String(this.props.events[index].description),
            stateTax: String(this.props.events[index].tax),
            stateNote: String(this.props.events[index].note),
            stateLocation: String(this.props.events[index].location)
          });
          this.props.checkToUpdateEvent("true");
        }
      }

      this.props.showEvent({
        id: id,
        title: this.state.stateTitle,
        images: images,
        date: this.state.stateDate,
        location: this.state.stateLocation,
        description: this.state.stateDescription,
        tax: this.state.stateTax,
        note: this.state.stateNote
      });
    }
  };

  deleteItem = () => {
    if (this.props.events.length > 1) {
      this.props.deleteEvent(this.state.deleteEventConfirm);
      this.props.events.forEach((e, index) => {
        if (e.id === this.state.deleteEventConfirm) {
          let arrIndex = () => (index === 0 ? index + 1 : index - 1);
          this.props.showEvent({
            id: this.props.events[arrIndex()].id,
            title: this.props.events[arrIndex()].title,
            images: this.props.events[arrIndex()].images,
            date: this.props.events[arrIndex()].date,
            description: this.props.events[arrIndex()].description,
            location: this.props.events[arrIndex()].location,
            tax: this.props.events[arrIndex()].tax,
            note: this.props.events[arrIndex()].note
          });
        }
      });
    }
    this.setState({ showDeleteAction: false });
  };

  hideDeleteAction = () => {
    this.setState({ showDeleteAction: false });
  };
  submitDel = id => {
    this.setState({ deleteEventConfirm: id, showDeleteAction: true });
  };

  render() {
    const { photoIndex, isOpen } = this.state;
    var i;
    this.props.events.forEach((event, index) => {
      if (event.id === this.props.mainStage[0].id) {
        i = index;
      }
    });
    if (i === undefined) {
      i = 0;
    }

    return (
      //      {/*                   SECTION ONE START                             */}
      <div className="EventsMainContainer">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
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
            <div className="topEventHandlerSpan">Събития</div>

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
          <div className="sideEvent">
            {this.props.events.map(e => {
              return (
                <Event
                  updateItem={this.editItem.bind(
                    this,
                    e.id,
                    e.title,
                    e.images,
                    e.date,
                    e.location,
                    e.description,
                    e.tax,
                    e.note
                  )}
                  deleteItem={this.submitDel.bind(this, e.id)}
                  key={e.id}
                  title={e.title}
                  showCurrentEvent={this.showitem.bind(
                    this,
                    e.id,
                    e.title,
                    e.images,
                    e.date,
                    e.location,
                    e.description,
                    e.tax,
                    e.note,
                    e
                  )}
                />
              );
            })}
          </div>
        </section>

        <section className="showStageContainer">
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

                <div className="createDateContainer">
                  <span className="createDateLabel">Дата</span>
                  {this.state.missDate ? (
                    <span className="hiddenErrorMsg">Добавете Дата</span>
                  ) : null}
                  <input
                    className="dateValue"
                    onChange={this.changeStateValue}
                    value={this.state.valueDate}
                    type="text"
                  />
                </div>

                <div className="createLocationContainer">
                  <span className="createlocationLabel">Локация</span>
                  {this.state.missLoc ? (
                    <span className="hiddenErrorMsg">Добавете Локация</span>
                  ) : null}
                  <input
                    className="locationValue"
                    onChange={this.changeStateValue}
                    value={this.state.valueLocation}
                    type="text"
                  />
                </div>

                <div className="createTaxContainer">
                  <span className="createTaxLabel">Такса</span>
                  {this.state.missTax ? (
                    <span className="hiddenErrorMsg">Добавете Такса</span>
                  ) : null}
                  <input
                    className="taxValue"
                    onChange={this.changeStateValue}
                    value={this.state.valueTax}
                    type="text"
                  />
                </div>

                <div className="createNoteContainer">
                  <span className="createNoteLabel">Забележка</span>
                  {this.state.missNote ? (
                    <span className="hiddenErrorMsg">Добавете Забележка</span>
                  ) : null}
                  <input
                    className="noteValue"
                    onChange={this.changeStateValue}
                    value={this.state.valueNote}
                    type="text"
                  />
                </div>
              </div>

              <div className="createDescriptionContainer">
                <span className="createDescriptionSpan">Описание</span>
                {this.state.missDesc ? (
                  <span className="hiddenErrorMsg"> Добавете Описание</span>
                ) : null}
                <textarea
                  className="descriptionValue"
                  onChange={this.changeStateValue}
                  value={this.state.valueDesc}
                  type="text"
                />
              </div>
              <div className="finalTouchButton">
                <div className="addImagesToEvent" onClick={this.addShibas}>
                  Добави снимки към събитието
                </div>
                {this.state.missImg ? (
                  <span className="hiddenErrorMsgImg"> Добавете Снимки</span>
                ) : null}
                <div className="createeventButton" onClick={this.addToState}>
                  Създай събитие
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="buttonGalelryContainerEditable">
                <span
                  className="openLighboxButton"
                  // type="button"
                  onClick={() => this.setState({ isOpen: true })}
                >
                  Покажи всички снимки{" "}
                  <span>
                    <span>({this.props.events[i].images.length})</span>
                  </span>
                </span>
                =
              </div>

              <span
                className="addShibaImages"
                onClick={() =>
                  this.addShibas(
                    this.props.mainStage[0].id,
                    this.props.mainStage[0].title,
                    this.props.mainStage[0].date,
                    this.props.mainStage[0].tax,
                    this.props.mainStage[0].note,
                    this.props.mainStage[0].images,
                    this.props.mainStage[0].description,
                    this.props.mainStage[0].location
                  )
                }
              >
                Добави
              </span>
              <span onClick={this.deleteImages} className="deleteImages">
                {this.state.showDeletePics ? (
                  <span className="returnImages">Върни</span>
                ) : (
                  <span className="delImages">Изтрий</span>
                )}
              </span>
              {String(this.props.toEditOrNot.showEditableList) === "true" ? (
                <div>
                  <section className="toBeUpdatedDetail">
                    <div className="updateTitleContainer ">
                      <input
                        suppressContentEditableWarning="true"
                        contentEditable="true"
                        className="updateTitleState"
                        onChange={newTitle => this.changeState(newTitle.target)}
                        value={this.state.stateTitle}
                      />
                    </div>
                    <div className="updateDateContainer ">
                      <span className="updateDateSpan">Дата: </span>
                      <input
                        suppressContentEditableWarning="true"
                        contentEditable="true"
                        className="updateDateState listenMutate"
                        onChange={newDate => this.changeState(newDate.target)}
                        value={this.state.stateDate}
                      />
                    </div>
                    <div className="updatelocationContainer">
                      <span className="updateLocationSpan">Локация: </span>
                      <input
                        suppressContentEditableWarning="true"
                        contentEditable="true"
                        className="updateLocationState listenMutate"
                        onChange={newLocation =>
                          this.changeState(newLocation.target)
                        }
                        value={this.state.stateLocation}
                      />
                    </div>

                    <div className="updateTaxContainer ">
                      <span className="updateTaxSpan">Такса за вход: </span>
                      <input
                        suppressContentEditableWarning="true"
                        contentEditable="true"
                        className="updateTaxState listenMutate"
                        onChange={newTax => this.changeState(newTax.target)}
                        value={this.state.stateTax}
                      />
                    </div>
                    <div className="updateNoteContainer ">
                      <span className="updateNoteSpan">Забележка: </span>
                      <input
                        suppressContentEditableWarning="true"
                        contentEditable="true"
                        className="updateNoteState listenMutate"
                        onChange={newNote => this.changeState(newNote.target)}
                        value={this.state.stateNote}
                      />
                    </div>
                  </section>

                  <div className="updateDescriptionContainer">
                    <span className="updateDescriptionSpan">Описание:</span>{" "}
                  </div>

                  <textarea
                    className="descriptionStageTextArea listenMutate"
                    onChange={newDescription =>
                      this.changeState(newDescription.target)
                    }
                    value={this.state.stateDescription}
                  />

                  <div>
                    <div className="deleteImageList">
                      {this.props.events[this.state.currIndex].images.map(
                        img => {
                          return (
                            <div className="wrapperContainer" key={img}>
                              <li className="imageToDeleteList">{img}</li>{" "}
                              <i
                                onClick={e => this.deleteItemImage(e)}
                                className="fas fa-times deletImag"
                              />{" "}
                            </div>
                          );
                        }
                      )}
                    </div>
                    <div className="imgContainerBoss">
                      <div className="imgContainerMain">
                        <img
                          className="imgContainerSub"
                          src={this.props.events[i].images[0]}
                          alt="lightboxImg"
                        />
                      </div>
                    </div>
                    {isOpen && (
                      <Lightbox
                        mainSrc={this.props.events[i].images[photoIndex]}
                        nextSrc={
                          this.props.events[i].images[
                            (photoIndex + 1) %
                              this.props.events[i].images.length
                          ]
                        }
                        prevSrc={
                          this.props.events[i].images[
                            (photoIndex +
                              this.props.events[i].images.length -
                              1) %
                              this.props.events[i].images.length
                          ]
                        }
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                          this.setState({
                            photoIndex:
                              (photoIndex +
                                this.props.events[i].images.length -
                                1) %
                              this.props.events[i].images.length
                          })
                        }
                        onMoveNextRequest={() =>
                          this.setState({
                            photoIndex:
                              (photoIndex + 1) %
                              this.props.events[i].images.length
                          })
                        }
                      />
                    )}
                  </div>
                </div>
              ) : (
                <div>
                  <section className="eventFlexboxDetails">
                    <div className="titleStage">
                      <span className="actualTitle">
                        {this.props.mainStage[0].title}
                      </span>
                    </div>
                    <div className="dateContainer">
                      <span className="dateDate">Дата: </span>
                      <span className="actualDate">
                        {this.props.mainStage[0].date}
                      </span>
                    </div>
                    <div className="locationDivContainer">
                      <span className="locationLocation">Локация: </span>
                      <span className="actualLocation">
                        {this.props.mainStage[0].location}
                      </span>
                    </div>
                    <div className="TaxDivContainer">
                      <span className="taxSpan">Такса за вход: </span>
                      <span className="actualTax">
                        {this.props.mainStage[0].tax}
                      </span>
                    </div>
                    <div className="NoteDivContainer">
                      <span className="NoteNote">Забележка: </span>
                      <span className="actualNote">
                        {this.props.mainStage[0].note}
                      </span>
                    </div>
                  </section>
                  {}
                  <span className="starDescription">
                    <span className="actualDescription">Описание</span>
                  </span>

                  <div className="starRealDescription">
                    <span className="starRealActualDescription">
                      {this.props.mainStage[0].description}
                    </span>
                  </div>

                  <div className="imgContainerBoss">
                    <div className="imgContainerMain">
                      <img
                        className="imgContainerSub"
                        src={this.props.events[i].images[0]}
                        alt="lightboxImg"
                      />
                    </div>
                    {isOpen && (
                      <Lightbox
                        mainSrc={this.props.events[i].images[photoIndex]}
                        nextSrc={
                          this.props.events[i].images[
                            (photoIndex + 1) %
                              this.props.events[i].images.length
                          ]
                        }
                        prevSrc={
                          this.props.events[i].images[
                            (photoIndex +
                              this.props.events[i].images.length -
                              1) %
                              this.props.events[i].images.length
                          ]
                        }
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                          this.setState({
                            photoIndex:
                              (photoIndex +
                                this.props.events[i].images.length -
                                1) %
                              this.props.events[i].images.length
                          })
                        }
                        onMoveNextRequest={() =>
                          this.setState({
                            photoIndex:
                              (photoIndex + 1) %
                              this.props.events[i].images.length
                          })
                        }
                      />
                    )}
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
  events: state.event.events,
  mainStage: state.event.mainStage,
  toEditOrNot: state.event.toEditOrNot
});

export default connect(
  mapStateToProps,
  {
    getEvents,
    showEvent,
    deleteEvent,
    checkToUpdateEvent,
    updateEvent,
    addImages,
    addEvent
  }
)(Events);
