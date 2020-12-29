import './About.css'
import { Row, Col, Image } from 'react-bootstrap';
import ReactPageScroller from 'react-page-scroller';
import { useState } from 'react';

// images
import selfie from './images/about/selfie.jpg';
import vancouver from './images/about/vancouver.gif';
import clark from "./images/about/clark.jpg";
import wsuv from './images/about/wsuv.png';
import reactImage from './images/about/react.jpg';
import c from './images/about/c.png';
import aws from './images/about/aws.png';
import python from './images/about/python.png';

function About() {

  const [currentPage, setCurrentPage] = useState(0);

  function handlePageChange (number) {
    setCurrentPage(number);
  }

  function FirstComponent() {
    return(
      <div className="component first-component">
          <Row className="justify-content-md-center align-items-center" style={{'paddingTop' : '40px'}}>
            <Col xs={6} md={3}>
              <Image fluid src={selfie} rounded />
            </Col>
            <Col xs={6} md={3}>
              <h3>
                A little bit about me..
              </h3>
            </Col>
          </Row>
      </div>    
    )
  }

  function SecondComponent() {
    return(
      <div className="component">
        <Row className="justify-content-md-center" style={{'paddingTop' : '40px'}}>
            <Col xs={6} md={3}>
              <Image fluid src={vancouver} rounded />
            </Col>
          </Row>
          <Row className="justify-content-md-center align-items-center">
            <Col xs={6} md={3}>
              I was born and raised in Vancouver WA, USA
            </Col>
          </Row>
      </div>
    )
  }

  function ThirdComponent() {
    return(
      <div className="component">
          <Row className="justify-content-md-center" style={{'paddingTop' : '40px'}}>
            <Col md='auto'>
              <h3>
                Education:
              </h3>   
            </Col>  
          </Row>
          <Row className="justify-content-md-center align-items-center">
            <Col xs={6} md={3}>
              <Image fluid src={clark} rounded />
            </Col>
            <Col xs={6} md={3}>
              <Image fluid src={wsuv} rounded />
            </Col>
          </Row>
          <Row className="justify-content-md-center align-items-center" style={{'paddingTop' : '40px'}}>
            <Col xs={6} md={3}>
              Completed my AA degree in 2017 focused towards Business Administration at Clark College, Vancouver
            </Col>
            <Col xs={6} md={3}>
              Currently finishing my degree in Computer Science 
              at Washington State Univeristy, Vancouver (May 2021)
            </Col>
          </Row>
        </div>
    )
  }
  
  function FourthComponent() {
    return(
      <div className="component">
          <Row className="justify-content-md-center" style={{'paddingTop' : '40px'}}>
            <Col md='auto'>
              <h3>
                Interests:
              </h3>   
            </Col>  
          </Row>
          <Row className="justify-content-md-center align-items-center" style={{'paddingTop' : '40px'}}>
            <Col>
              <Image fluid src={reactImage} rounded />
            </Col>
            <Col>
              <Image fluid src={c} rounded />
            </Col>
            <Col>
              <Image fluid src={python} rounded />
            </Col>
            <Col>
              <Image fluid src={aws} rounded />
            </Col>
          </Row>
          <Row className="justify-content-md-center align-items-center" style={{'paddingTop' : '40px'}}>
            <Col>
              React JS was the reason I pursued a degree in Computer Science
            </Col>
            <Col>
              For my first two years I was mainly programming in C
            </Col>
            <Col>
              Then I mainly programmed in Python for my remaining two years
            </Col>
            <Col>
              When I'm not finishing assignments, I'm studying Amazon Web services
            </Col>
          </Row>
      </div>
    )
  }
  
  return (
    <>
      <ReactPageScroller
          pageOnChange={handlePageChange}
          customPageNumber={currentPage}
          animationTimer={500}
          renderAllPagesOnFirstRender={true}
        >
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
        <FourthComponent />
      </ReactPageScroller>
    </>
  )
}

export default About;
