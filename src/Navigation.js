import React from 'react';
import { Navbar, Nav, Image, NavDropdown } from 'react-bootstrap';
import './styles/Navigation.css';
import { useTranslation } from 'react-i18next';
import us_flag from './images/navigation/us_flag.svg';
import ru_flag from './images/navigation/ru_flag.svg';

function Navigation() {
  const { t, i18n } = useTranslation();
  const l = i18n.language;

  function handleClick(lang) {
    i18n.changeLanguage(lang);
    window.location.reload();
  }

  return (
    <Navbar className='custom-navbar'>
      <Navbar.Brand className='custom-brand' href="/">{t('Ben Mikailenko.1')} | {t('Software Engineer.1')}</Navbar.Brand>
      <Navbar.Brand className='custom-brand-small' href="/">{t('B.1')}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav>

            <Nav.Link href="/about">
              {t('About.1')}
            </Nav.Link>

            <Nav.Link href="/projects">
              {t('Projects.1')}
            </Nav.Link>

            {
              l === "en" &&
              <NavDropdown
                title= { <Image alt="English" src={us_flag} fluid /> }
                alignRight
                id="nav-dropdown"
                >
                <NavDropdown.Item >
                  <Image alt="Russian" src={ru_flag} onClick={()=>handleClick('rus')} fluid />
                </NavDropdown.Item>
              </NavDropdown>
            }
            
            {
              l === "rus" &&
              <NavDropdown
                title= { <Image alt="Russian" src={ru_flag} fluid /> }
                alignRight
                id="nav-dropdown"
                >
                <NavDropdown.Item >
                  <Image alt="English" src={us_flag} onClick={()=>handleClick('us')} fluid />
                </NavDropdown.Item>
              </NavDropdown>
            }
            
            {/* <Nav.Link href="/dashboard">Dashboard</Nav.Link> */}

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation;
