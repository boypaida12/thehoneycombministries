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
          <p className="fs-5 fw-bold">{footerD.title}</p>
          <small>
            <p className="text-muted w-75">{footerD.paragraph}</p>
          </small>
          {footerD.links && (
            <>
              {footerD.links.map((link, i) => (
                <Link
                  to={link.href}
                  key={i}
                  className="text-muted nav-link w-75"
                  onClick={handleLinkScroll}
                >
                  <small>
                    <p>{link.label}</p>
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
