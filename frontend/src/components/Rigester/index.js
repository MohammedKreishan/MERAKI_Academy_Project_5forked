import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
// import {Button,Form,Container,Row,Col} from "react-bootstrap";
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  Form,
  Image,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
export default function Rigester() {
  const [userName, setUserName] = useState("");
  const [open1, setOpen1] = useState(false);

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPhoto, setUserPhoto] = useState("");
  const [userAge, setUserAge] = useState(0);
  const [result, setUserResult] = useState("");
  const [status, setStatus] = useState(false);
  const redirect = useNavigate();
  // const tese = localStorage("toke")
  // Cloudinary Parameters
  const pr_key = "nb0pjnta";
  const cloud_name = "dalwd5c23";
  // const handleButtonClick = () => {
  //   document.querySelector(".input-file").click();
  // };
  const handleFileInputChange = (e) => {
    console.log(5);
  };
  const handleClick = () => {
    // Handle click action here
  };

  // get Cloudinary URL
  const handleButtonClick = (files) => {
    const formData = new FormData();
    console.log(files);
    formData.append("file", files[0]);
    formData.append("upload_preset", pr_key);

    fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.url);
        setUserPhoto(data.url);
      });
  };

  return (
    // <section className="background-radial-gradient overflow-hidden">
    //   <style>
    //     {`
    //       .background-radial-gradient {
    //         background-color: #3b5998; /* Facebook blue */
    //         background-image: radial-gradient(650px circle at 0% 0%,
    //             hsla(0, 0%, 100%, 0.1) 15%,
    //             hsla(0, 0%, 100%, 0) 80%),
    //           radial-gradient(1250px circle at 100% 100%,
    //             hsla(0, 0%, 100%, 0.1) 15%,
    //             hsla(0, 0%, 100%, 0) 80%);
    //       }

    //       #radius-shape-1 {
    //         height: 220px;
    //         width: 220px;
    //         top: -60px;
    //         left: -130px;
    //         background: radial-gradient(#44006b, #ad1fff);
    //         overflow: hidden;
    //       }
    //       #radius-shape-2 {
    //         border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;
    //         bottom: -60px;
    //         right: -110px;
    //         width: 300px;
    //         height: 300px;
    //         background: radial-gradient(#44006b, #ad1fff);
    //         overflow: hidden;
    //       }
    //       .bg-glass {
    //         background-color: hsla(0, 0%, 100%, 0.9) !important;
    //         backdrop-filter: saturate(200%) blur(25px);
    //       }

    //       .container {
    //         position: relative;
    //         width: 100%;
    //         height: 100vh;
    //       }

    //       .split {
    //         position: absolute;
    //         width: 50%;
    //         height: 100%;
    //       }

    //       .left {
    //         left: 0;
    //         background-color: #ffff;
    //       }

    //       .right {
    //         right: 0;
    //         background-color: red;
    //       }

    //       .centered {
    //         position: absolute;
    //         top: 50%;
    //         left: 50%;
    //         transform: translate(-50%, -50%);
    //         text-align: center;
    //       }

    //       .centered img {
    //         width: 150px;
    //         border-radius: 50%;
    //       }
    //     `}
    //   </style>

    //   <Container className="px-4 py-5 px-md-5 text-center text-lg-start my-5">
    //     <Row className="gx-lg-5 align-items-center mb-5">
    //       <Col lg={6} style={{ zIndex: 10 }} className="mb-5 mb-lg-0">
    //         <h1
    //           className="my-5 display-5 fw-bold ls-tight"
    //           style={{ color: "hsl(218, 81%, 95%)" }}
    //         >
    //           The best offer <br />
    //           <span style={{ color: "hsl(218, 81%, 75%)" }}>
    //             for your business
    //           </span>
    //         </h1>
    //         <p
    //           className="mb-4 opacity-70"
    //           style={{ color: "hsl(218, 81%, 85%)" }}
    //         >
    //           Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    //           Temporibus, expedita iusto veniam atque, magni tempora mollitia
    //           dolorum consequatur nulla, neque debitis eos reprehenderit quasi
    //           ab ipsum nisi dolorem modi. Quos?
    //         </p>
    //       </Col>

    //       <Col lg={6} className="mb-5 mb-lg-0 position-relative">
    //         <div
    //           id="radius-shape-1"
    //           className="position-absolute rounded-circle shadow-5-strong"
    //         ></div>
    //         <div
    //           id="radius-shape-2"
    //           className="position-absolute shadow-5-strong"
    //         ></div>

    //         <div className="card bg-glass">
    //           <div className="card-body px-4 py-5 px-md-5">
    //             <Form>
    //               <Row>
    //                 <h2 className="mb-4" style={{ color: "black" }}>
    //                   Rigester
    //                 </h2>{" "}
    //                 {/* Added Login Label */}
    //                 <Col md={6} className="mb-4">
    //                   <Form.Group>
    //                     <Form.Label>First name</Form.Label>
    //                     <Form.Control
    //                       type="text"
    //                       placeholder="First Name"
    //                       onChange={(e) => {
    //                         setUserFirstName(e.target.value);
    //                       }}
    //                     />
    //                   </Form.Group>
    //                 </Col>
    //                 <Col md={6} className="mb-4">
    //                   <Form.Group>
    //                     <Form.Label>Last name</Form.Label>
    //                     <Form.Control
    //                       type="text"
    //                       placeholder="Last Name"
    //                       onChange={(e) => {
    //                         setUserLastName(e.target.value);
    //                       }}
    //                     />{" "}
    //                   </Form.Group>
    //                 </Col>
    //               </Row>

    //               <Form.Group className="mb-4">
    //                 <Form.Label>Email address</Form.Label>
    //                 <Form.Control
    //                   type="email"
    //                   placeholder="Email"
    //                   onChange={(e) => {
    //                     setUserEmail(e.target.value);
    //                   }}
    //                 />{" "}
    //               </Form.Group>

    //               <Form.Group className="mb-4">
    //                 <Form.Label>Password</Form.Label>
    //                 <Form.Control
    //                   type="password"
    //                   placeholder="Password"
    //                   onChange={(e) => {
    //                     setUserPassword(e.target.value);
    //                   }}
    //                 />{" "}
    //               </Form.Group>

    //               <Form.Group className="mb-4">
    //                 <Form.Check
    //                   type="checkbox"
    //                   id="form2Example33"
    //                   label="Subscribe to our newsletter"
    //                   defaultChecked
    //                 />
    //               </Form.Group>

    //               <Button
    //               variant="outline-primary w-100"
    //               id="Register_btn"
    //               onClick={() => {
    //                 axios
    //                   .post("http://localhost:5000/users/register", {
    //                     username: `${userFirstName} ${userLastName}`,
    //                     email: userEmail,
    //                     password_hash: userPassword
    //                   })
    //                   .then((res) => {
    //                     setStatus(true)
    //                     setUserResult(res.data.message);
    //                     redirect("/users/login");

    //                   })
    //                   .catch((err) => {
    //                     setUserResult(err.response.data.message)
    //                   });
    //               }}
    //             >
    //               Register
    //             </Button>
    //             {status
    //           ? result && <div className="SuccessMessage">{result}</div>
    //           : result && <div className="ErrorMessage">{result}</div>}
    //               <div className="text-center">
    //                 <p>or sign up with:</p>
    //                 <Button variant="link" className="btn-floating mx-1">
    //                   <i className="fab fa-facebook-f"></i>
    //                 </Button>

    //                 <Button variant="link" className="btn-floating mx-1">
    //                   <i className="fab fa-google"></i>
    //                 </Button>

    //                 <Button variant="link" className="btn-floating mx-1">
    //                   <i className="fab fa-twitter"></i>
    //                 </Button>

    //                 <Button variant="link" className="btn-floating mx-1">
    //                   <i className="fab fa-github"></i>
    //                 </Button>
    //               </div>
    //             </Form>
    //           </div>
    //         </div>
    //       </Col>
    //     </Row>
    //   </Container>
    // </section>
    <div className="top-container">
      <header
        style={{
          backgroundColor: "#659BDC",
          color: "#E8EFFD",
          textAlign: "center",
          fontFamily: "fantasy",
        }}
      >
        <h3 style={{ paddingTop: "10px" }}>TALAQI</h3>{" "}
      </header>
      <Container className="container" fluid>
        <Card
          className="text-black m-5 containers"
          style={{ borderRadius: "25px" ,backgroundColor:"inherit",border:"none",fontFamily: "fantasy"}}
        >
          <Card.Body>
            <Row>
              <Col
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center "
              >
                <p
                  className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"
                  style={{ color: "#ffff" }}
                >
                  Sign up
                </p>
                {/* Profile Picture Input */}
                <div className="mb-4" style={{ color: "#E8EFFD" }}>
                  {/* SVG Icon */}
                  {userPhoto ? (
                    <img
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "25px",
                      }}
                      src={userPhoto}
                    />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      fill="currentColor"
                      onClick={() => {
                        document.querySelector(".input-file").click();
                      }}
                      // onClick={(e) => handleButtonClick(e.target.files)}
                      className="bi bi-person-square"
                      viewBox="0 0 16 16"
                      style={{
                        marginRight: "10px",
                        transition: "fill 0.3s",
                        cursor: "pointer",
                      }} // Apply transition effect
                      onMouseEnter={(e) => {
                        e.target.style.fill = "blue";
                      }} // Change fill color on hover
                      onMouseLeave={(e) => {
                        e.target.style.fill = "currentColor";
                      }} // Restore original fill color
                    >
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                      <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                    </svg>
                  )}

                  {/* Hidden Input File */}
                  <input
                    onChange={(e) => handleButtonClick(e.target.files)}
                    type="file"
                    className="input-file"
                    style={{ display: "none" }}
                  />
                  <Form.Label className="mt-4">Profile Picture</Form.Label>
                </div>

                <div
                  className="d-flex flex-row align-items-center mb-4 "
                  style={{ color: "#E8EFFD" }}
                >
                  <Form.Label className="me-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      class="bi bi-person-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                      <path
                        fill-rule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                      />
                    </svg>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    style={{ height: "50px", width: "350px" }}
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                  />
                </div>

                <div
                  className="d-flex flex-row align-items-center mb-4"
                  style={{ color: "#E8EFFD" }}
                >
                  <Form.Label className="me-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      class="bi bi-envelope-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                    </svg>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    style={{ height: "50px", width: "350px" }}
                    onChange={(e) => {
                      setUserEmail(e.target.value);
                    }}
                  />
                </div>

                <div
                  className="d-flex flex-row align-items-center mb-4"
                  style={{ color: "#E8EFFD" }}
                >
                  <Form.Label className="me-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      class="bi bi-key-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2M2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                    </svg>
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    style={{ height: "50px", width: "350px" }}
                    onChange={(e) => {
                      setUserPassword(e.target.value);
                    }}
                  />
                </div>

                <Button
                  className="mb-4"
                  variant="primary"
                  size="lg"
                  style={{ height: "50px", width: "350px", marginLeft: "23px" }}
                  onClick={() => {
                    axios
                      .post("http://localhost:5000/users/register", {
                        username: userName,
                        email: userEmail,
                        password_hash: userPassword,
                        profile_picture_url: userPhoto,
                      })
                      .then((res) => {
                        setStatus(true);
                        setUserResult(res.data.message);
                        redirect("/users/login");
                      })
                      .catch((err) => {
                        setUserResult(err.response.data.message);
                        console.log(err);
                      });
                  }}
                >
                  Register
                </Button>
              </Col>
              <div className="d-none d-lg-block vertical-line"></div>

              <Col
                md="10"
                lg="6"
                className="order-1 order-lg-2 d-flex align-items-center"
              >
                <Card.Img
                  src="https://friendkit.cssninja.io/assets/img/illustrations/characters/friends.svg"
                  style={{ width: "600px" }}
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
