import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getEvents, showEvent } from "../actions/actionReciever";
import React, { Component } from "react";
import EventIntroHid from "../components/Events/EventIntroHid";
import "react-responsive-carousel/lib/styles/carousel.min.css";
var Carousel = require("react-responsive-carousel").Carousel;

class intro extends Component {
  showCurrentEvent = e => {
    let title = e.target.parentElement.children[0].innerHTML;
    let myObject = this.props.events.filter(e => {
      return e.title === title;
    });
    let key = myObject[0].title;
    this.props.showEvent({ id: key });
  };

  render() {
    return (
      <div className="containerMainIntro">
        <div className="containerMainTop">
          <section className="aboutIntro">
            <h1 className="headerIntro"> Lorem ipsum </h1>
            <p className="aboutIntroText">
              Quisque fringilla lectus vel commodo feugiat. Vestibulum
              pellentesque orci at maximus sollicitudin. Suspendisse hendrerit a
              ante id semper.
            </p>
            <Link to="/about" className="joinUsButtonContainer">
              <span className="joinUsButton">Присъедини се към нас</span>
            </Link>
          </section>

          <section className="galleryIntro">
            <Carousel
              infiniteLoop={true}
              interval={4000}
              autoPlay={true}
              showArrows={true}
              showThumbs={false}
              showStatus={false}
            >
              <div>
                <img src={require("../img/intoImgGal1.jpg")} alt="gal" />
              </div>
              <div>
                <img src={require("../img/intoImgGal2.jpg")} alt="gal" />
              </div>
              <div>
                <img src={require("../img/intoImgGal3.jpg")} alt="gal" />
              </div>
              <div>
                <img src={require("../img/intoImgGal4.jpg")} alt="gal" />
              </div>
            </Carousel>
          </section>
        </div>

        <section className="latestEventsContaner">
          <h2 className="impactHeader">
            Нашето <br /> <span className="underTextSpan"> влияние</span>
          </h2>

          <div className="benefitsPackageContainer ">
            <div className="benefitsPackageContainerIconPack">
              <div className="brainBenefitsContaiener benefitC">
                <i className="fas fa-brain" />
                <div className="benefitDescContainer">
                  <p className="benefitDesc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </p>
                </div>
              </div>

              <div className="dogsBenefitsContaiener benefitC">
                <i className="fas fa-dog" />
                <div className="benefitDescContainer">
                  <p className="benefitDesc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </p>
                </div>
              </div>

              <div className="friendsBenefitsContaiener benefitC">
                <i className="fas fa-user-friends" />
                <div className="benefitDescContainer">
                  <p className="benefitDesc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sectionBottomInfo">
          <div className="div1Bottom">
            <img src={require("../img/imgParallax.jpg")} alt="lol" />
          </div>

          <div className="div2Bottom">
            <h1 className="freedomHeader">Nam rhoncus phar</h1>
            <p className="freedomPara">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
              mauris non nulla aliquet vestibulum vel nec risus. Praesent
              convallis libero eu nis malesuada cursus.
            </p>
            <h2 className="latestEvents">Последните събития</h2>

            <div className="eventsContainer">
              {this.props.events.map((e, index) =>
                index < 3 ? (
                  <div key={index} className="eventsContainer2">
                    <span className="indexEventLolCount">{index + 1}.</span>
                    <EventIntroHid key={e.id} title={e.title} />
                  </div>
                ) : null
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: state.event.events
});

export default connect(
  mapStateToProps,
  { getEvents, showEvent }
)(intro);
