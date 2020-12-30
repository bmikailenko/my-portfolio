import './styles/Projects.css'
import Fade from 'react-reveal/Fade';
import { Container, Row, Col, Image } from 'react-bootstrap';

//images
import binaryTree from './images/projects/binary-tree.png';
import differentialEquation from './images/projects/differential-equation.png';
import diningPhilosophers from './images/projects/dining-philosophers.png';
import dkRootFinding from './images/projects/dk-root-finding.png';
import lzwCompression from './images/projects/lzw-compression.png';
import myWeather from './images/projects/my-weather.png';
import piApprox from './images/projects/pi-approx.png';
import reToNfa from './images/projects/re-to-nfa.png';
import voterApp from './images/projects/voter-app.png';

function Projects() {

  return (
    <div className='projects-main-div'>
      <Container fluid>
        
        <Fade>

          <Row className="align-items-center" style={{'paddingTop' : '40px', 'textAlign' : 'center'}}>
            <Col>
              <a rel="noopener noreferrer" href="https://master.d2k5iyxmu6y0cp.amplifyapp.com/" target={"_blank"}>
                <Image className="grow" fluid src={voterApp} rounded />
              </a>  
            </Col>
            <Col>
              <a rel="noopener noreferrer" href="https://master.dm2em2om6h4m5.amplifyapp.com/" target={"_blank"}>
                <Image className="grow" fluid src={myWeather} rounded />
              </a>
            </Col>
          </Row>
          <Row className="align-items-center" style={{'paddingTop' : '40px', 'textAlign' : 'center'}}>
            <Col>
            An online application hosted on AWS Amplify that provides log-in, user data, groups, and user data mining
            </Col>
            <Col>
            An online application in React using Amazon Web Services that provides users with personalized data from the NOAA API
            </Col>
          </Row>


        <Row className="align-items-center" style={{'paddingTop' : '40px', 'textAlign' : 'center'}}>
            <Col>
              <a rel="noopener noreferrer" href="https://onlinegdb.com/6vLPprDvH" target={"_blank"}>
                <Image className="grow" fluid src={piApprox} rounded />
              </a>  
            </Col>
            <Col>
              <a rel="noopener noreferrer" href="https://onlinegdb.com/ByE5VWu6P" target={"_blank"}>
                <Image className="grow" fluid src={diningPhilosophers} rounded />
              </a>
            </Col>
          </Row>
          <Row className="align-items-center" style={{'paddingTop' : '40px', 'textAlign' : 'center'}}>
            <Col>
              A C application that attempts to approximate the value of pi by integrating 4/(1+x^2) through trapezoidal, Simpsons, Simpsons 3rd degree, and booles methods
            </Col>
            <Col>
              A C application that solves the Dining Philosophers problem using I/O scheduling and shared mutex variables
            </Col>
          </Row>

          <Row className="align-items-center" style={{'paddingTop' : '40px', 'textAlign' : 'center'}}>
            <Col>
              <a rel="noopener noreferrer" href="https://onlinegdb.com/HJpQsbOaD" target={"_blank"}>
                <Image className="grow" fluid src={binaryTree} rounded />
              </a>  
            </Col>
            <Col>
              <a rel="noopener noreferrer" href="https://onlinegdb.com/HJyFAWOaD" target={"_blank"}>
                <Image className="grow" fluid src={dkRootFinding} rounded />
              </a>
            </Col>
          </Row>
          <Row className="align-items-center" style={{'paddingTop' : '40px', 'textAlign' : 'center'}}>
            <Col>
              A C application that creates a dynamically allocated binary search tree with insert, search, delete, and traverse functionality. 
            </Col>
            <Col>
              A C application that finds the roots of a given polynomial with dk root finding methods
            </Col>
          </Row>

          <Row className="align-items-center" style={{'paddingTop' : '40px', 'textAlign' : 'center'}}>
            <Col>
              <a rel="noopener noreferrer" href="https://onlinegdb.com/rJMo4zOpv" target={"_blank"}>
                <Image className="grow" fluid src={differentialEquation} rounded />
              </a>  
            </Col>
            <Col>
              <a rel="noopener noreferrer" href="https://onlinegdb.com/nSR40IhJU" target={"_blank"}>
                <Image className="grow" fluid src={reToNfa} rounded />
              </a>
            </Col>
          </Row>
          <Row className="align-items-center" style={{'paddingTop' : '40px', 'textAlign' : 'center'}}>
            <Col>
              A C program that evaluates integreals using taylor, euler, and rk methods
            </Col>
            <Col>
              A C application that transforms postfix regular expressions to
              a nondeterministic finite automation with dynamically allocated memory
            </Col>
          </Row>

          <Row className="align-items-center" style={{'paddingTop' : '40px', 'textAlign' : 'center'}}>
            <Col>
              <a rel="noopener noreferrer" href="https://onlinegdb.com/r1YJb7u6P" target={"_blank"}>
                <Image className="grow" fluid src={lzwCompression} rounded />
              </a>  
            </Col>
          </Row>
          <Row className="align-items-center" style={{'paddingTop' : '40px', 'textAlign' : 'center'}}>
            <Col>
              A C program that performs the LZW compression for lossless file compression using bit data and dynamically allocated memory.
            </Col>
          </Row>
        
        </Fade>
      </Container>
    </div>
  )
}

export default Projects;
