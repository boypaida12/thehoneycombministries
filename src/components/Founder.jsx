/* eslint-disable no-unused-vars */
import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import FounderImage from "../assets/founder.jpg"

function Founder() {
  return (
    <>
    <Container fluid className="bg-body-secondary">
    <Container>
        <Row>
            <Col md={6}>
                    <Image src={FounderImage} alt="Founder of the Ministries" fluid/>
            </Col>
            <Col className="align-self-center my-5" md={6}>
            <p className='text-uppercase display-5 fw-semibold'>Meet our founder</p>
            <p className="text-uppercase text-yellow fs-5 fw-semibold">Lorem ipsum dolor sit amet</p>
            <p className="text-muted">Dolor sit amet consectetur adipisicing elit. Magni, consequuntur! Quas nemo laborum ipsum dolorem voluptas eum! Possimus, neque rem.</p>
            </Col>
        </Row>
    </Container>
    </Container>
    </>
  )
}

export default Founder