import { Row, Col, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

// styles
import './styles/About.css'

// images
import selfie from './images/about/selfie.jpg';
import vancouver from './images/about/vancouver.gif';
import clark from "./images/about/clark.jpg";
import wsuv from './images/about/wsuv.png';
import wsuv2 from './images/about/wsuv2.png';
import reactImage from './images/about/react.jpg';
import c from './images/about/c.png';
import aws from './images/about/aws.png';
import python from './images/about/python.png';

function About() {
  const { t } = useTranslation();
  
  return (
    <div className="about-main-div">
      <div>
          <Row className="justify-content-md-center align-items-center" style={{'paddingTop' : '40px'}}>
            <Col xs={6} md={3}>
              <Image fluid src={selfie} rounded />
            </Col>
            <Col xs={6} md={3}>
              <h3>
                {t('A little bit.1')} {t('about me.1')}..
              </h3>
            </Col>
          </Row>
      </div> 

      <div>
        <Row className="justify-content-md-center" style={{'paddingTop' : '80px'}}>
            <Col xs={6} md={3}>
              <Image fluid src={vancouver} rounded />
            </Col>
          </Row>
          <Row className="justify-content-md-center align-items-center">
            <Col xs={6} md={3}>
              {t('I was born and raised in Vancouver WA, USA.1')}
            </Col>
          </Row>
      </div>

      <div>
          <Row className="justify-content-md-center" style={{'paddingTop' : '80px'}}>
            <Col md='auto'>
              <h3>
                {t('Education.1')}:
              </h3>   
            </Col>  
          </Row>
          <Row className="justify-content-md-center align-items-center" style={{'paddingTop' : '40px'}}>
            <Col md='auto'></Col>
            <Col>
              <Image fluid src={clark} rounded />
            </Col>
            <Col>
              <Image fluid src={wsuv} rounded />
            </Col>
            <Col>
              <Image fluid src={wsuv2} rounded />
            </Col>
          </Row>
          <Row xs={3} className="justify-content-md-center align-items-center" style={{'paddingTop' : '40px'}}>
            <Col>
              {t('Completed my AA degree in 2017 focused towards Business Administration at Clark College, Vancouver.1')}
            </Col>
            <Col>
              {t("Completed my Bachelor's degree in Computer Science at Washington State Univeristy, Vancouver in May 2021.1")}
            </Col>
            <Col>
              {t("I'm working on completing my Master's in Computer Science at Washington State University, Vancouver in May 2023.1")}
            </Col>
          </Row>
        </div>

        <div>
          <Row className="justify-content-md-center" style={{'paddingTop' : '80px'}}>
            <Col md='auto'>
              <h3>
                {t('Interests.1')}:
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
          <Row xs={4} className="justify-content-md-center align-items-center" style={{'paddingTop' : '40px', 'paddingBottom' : '80px'}}>
            <Col>
              {t('React JS was the reason I pursued a degree in Computer Science.1')}
            </Col>
            <Col>
              {t('For my first two years I was mainly programming in C.1')}
            </Col>
            <Col>
              {t('Then I mainly programmed in Python for my remaining two years.1')}
            </Col>
            <Col>
              {t("When I'm not finishing assignments, I'm studying Amazon Web services.1")}
            </Col>
          </Row>

        
      </div>

        <Row className="align-items-center" style={{'paddingTop' : '40px', 'textAlign' : 'center'}}>
          <Col>
            <a className="text-secondary" href="/">
              {t('Home.1')}
            </a>
          </Col>
          <Col>
            <a className="text-secondary" href="/about">
              {t('About.1')}
            </a>
          </Col>
          <Col>
            <a className="text-secondary" href="/projects">
              {t('Projects.1')}
            </a>
          </Col> 
        </Row>

        <Row style={{'paddingTop' : '80px'}}></Row>

    </div>
  )
}

export default About;
