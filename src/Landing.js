import React from 'react';
import Typing from 'react-typing-animation';
import Fade from 'react-reveal/Fade';
import { useTranslation } from 'react-i18next';

// styles
import './styles/Landing.css';

function Landing() {
  const { t } = useTranslation();

  return (
    <div>
      <div className='main-div'>
        <div className='grid-container'>

          <div className='grid-item-1'>
            <div className="hello-box">
              <Typing>
                {t('Hello.1')}
              </Typing> 
            </div>   
          </div>

          <div className='grid-item-2'>
            <div className='grid-item-header'>
              <Typing>
                <Typing.Delay ms={800} />
                <a className="custom-link" href="/projects">{t('Projects.1')}</a>
              </Typing> 
            </div>
            <Fade delay={1600}>
              <div>
                <a className="custom-link" rel="noopener noreferrer" target={"_blank"} href="https://master.dm2em2om6h4m5.amplifyapp.com/">
                  {t('My.1')} {t('Weather.1')}
                  
                </a>
              </div>
            </Fade>
            <Fade delay={2000}>
              <div>
                <a className="custom-link" rel="noopener noreferrer" target={"_blank"} href="https://onlinegdb.com/ByE5VWu6P">
                  {t('Dining.1')} {t('Philosophers.1')}
                </a>
              </div>
            </Fade>
            <Fade delay={2400}>
              <div>
                <a className="custom-link" rel="noopener noreferrer" target={"_blank"} href="https://onlinegdb.com/6vLPprDvH">
                  {t('Pi.1')} {t('Approx.1')}
                </a>
              </div>
            </Fade>
            <Fade delay={2800}>
              <div>
                <a className="custom-link" rel="noopener noreferrer" target={"_blank"} href="https://onlinegdb.com/HJyFAWOaD">
                  {t('DK.1')} {t('Root.1')} {t('Finding.1')}
                </a>
              </div> 
            </Fade>
            <Fade delay={3200}>
              <div>
                <a className="custom-link" href="/projects">
                  {t('More.1')}
                </a>
              </div> 
            </Fade>
          </div>
          
          <div className='grid-item-3'>
            <div className='grid-item-header'>
              <Typing>
                <Typing.Delay ms={800} />
                  {t('Links.1')}
                <Typing.Delay ms={800} />
              </Typing> 
            </div>
            <Fade delay={1600}>
              <div>
                <a className="custom-link" rel="noopener noreferrer" target={"_blank"} href="https://github.com/bmikailenko">
                  {t('GitHub.1')}
                </a>
              </div>
            </Fade>
            <Fade delay={2000}>
              <div>
                <a className="custom-link" rel="noopener noreferrer" target={"_blank"} href="https://www.linkedin.com/in/bmikailenko/">
                  {t('LinkedIn.1')}
                </a>
              </div>
            </Fade>
            <Fade delay={2400}>
              <div>
                <a className="custom-link" rel="noopener noreferrer" target={"_blank"} href="https://www.instagram.com/ben_mika_/">
                  {t('Instagram.1')}
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
    </div>
  )
}

export default Landing;
