import React, { useRef } from "react";
import NavBar from "../Navbar/Navbar";
import welcomepage from "../welcome page/welcomepage.css";
import { useNavigate } from "react-router-dom";

import {
  Carousel,
  Card,
  Container,
  Row,
  Col,
  Button,
  Nav,
  FormControl,
  Navbar,
  Spinner,
  Form,
} from "react-bootstrap";

function FeaturedSection() {
  return (
    <Container className="px-4 py-5" id="featured-3">
      <h2 className="pb-2 border-bottom" style={{ textAlign: "left" }}>
        Discover Our Featured Courses
      </h2>
      <Row className="g-4 py-5 row-cols-1 row-cols-lg-3">
        <Col>
          <Card className="feature d-flex flex-column h-100">
            <div className="feature-icon bg-primary bg-gradient">
              <svg
                className="bi"
                width="1em"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <use xlinkHref="#collection" />
              </svg>
            </div>
            <Card.Body className="flex-grow-1">
              <Card.Title>Elevate Your Skills in Digital Marketing</Card.Title>
              <Card.Text>
                Embark on a transformative journey in Marketing and Business
                with our dynamic courses designed to enhance your digital
                marketing skills and strategic thinking.
              </Card.Text>
              <a href="#" className="icon-link">
                Explore Courses
                <svg
                  className="bi"
                  width="1em"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <use xlinkHref="#chevron-right" />
                </svg>
              </a>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="feature d-flex flex-column h-100">
            <div className="feature-icon bg- bg-gradient">
              <svg
                className="bi"
                width="1em"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <use xlinkHref="#people-circle" />
              </svg>
            </div>
            <Card.Body className="flex-grow-1">
              <Card.Title>Master Personal Finance and Economics</Card.Title>
              <Card.Text>
                Take control of
                your................................................
              </Card.Text>
              <a href="#" className="icon-link">
                Discover Courses
                <svg
                  className="bi"
                  width="1em"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <use xlinkHref="#chevron-right" />
                </svg>
              </a>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="feature d-flex flex-column h-100">
            <div className="feature-icon bg-primary bg-gradient">
              <svg
                className="bi"
                width="1em"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <use xlinkHref="#toggles2" />
              </svg>
            </div>
            <Card.Body className="flex-grow-1">
              <Card.Title>
                Unleash Your Creativity with Arts and Photography
              </Card.Title>
              <Card.Text>
                Dive into a world of creativity with our Arts and Photography
                courses, where every brushstroke, click of the camera, or
                digital creation becomes a unique masterpiece.
              </Card.Text>
              <a href="#" className="icon-link">
                Start Learning
                <svg
                  className="bi"
                  width="1em"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <use xlinkHref="#chevron-right" />
                </svg>
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

function AboutSection() {
  const redirect = useNavigate();
  const featuredRef = useRef(null);

  return (
<div className="containers">
  <Container>
    <Row className="gx-lg-5 align-items-center mb-5">
      <Col
        lg={6}
        style={{ zIndex: 10, top: "60%", left: "30%" }}
        className="mb-5 mb-lg-0"
      >
        <img
          src="https://friendkit.cssninja.io/assets/img/illustrations/characters/friends.svg"
          alt="Illustration of friends"
        />
      </Col>
      <Col lg={6} className="mb-5 mb-lg-0 position-relative">
        <h1
          className="my-5 display-3 fw-bold ls-tight"
          style={{ color: "hsl(218, 81%, 95%)" }}
        >
          Connect and Share with TALAQI
        </h1>
        <p
          className="mb-4 opacity-70"
          style={{ color: "hsl(218, 81%, 85%)" }}
        >
          Join TALAQI, your go-to social media platform for connecting with friends, sharing moments, and discovering new experiences together.
        </p>
        <Button
          href="#landing-start"
          variant="light"
          className="waves-effect waves-light"
          onClick={() => {}}
        >
          Get Started
        </Button>{" "}
        <Button variant="light" className="waves-effect waves-light ">
          Take a Tour
        </Button>{" "}
      </Col>
    </Row>
  </Container>
</div>

  );
}

function WelcomeSection() {
  return (
    <div className="about-section text-center bg-light py-5" id="landing-start">
      <Container>
        <h1
          className="display-4 mb-4"
          style={{ fontFamily: "Montserrat, sans-serif", color: "#293241" }}
        >
          Welcome To Our Community
        </h1>
        <p
          className="lead"
          style={{
            fontFamily: "Open Sans, sans-serif",
            color: "#455a64",
            padding: "20px",
            textAlign: "left",
          }}
        >
          Welcome to [social media name], your ultimate social destination where
          connections flourish and communities come alive! Dive into a world
          where every interaction is an opportunity to connect with friends,
          family, and like-minded individuals from across the globe. Here, we're
          all about fostering meaningful relationships and creating memories
          that last a lifetime.
        </p>
        <p
          className="lead"
          style={{
            fontFamily: "Open Sans, sans-serif",
            color: "#455a64",
            padding: "20px",
            textAlign: "left",
          }}
        >
          Join us as we embark on a journey of discovery and camaraderie, where
          every like, comment, and share brings us closer together. Whether
          you're here to network, socialize, or simply unwind after a long day,
          ConnectHub is your virtual home away from home. So come on in, make
          yourself comfortable, and let the connections begin! Welcome to
          ConnectHub – where connections thrive, and the possibilities are
          endless!
        </p>
      </Container>
    </div>
  );
}

class WelcomePage extends React.Component {
  render() {
    return (
      <div>
        <style>
          {`
        
          
          .containers {
            position: relative;
            height: 100%;

            width: 100%;
            height: 100vh;

            background : linear-gradient(to left bottom, #659BDC 60%, #ffff 10%)
          }
          
          .split {
            position: absolute;
            width: 50%;
            height: 100%;
          }
          
        
          
          .centered {
            position: absolute;
            top: 60%;
            left: 25%;
            transform: translate(-50%, -50%);
            text-align: center;
            z-index: 0;
          }
          
          .centered img {
            
            width: 300px;
            border-radius: 50%;
          }
        `}
        </style>
        <NavBar />
        <AboutSection />
        <FeaturedSection />
        <WelcomeSection />
        <div style={{ padding: "25px", margin: "25px" }}>
          <Carousel>
            <Carousel.Item>
              <img
                src="https://res.cloudinary.com/dalwd5c23/image/upload/v1705177932/samples/cup-on-a-table.jpg"
                alt="First slide"
                style={{
                  width: "100%",
                  height: "500px",
                  objectFit: "cover",
                }}
              />

              <Carousel.Caption style={{ color: "black" }}>
                <h3>Welcome to Our E-Learning Platform</h3>
                <p>Explore a world of knowledge and opportunities.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://res.cloudinary.com/dalwd5c23/image/upload/v1705520544/pexels-cottonbro-studio-3826678_c9cqau.jpg"
                alt="Second slide"
                style={{
                  width: "100%",
                  height: "500px",
                  objectFit: "cover",
                }}
              />

              <Carousel.Caption>
                <h3>Discover Inspiring Learning</h3>
                <p>
                  Embark on a journey of education with our diverse courses.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://res.cloudinary.com/dalwd5c23/image/upload/v1705192445/2_tjhssu.jpg"
                alt="Third slide"
                style={{
                  width: "30%",
                  height: "500px",
                  objectFit: "cover",
                  margin: "auto",
                }}
              />

              <Carousel.Caption>
                <h3>Unlock Your Potential</h3>
                <p>Discover new horizons and expand your skills with us.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <Container className="px-4 py-5" style={{ textAlign: "left" }}>
          <h2 className="pb-2 border-bottom">
            Unleash Your Learning Experience
          </h2>

          <Row className="row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
            <Col className="d-flex flex-column align-items-start gap-2">
              <h2
                className="fw-bold text-primary"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "2rem",
                }}
              >
                Unlocking Limitless Potential
              </h2>
              <p
                className="text-secondary"
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  fontSize: "1.1rem",
                }}
              >
                Embark on a learning journey with features designed to elevate
                your experience. Our commitment to excellence ensures a seamless
                exploration of knowledge and skills.
              </p>
              <Button href="#" variant="primary" size="lg">
                Start Your Journey
              </Button>
            </Col>

            <Col>
              <Row className="row-cols-1 row-cols-sm-2 g-4">
                <Col className="d-flex flex-column gap-2">
                  <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-primary bg-gradient fs-4 rounded-3">
                    <svg className="bi" width="1em" height="1em">
                      <use xlinkHref="#collection"></use>
                    </svg>
                  </div>
                  <h4
                    className="fw-semibold mb-0 text-primary"
                    style={{ fontSize: "1.2rem" }}
                  >
                    Diverse Content
                  </h4>
                  <p className="text-secondary">
                    Explore a rich collection of courses covering a wide range
                    of subjects. From technology to arts, we have curated
                    content to spark your curiosity.
                  </p>
                </Col>

                <Col className="d-flex flex-column gap-2">
                  <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-primary bg-gradient fs-4 rounded-3">
                    <svg className="bi" width="1em" height="1em">
                      <use xlinkHref="#gear-fill"></use>
                    </svg>
                  </div>
                  <h4
                    className="fw-semibold mb-0 text-primary"
                    style={{ fontSize: "1.2rem" }}
                  >
                    Interactive Learning
                  </h4>
                  <p className="text-secondary">
                    Engage in interactive learning experiences that go beyond
                    traditional methods. Our platform provides hands-on
                    activities and real-world applications.
                  </p>
                </Col>

                <Col className="d-flex flex-column gap-2">
                  <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-primary bg-gradient fs-4 rounded-3">
                    <svg className="bi" width="1em" height="1em">
                      <use xlinkHref="#speedometer"></use>
                    </svg>
                  </div>
                  <h4
                    className="fw-semibold mb-0 text-primary"
                    style={{ fontSize: "1.2rem" }}
                  >
                    Personalized Pace
                  </h4>
                  <p className="text-secondary">
                    Tailor your learning journey with our personalized pace
                    feature. Whether you prefer a quick sprint or a steady
                    marathon, we cater to your unique learning style.
                  </p>
                </Col>

                <Col className="d-flex flex-column gap-2">
                  <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-primary bg-gradient fs-4 rounded-3">
                    <svg className="bi" width="1em" height="1em">
                      <use xlinkHref="#table"></use>
                    </svg>
                  </div>
                  <h4
                    className="fw-semibold mb-0 text-primary"
                    style={{ fontSize: "1.2rem" }}
                  >
                    Comprehensive Resources
                  </h4>
                  <p className="text-secondary">
                    Access a wealth of comprehensive resources, including study
                    materials, quizzes, and discussion forums. Our platform
                    ensures you have everything you need to succeed.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default WelcomePage;
