import React from 'react'
import './CSS/Footer.css';
import { Container,Row,Col,Figure } from 'react-bootstrap';

function Footer() {
  return (
   <div className="bg-dark text-white p-md-5">
      <Container className='mt-md-5' >
  <Row>
    <Col className="m-0 p-0">
    <h6 style={{color:"#175DA8"}}>JOB SEEKERS</h6>
    <div className='pl-0'>
    <Row><a href='#'>Job Search</a></Row>
    <Row><a href='#'>Job Seekers Login</a></Row>
    <Row><a href='#'>Upload Resume</a></Row>
    <Row><a href='#'>Career Advice</a></Row>
    <Row><a href='#'>Search Tips</a></Row>
    <Row><a href='#'>Free Job Alert</a></Row>
    <Row><a href='#'>Find Companies</a></Row>
    <Row><a href='#'>Help</a></Row>
    </div>
    </Col>

    <Col className="m-0 p-0">
    <h6 style={{color:"#175DA8"}}>EMPLOYERS</h6>
    <div className='pl-2'>
    <Row><a href='#'>Employers Login</a></Row>
    <Row><a href='#'>Job Posting</a></Row>
    <Row><a href='#'>Access Resume Database</a></Row>
    <Row><a href='#'>Join M recruiters</a></Row>
    <Row><a href='#'>Research Report</a></Row>
    <Row><a href='#'>Buy Online</a></Row>
    </div>
    </Col>

    <Col className="m-0 p-0">
    <h6 style={{color:"#175DA8"}}>MAQURE</h6>
    <div className='pl-2'>
    <Row><a href='#'>About Us</a></Row>
    <Row><a href='#'>Contact Us</a></Row>
    <Row><a href='#'>Career With Us</a></Row>
    <Row><a href='#'>Send Feedback</a></Row>
    <Row><a href='#'>Testimonials</a></Row>
    <Row><a href='#'>Html Sitemap</a></Row>
    <Row><a href='#'>xml Sitemap</a></Row>
    <Row><a href='#'>Job Apps</a></Row>
    </div>
    </Col>

    <Col className="m-0 p-0">
    <h6 style={{color:"#175DA8"}}>STAY CONNECTED</h6>
    <div className='pl-2'>
    <Row><a href='#'>Security & Fraud</a></Row>
    <Row><a href='#'>Privacy Policy</a></Row>
    <Row><a href='#'>Term of Use</a></Row>
    <Row><a href='#'>Be Safe</a></Row>
    <Row><a href='#'>Complaints</a></Row>
    <Row><div className=''><a><Figure.Image
    width={100}
    height={50}
    alt="171x180"
    src="holder.js/171x180"
  /></a></div></Row>
   <Row><div className=''><a><Figure.Image
    width={100}
    height={50}
    alt="171x180"
    src="holder.js/171x180"
  /></a></div></Row>
    </div>
    </Col>

    <Col className="m-0 p-0">
    <h6 style={{color:"#175DA8"}}>LEGAL</h6>
    <div className='pl-2'>
    <Row><a href='#'>Facebook</a></Row>
    <Row><a href='#'>Twitter</a></Row>
    <Row><a href='#'>Linkedin</a></Row>
    <Row><a href='#'>Instagram</a></Row>
    <Row><a href='#'>Youtube</a></Row>
        </div>
    </Col>
  </Row>
  </Container>
   </div>


  )
}

export default Footer