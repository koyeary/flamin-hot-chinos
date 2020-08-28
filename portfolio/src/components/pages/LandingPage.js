import React from "react";
import { Link } from "react-router-dom";
import Expertise from "../index-sections/Expertise";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCode } from '@fortawesome/free-solid-svg-icons'; 
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import Navbar from "components/Navbars/IndexNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import ContactForm from "components/ContactForm"

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("resume");
    return function cleanup() {
      document.body.classList.remove("resume");
    };
  });

  //move each icon and corresponding section to new individual component file.
  const codeBranch = <FontAwesomeIcon icon={faCodeBranch} />
  const envIcon = <FontAwesomeIcon icon={faEnvelopeOpen} />
  const microPhone = <FontAwesomeIcon icon={faMicrophone} />

  return (
    <>
      <Navbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                {/*               <div className="owner"> 
              <div className="avatar"> */}
                <img
                  alt="..."
                  className="img-responsive" style={{ borderRadius: "50%", maxWidth: "35%" }}
                  src={require("assets/img/profileimage.jpg")}
                />
                {/*                   </div> </div>  */}
                <h2 className="title" id="test">About Me</h2>
                <h5>
                  I'm a junior engineer with experience - and room to grow - at every step of the software lifecycle. My preference is for challenging problems, but my primary goal right now is to gain more experience and learn from great developers.<br /><br />I got into programming accidentally - while writing copy for another developer - and then found out I love doing it. I want to learn something new every day, improving on what I already know and seeking out the newest technologies.</h5>

                <br />
                <br />
                <Link to="/resume">
                  <Button
                    className="btn-link"
                    color="info"
                    href="/resume"
                  /*  onClick={(e) => e.preventDefault()} */
                  >
                    Experience {codeBranch}
                  </Button>
                </Link>

                  <Expertise/>
         <Link to="/contact">
    <Button
      className="btn-link"
      color="info"
      href="/contact"
      onClick={(e) => e.preventDefault()}
    >
      Contact {envIcon}
    </Button>
  </Link>

  <Link to="/getToKnowMe">
    <Button
      className="btn-link"
      color="info"
      href="/about"
      onClick={(e) => e.preventDefault()}
    >
      Get to know me {microPhone}
    </Button>
  </Link>

</Col>
</Row>
<br />
<br />
          </Container>
        </div>
        <div className="section section-dark text-center">
          <Container>
            <h2 className="title" id="about">Get to know me.</h2>
            <Row>
              <Col md="4">
                <Card className="card-plain">
                  <CardBody>
                    <img
                      alt="..."
                      className="img-no-padding img-responsive"
                      src={require("assets/img/Kat_Yeary-6.jpg")}
                    />
                  </CardBody>
              </Card>
              </Col>
              <Col md="2"></Col>
              <Col md="5">
                <Card className="card-plain">
                  <CardBody>
                  <p className="card-description text-center" style={{ fontSize: "1.15rem" }}>
                      I'm a working stand-up comic, which I've been doing for about seven years. It's a great job - fun, risky, and it only takes about an hour a day. Performing over zoom has been surprisingly entertaining, but I'm looking forward to never doing it again.
                    </p>

                    <p className="card-description text-center mt-5" style={{ fontSize: "1.15rem" }}>
                      I live with my fiancee Lauren, who is a tv writer and animator, and a cat. My main hobbies are learning languages (my original background is in translation) and painting (strictly the dumbest things I can think of). My taste in television is terrible.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center" >
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="https:twitter.com/katyeary?lang=en"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="https://www.github.com/koyeary"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-github" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="https://https://www.linkedin.com/in/kat-yeary/"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="1"></Col>
            </Row>
          </Container>
        </div>
        <div className="section landing-section">
          <Container className="vh-75">
            <ContactForm/>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
