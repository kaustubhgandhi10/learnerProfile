import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import skillGardenImg from "../images/skill garden.png";
import paint from "../images/1_paint.png";
import rocket from "../images/1_icon copy.png";
import power from "../images/1_icon copy 2.png";
import star from "../images/1_icon.png";
import streak from "../images/1_icon copy 3.png";
import horse from "../images/1_horse.png";
import puzzle from "../images/1_puzzle.png";
import achievement from "../images/1_Achievement.png";
import badge from "../images/1_badge.png";
import data from "../profileData.json";
import nikhilImage from "../images/Nikhil.jpg";
import expert from "../expertData.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import "../styles/profile.css";

export const Profile = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };

  const carouselItems = [
    { id: 1, src: "../src/images/1.jpeg", alt: "Image 1" },
    { id: 2, src: "../src/images/2.jpeg", alt: "Image 2" },
    { id: 3, src: "../src/images/3.jpeg", alt: "Image 3" },
    { id: 4, src: "../src/images/4.png", alt: "Image 4" },
    { id: 5, src: "../src/images/5.jpeg", alt: "Image 5" },
    { id: 6, src: "../src/images/6.jpg", alt: "Image 6" },
    { id: 7, src: "../src/images/7.jpeg", alt: "Image 7" },
    { id: 8, src: "../src/images/8.jpeg", alt: "Image 8" },
  ];

  const {
    clientDetails,
    current,
    level,
    levelNumber,
    levelPoints,
    scoreName1,
    scoreName2,
    scoreName3,
    scoreNumber1,
    scoreNumber2,
    scoreNumber3,
    skillGarden,
    skillName,
    skillInfo,
    skillBadges,
    badgeName1,
    badgeName2,
    badgeName3,
    topAchievements,
    acheivementName1,
    acheivementName2,
    acheivementName3,
    acheivementName4,
    learningBadges,
    learning1,
    learning2,
    glowingReviews,
  } = data;

  const { expertDetails } = expert;

  return (
    <div id="profile">
      <div id="profileShapes">
        <Container>
          <Row className="profileHead">
            <Col md={{ span: 8, order: 1 }} xs={{ span: 12, order: 2 }}>
              <div id="profileHeading">
                <div id="profilePhoto">
                  <img src={nikhilImage} alt="" />
                  {clientDetails.map((item) => (
                    <div key={item.className} id="personDetails">
                      <h2>
                        {item.clientName}
                        <span>{item.leader}</span>
                      </h2>

                      <p>{item.clientDescription}</p>
                    </div>
                  ))}
                </div>
                <div className="whiteBox">
                  <Row>
                    <Col xs={5}>
                      <div id="profileLevel">
                        <p>{current}</p>
                        <hr className="profileLine" />
                        <h2>
                          <img src={rocket} alt="rocket image" />
                          {level}
                        </h2>
                        <h3>{levelNumber}</h3>
                        <hr className="profileLine" />
                        <p className="text-start">{levelPoints}</p>
                      </div>
                    </Col>
                    <Col xs={7} className="profileScore">
                      <div className="scores">
                        <h2>
                          <img src={power} alt="power image" />
                          {scoreName1}
                        </h2>
                        <span>{scoreNumber1}</span>
                      </div>

                      <div className="scores">
                        <h2>
                          <img src={star} alt="star image" />
                          {scoreName2}
                        </h2>
                        <span>{scoreNumber2}</span>
                      </div>

                      <div className="scores">
                        <h2>
                          <img src={streak} alt="streak" />
                          {scoreName3}
                        </h2>
                        <span>{scoreNumber3}</span>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col
              md={{ span: 4, order: 2 }}
              xs={{ span: 12, order: 1 }}
              className="skillBox"
            >
              <div className="whiteBox">
                <div id="skillGarden">
                  <h2>{skillGarden}</h2>
                  <div className="scores">
                    <h3>{skillName}</h3>
                    <p>{skillInfo}</p>
                  </div>
                  <img className="GardenImage" src={skillGardenImg} alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="certifications">
        <Container>
          <Row className="skillHead">
            <Col md={6} xs={12} style={{ zIndex: 12 }}>
              <div className="section">
                <h2>{skillBadges}</h2>
              </div>

              <Row id="skills">
                <Col xs={4}>
                  <div className="whiteBox">
                    <img src={paint} alt="paint image" />
                    <hr className="badgeLine" />
                    <h3> {badgeName1}</h3>
                  </div>
                </Col>
                <Col xs={4}>
                  <div className="whiteBox">
                    <img src={horse} alt="horse image" />
                    <hr className="badgeLine" />
                    <h3> {badgeName2}</h3>
                  </div>
                </Col>
                <Col xs={4}>
                  <div className="whiteBox">
                    <img src={puzzle} alt="puzzle image" />
                    <hr className="badgeLine" />
                    <h3> {badgeName3}</h3>
                  </div>
                </Col>
              </Row>

              <div className="section">
                <h2>{learningBadges}</h2>
              </div>

              <div id="badges">
                <div className="whiteBox">
                  <Row>
                    <Col xs={6}>
                      <div className="learnings">
                        <img src={badge} alt="badge image" />
                        <div className="badgesDetails">
                          <h3>{learning1}</h3>
                          <p> 22nd April 2024</p>
                        </div>
                      </div>
                    </Col>
                    <Col xs={6}>
                      <div className="learnings">
                        <img src={badge} alt="badge image" />
                        <div className="badgesDetails">
                          <h3>{learning2}</h3>
                          <p> 22nd April 2024</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>

            <Col md={6} style={{ zIndex: 12 }}>
              <div className="section">
                <h2>{topAchievements}</h2>
              </div>

              <div className="whiteBox">
                <div className="achievements">
                  <img src={achievement} alt="" />
                  <div className="acheivementTitle">
                    <h3> {acheivementName1}</h3>
                    <p>22nd April 2024</p>
                  </div>
                </div>

                <div className="achievements">
                  <img src={achievement} alt="" />
                  <div className="acheivementTitle">
                    <h3> {acheivementName2}</h3>
                    <p>22nd April 2024</p>
                  </div>
                </div>

                <div className="achievements">
                  <img src={achievement} alt="" />
                  <div className="acheivementTitle">
                    <h3> {acheivementName3}</h3>
                    <p>22nd April 2024</p>
                  </div>
                </div>

                <div className="achievements">
                  <img src={achievement} alt="" />
                  <div className="acheivementTitle">
                    <h3> {acheivementName4}</h3>
                    <p>22nd April 2024</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="spotlight">
        <Container>
          <div className="section">
            <h2>Spotlight</h2>
          </div>
        </Container>
      </div>

      <div className="profile-carousel">
        <Slider {...settings}>
          {carouselItems.map((item) => (
            <div key={item.id} className="carousel-item">
              <img src={item.src} alt={item.alt} className="carousel-image" />
              {/* <p>{item.label}</p> */}
            </div>
          ))}
        </Slider>
      </div>

      <div id="empty"></div>

      <div id="reviews">
        <Container>
          <Row>
            <div className="section">
              <h2>{glowingReviews}</h2>
            </div>
            {expertDetails.map((details) => (
              <Col key={details.id} md={6} style={{ zIndex: 12 }}>
                <div className="whiteBox">
                  <div className="expert">
                    <img src={details.userImageUrl} alt="expert's image" />
                  </div>
                  <h3>{details.userName}</h3>
                  <p className="designation">{details.userDesignation}</p>
                  <p className="reviewDetails">{details.userDescription}</p>
                  <p className="date"> 26th August. 2024</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};
