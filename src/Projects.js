import './About.css'
import './Projects.css'
import Fade from 'react-reveal/Fade';
import { Container, Row, Col, Image } from 'react-bootstrap';

function Projects() {

  return (
    <Container fluid>
      
      <Fade>


        <Row className="align-items-center" style={{'paddingTop' : '40px', 'textAlign' : 'center'}}>
          <Col>
            <a rel="noopener noreferrer" href="https://master.d2k5iyxmu6y0cp.amplifyapp.com/" target={"_blank"}>
              <Image className="grow" fluid src='./voter-app.png' rounded />
            </a>  
          </Col>
          <Col>
            <a rel="noopener noreferrer" href="https://master.dm2em2om6h4m5.amplifyapp.com/" target={"_blank"}>
              <Image className="grow" fluid src='./my-weather.png' rounded />
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
              <Image className="grow" fluid src='./pi-approx.png' rounded />
            </a>  
          </Col>
          <Col>
            <a rel="noopener noreferrer" href="https://onlinegdb.com/ByE5VWu6P" target={"_blank"}>
              <Image className="grow" fluid src='./dining-philosophers.png' rounded />
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
              <Image className="grow" fluid src='./binary-tree.png' rounded />
            </a>  
          </Col>
          <Col>
            <a rel="noopener noreferrer" href="https://onlinegdb.com/HJyFAWOaD" target={"_blank"}>
              <Image className="grow" fluid src='./dk-root-finding.png' rounded />
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
              <Image className="grow" fluid src='./differential-equation.png' rounded />
            </a>  
          </Col>
          <Col>
            <a rel="noopener noreferrer" href="https://onlinegdb.com/nSR40IhJU" target={"_blank"}>
              <Image className="grow" fluid src='./re-to-nfa.png' rounded />
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
              <Image className="grow" fluid src='./lzw-compression.png' rounded />
            </a>  
          </Col>
          <Col>
            <a rel="noopener noreferrer" href="https://onlinegdb.com/nSR40IhJU" target={"_blank"}>
              <Image className="grow" fluid src='./re-to-nfa.png' rounded />
            </a>
          </Col>
        </Row>
        <Row className="align-items-center" style={{'paddingTop' : '40px', 'textAlign' : 'center'}}>
          <Col>
            A C program that performs the LZW compression for lossless file compression using bit data and dynamically allocated memory.
          </Col>
          <Col>
            A C application that transforms postfix regular expressions to
            a nondeterministic finite automation with dynamically allocated memory
          </Col>
      </Row>
      
      </Fade>
    </Container>
  )
}

export default Projects;
