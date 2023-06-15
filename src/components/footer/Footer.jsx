/* eslint-disable no-unused-vars */
import React from 'react'
import { Container, Row } from 'react-bootstrap'
import FooterCard from './FooterCard'

function Footer() {
  const handleLinkScroll =()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <>
    <Container fluid className=" bg-body-secondary d-flex justify-content-center align-items-center" style={{ minHeight: "62vh"}}>
        <Container>
            <Row className="py-5">
                <FooterCard handleLinkScroll={handleLinkScroll}/>
            </Row>
        </Container>
    </Container>
    </>
  )
}

export default Footer