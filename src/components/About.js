import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="aboutMainContainer">
        <section className="topseactionAbout">
          <div className="aboutDescMainContainer">
            <h1 className="topseactionAboutHead">Какво целим?</h1>
            <div className="AboutSectionP1Container">
              <p className="topseactionAboutP1">
                Nam ullamcorper nisl et orci interdum varius. Nulla pulvinar,
                ante eget aliquet ultrices, nibh libero maximus ligula, sed
                vestibulum massa mi eget urna. Duis pretium feugiat leo, ut
                sagittis enim sagittis imperdiet. Nulla facilisi. Duis ut
                convallis quam. Mauris sodales condimentum quam eget aliquam. Ut
                tempor dui a sem blandit elementum. Praesent volutpat egestas
                maximus.
              </p>
            </div>
            <div className="AboutSectionP2Container">
              <p className="topseactionAboutP2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                pulvinar vulputate neque eu consequat. Nulla ultricies vel enim
                id efficitur. Donec fermentum fermentum massa, in aliquet lacus
                convallis nesemperlor.
              </p>
            </div>
          </div>

          <img
            className="imgAbout"
            src={require("../img/easterEgg.jpg")}
            alt="shibaImg"
          />
        </section>

        <section className="topseactionAbout2">
          <img
            className="imgAbout2"
            src={require("../img/easterEgg2.jpg")}
            alt="shibaImg2"
          />
          <div className="aboutDescMainContainer2">
            <h1 className="topseactionAboutHead2">Как ще го постигнем?</h1>
            <div className="AboutSectionP1Container2">
              <p className="topseactionAbout2P1">
                Nam ullamcorper nisl et orci interdum varius. Nulla pulvinar,
                ante eget aliquet ultrices, nibh libero maximus ligula, sed
                vestibulum massa mi eget urna. Duis pretium feugiat leo, ut
                sagittis enim sagittis imperdiet. Nulla facilisi. Duis ut
                convallis quam. Mauris sodales condimentum quam eget aliquam. Ut
                tempor dui a sem blandit elementum. Praesent volutpat egestas
                maximus.
              </p>
            </div>
            <div className="AboutSectionP2Container2">
              <p className="topseactionAbout2P2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                pulvinar vulputate neque eu consequat. Nulla ultricies vel enim
                id efficitur. Donec fermentum fermentum massa, in aliquet lacus
                convallis nesemper justo justo vitae arcu. Pellentesque in
                venenatis neque. Sed non sem dolor.
              </p>
            </div>
          </div>
        </section>

        <section className="topseactionAbout3">
          <div className="aboutDescMainContainer3">
            <h1 className="topseactionAboutHead3">Кои са нашите принципи?</h1>
            <div className="AboutSectionP1Container3">
              <p className="topseactionAbout3P1">
                Nam ullamcorper nisl et orci interdum varius. Nulla pulvinar,
                ante eget aliquet ultrices, nibh libero maximus ligula, sed
                vestibulum massa mi eget urna. Duis pretium feugiat leo, ut
                sagittis enim sagittis imperdiet. Nulla facilisi. Duis ut
                convallis quam. Mauris sodales condimentum quam eget aliquam. Ut
                tempor dui a sem blandit elementum. Praesent volutpat egestas
                maximus.
              </p>
            </div>
          </div>

          <img
            className="imgAbout3"
            src={require("../img/easterEgg3.jpg")}
            alt="shibaImg3"
          />
        </section>

        <section className="topseactionAbout4">
          <img
            className="imgAbout4"
            src={require("../img/easterEgg4.jpg")}
            alt="shibaImg4"
          />
          <div className="aboutDescMainContainer4">
            <h1 className="topseactionAboutHead4"> Кои сме ние?</h1>
            <div className="AboutSectionP1Container4">
              <p className="topseactionAbout4P1">
                Nam ullamcorper nisl et orci interdum varius. Nulla pulvinar,
                ante eget aliquet ultrices, nibh libero maximus ligula, sed
                vestibulum massa mi eget urna. Duis pretium feugiat leo, ut
                sagittis enim sagittis imperdiet. Nulla facilisi. Duis ut
                convallis quam. Mauris sodales condimentum quam eget aliquam. Ut
                tempor dui a sem blandit elementum. Praesent volutpat egestas
                maximus.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
