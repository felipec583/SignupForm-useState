import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const SocialButton = ({ github, linkedin, facebook }) => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="icon-wrapper" xs={3}>
          {github && <FontAwesomeIcon icon={faGithub} size="3x" />}
        </Col>
        <Col className="icon-wrapper" xs={3}>
          {linkedin && <FontAwesomeIcon icon={faLinkedin} size="3x" />}
        </Col>
        <Col className="icon-wrapper" xs={3}>
          {facebook && <FontAwesomeIcon icon={faFacebook} size="3x" />}
        </Col>
      </Row>
    </Container>
  );
};

export default SocialButton;
