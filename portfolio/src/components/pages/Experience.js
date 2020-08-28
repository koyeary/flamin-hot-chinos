/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import Navbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
/* import SectionCarousel from "components/Index.js"; */
/* import SectionCarousel from "views/index-sections/SectionCarousel"; */



function Experience() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
      <>
        <Navbar />
        <ProfilePageHeader />
        <div className="section profile-content">
          <Container>
            <div className="owner">
              <div className="avatar">
                <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  /* src={require("assets/img/profileimage.jpg")} */
                  src={"https://i.ebayimg.com/images/g/-VEAAOSwxOJexvG5/s-l400.jpg"}
                />
              </div>
              <div className="name">
                <h4 className="title">
                  Kat Yeary <br />
                </h4>
                <h6>Full Stack Developer</h6>
              </div>
            </div>
            <Row>
              <Col className="ml-auto mr-auto text-left" md="6">
                <p className="mb-4">
                  I'm a junior engineer with experience - and room to grow - at every step of the software lifecycle. To put it in the simplest terms, I love programming. My preference is for challenging problems, but my primary goal right now is to gain more experience and learn from great developers. 
                  </p>
                  
                  <h6>Personal details:</h6>
                  <p>I live in Los Angeles with my fiancee, who is a tv writer and animator, and her cat. I've also been a working stand-up comic for seven years. My main hobbies are learning languages (my original background was in translation) and painting (strictly the dumbest things I can think of).
                  </p>
                
                <br />
                <Button className="btn-round" color="default" outline>
                  Experience <i className="fa fa-code" />
                </Button>
              </Col>
            </Row>
            <br />
  
          </Container>
        </div>
        <DemoFooter />
      </>
    );
  }
export default Experience;