import './styles/Landing.css';
import Typing from 'react-typing-animation';
import Fade from 'react-reveal/Fade';

function Landing() {

  return (
    <div className='main-div'>
      <div className='grid-container'>
        <div className='grid-item-1'>
          <div className="hello-box">
            <Typing>
              Hello
            </Typing> 
          </div>   
        </div>
        <div className='grid-item-2'>
          <div className='grid-item-header'>
            <Typing>
              <Typing.Delay ms={800} />
              <a className="custom-link" href="/projects">Projects</a>
            </Typing> 
          </div>
          <Fade delay={1600}>
            <div>
              <a className="custom-link" rel="noopener noreferrer" target={"_blank"} href="https://master.dm2em2om6h4m5.amplifyapp.com/">
                My Weather
              </a>
            </div>
          </Fade>
          <Fade delay={2000}>
            <div>
              <a className="custom-link" rel="noopener noreferrer" target={"_blank"} href="https://onlinegdb.com/ByE5VWu6P">
                Dining Philosophers
              </a>
            </div>
          </Fade>
          <Fade delay={2400}>
            <div>
              <a className="custom-link" rel="noopener noreferrer" target={"_blank"} href="https://onlinegdb.com/6vLPprDvH">
                Pi Approx
              </a>
            </div>
          </Fade>
          <Fade delay={2800}>
            <div>
              <a className="custom-link" rel="noopener noreferrer" target={"_blank"} href="https://onlinegdb.com/HJyFAWOaD">
                DK Root Finding
              </a>
            </div> 
          </Fade>
          <Fade delay={3200}>
            <div>
              <a className="custom-link" href="/projects">
                More
              </a>
            </div> 
          </Fade>
        </div>
        <div className='grid-item-3'>
          <div className='grid-item-header'>
            <Typing>
               
              <Typing.Delay ms={800} />
              Links
              <Typing.Delay ms={800} />
            </Typing> 
          </div>
          <Fade delay={1600}>
            <div>
              <a className="custom-link" rel="noopener noreferrer" target={"_blank"} href="https://github.com/bmikailenko">
                Github
              </a>
            </div>
          </Fade>
          <Fade delay={2000}>
            <div>
              <a className="custom-link" rel="noopener noreferrer" target={"_blank"} href="https://www.linkedin.com/in/bmikailenko/">
                LinkedIn
              </a>
            </div>
          </Fade>
          <Fade delay={2400}>
            <div>
              <a className="custom-link" rel="noopener noreferrer" target={"_blank"} href="https://www.instagram.com/ben_mika_/">
                Instagram
              </a>
            </div>
          </Fade>
          <Fade delay={2800}>
            <div>
              <a className="custom-link" rel="noopener noreferrer" target={"_blank"} href="mailto:bmikailenko@gmail.com">
                bmikailenko@gmail.com
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Landing;
