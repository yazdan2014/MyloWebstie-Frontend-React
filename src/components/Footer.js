import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div dir="ltr" className={styles.appfootermaincontainer}>
      <Container>
        <div className="d-flex flex-column flex-md-row justify-content-between h-100">
          <div>
            <h3>Mylo</h3>
            <div className="text-secondary">
              &copy;Mylo bot 2022 - All rights reserved by mylo dev team
            </div>
          </div>
          <div className="d-flex flex-wrap flex-md-nowrap flex-column flex-md-row justify-content-around align-items-start justify-content-md-around  w-100">
            <div className="my-3">
              <h5>Product</h5>
              <a className={styles.footerlink} href={'/commands'}>
                Commands
              </a>
              <br/>
              <a className={styles.footerlink} href={'/commands'}>
                Invite
              </a>
            </div>
            <div className="my-3">
              <h5>Resources</h5>
              <a className={styles.footerlink} href={'/articles'}>
                Articles
              </a>
            </div>
            <div className="my-3">
              <h5>Business</h5>
              <a
                className={styles.footerlink}
                href={'mailto:yazeinal@gmail.com'}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
