/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import footerData from "./FooterData";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function FooterCard({handleLinkScroll}) {
  return (
    <>
      {footerData.map((footerD, index) => (
        <Col key={index} lg={4}>
          <p className="fs-4 fw-bold">{footerD.title}</p>
          <small>
            <p className="w-75 text-muted">{footerD.paragraph}</p>
          </small>
          {footerD.links && (
            <>
              {footerD.links.map((link, i) => (
                <Link
                  to={link.href}
                  target={link.target}
                  key={i}
                  className="nav-link w-75"
                  onClick={handleLinkScroll}
                >
                  <small>
                    <p className="text-muted">{link.label}</p>
                  </small>
                  <hr />
                </Link>
              ))}
            </>
          )}
          <Row>
            <Col xs={1}>{footerD.locationIcon}</Col>
            <Col>
              <small>{footerD.location}</small>
            </Col>
          </Row>
          <Row className="my-4">
            <Col xs={1}>{footerD.emailIcon}</Col>
            <Col>
              <small>{footerD.email}</small>
            </Col>
          </Row>
          <Row>
            <Col xs={1}>{footerD.phoneIcon}</Col>
            <Col>
              <small>{footerD.phone}</small>
            </Col>
          </Row>
        </Col>
      ))}
    </>
  );
}

export default FooterCard;
