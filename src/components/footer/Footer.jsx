/* eslint-disable no-unused-vars */
import React from 'react'
import { Container, Row } from 'react-bootstrap'
import FooterCard from './FooterCard'

function Footer() {
  return (
    <>
    <Container fluid className="bg-yellow d-flex justify-content-center align-items-center" style={{ minHeight: "62vh"}}>
        <Container>
            <Row className="py-5">
                <FooterCard/>
            </Row>
        </Container>
    </Container>
    </>
  )
}

export default Footer