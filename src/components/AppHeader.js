import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './AppHeader.module.css';
import robotIcon from '../assets/mylo.png';
import { useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { IoIosLogIn } from 'react-icons/io';

import commandIcon from "../assets/commandsIcon.png"
import inviteIcon from "../assets/inviteIcon.png"
import articlesIcon from "../assets/articlesIcon.png"

const AppHeader = () => {
  const location = useLocation();
  const [btnContent, setBtnContent] = useState('Login');

  console.log(location.pathname);
  const onBtnMouseEnter = () => {
    setBtnContent(<IoIosLogIn size={'26px'} />);
  };
  const onBtnMouseExit = () => {
    setBtnContent('Login');
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark" dir="ltr">
      <Container>
        <Navbar.Brand className={`${styles.navbrand} d-flex`} href="/">
          <img src={robotIcon} width="200px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse dir="rtl" id="responsive-navbar-nav">
          <Nav style={{ width: "100%" }}>
            <Nav.Link
              className={`${styles.navlinks} `}
              href="https://discord.com/oauth2/authorize?client_id=888431987919028244&scope=bot&permissions=3394624"
            >
              <img src={inviteIcon} style={{float:"right", marginLeft:"8px" , width:"32px"}}/>
              اینوایت
            </Nav.Link>
            <Nav.Link 
              className={`${styles.navlinks} ${
                location.pathname === '/commands' ? styles.currentlink : ''
              } `}
              href="/commands"
            >
              <img src={commandIcon} style={{float:"right", marginLeft:"8px" , width:"45px"}}/>
              کامندها 
            </Nav.Link>
            <Nav.Link
              className={`${styles.navlinks} ${
                location.pathname === '/articles' ? styles.currentlink : ''
              }`}
              href="/articles"
            >
              <img src={articlesIcon} style={{float:"right", marginLeft:"8px" , width:"30px"}}/>
              مقاله&zwnj;ها
            </Nav.Link>
          </Nav>
          {/* <Nav className={styles.loginbtnborderup}>
            <Button disabled
              onMouseEnter={onBtnMouseEnter}
              // onMouseOut={onBtnMouseExit}
              onMouseLeave={onBtnMouseExit}
              className={`${styles.loginbtn} `}
            >
              {btnContent}
            </Button>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppHeader;
