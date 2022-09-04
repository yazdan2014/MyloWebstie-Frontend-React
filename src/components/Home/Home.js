import AppHeader from '../AppHeader';
import styles from './Home.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { CgScrollV } from 'react-icons/cg';

import invitePic from '../../assets/invitePic.png';
import whatsmyloPic from '../../assets/whatsmylo.png'
import firstiniran from '../../assets/firstiniran.png'
import developerPic from '../../assets/developerPic.png'


import ytPic from '../../assets/YT.png'
import spPic from '../../assets/SP.png'
import scPic from '../../assets/SC.png'

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: '1200' });
    Aos.refresh();
  }, []);

  return (
    <div>
      <div className={styles.titlecontent}>
        <div>
          <h1 style={{ color: 'white', fontSize: '60px' }}>
            Mylo 
            ربات پخش آهنگ در سرور های دیسکورد
          </h1>
          <p style={{ fontSize: '36px' }} className="text-secondary"> خیلی بهتر از اون چیزی که فکرشو میکنید!</p>
          <br/><br/><br/>
          
          
        </div>
      </div>

      <div className={`${styles.section1}`}>
        <div className={`${styles.sec1content}`} data-aos="fade-up">
        <br/><br/>
        <Container>
            <Row className="justify-content-center align-items-center">
              <Col xs={12} lg={{ span: 6, offset: 1 }}>
                <img
                  src={whatsmyloPic}
                  alt="web control pannel"
                  style={{ width: '800px' }}
                />
              </Col>
              <Col
                style={{ height: '100% !important' }}
                xs={{ order: 'first' }}
                lg={{ order: 'last' }}
              >
                <div className={`${styles.sectionsdesc}`}>
                  <h2 style={{textAlign:"right"}}>مایلو چیه؟</h2>
                  <p style={{textAlign:"justify"}}>
                  مایلو یه ربات آهنگ برای سرورهای دیسکورد هست که قابلیت پخش آهنگ از 
                  YouTube, Spotify, SoundCloud
                  رو داره، مایلو قابلیت های زیادی داره که میتونید از بخش&nbsp;
                  <a href="/commands">کامند ها</a>
                  &nbsp;اونارو ببینید
                  !
                  </p>
                  {/* <a href="/commands">
                    <Button >کامند ها</Button>
                  </a> */}
                  <br/>
                  <Row   className="justify-content-md-center">
                    <Col sm>
                      <img
                        className="d-block mx-auto img-fluid"
                        src={ytPic}
                        alt="web control pannel"
                        style={{ width: '110px' }}
                      />
                    </Col>
                    <Col sm>
                      <img
                        className="d-block mx-auto img-fluid"
                        src={spPic}
                        alt="web control pannel"
                        style={{ width: '85px' }}
                      />
                    </Col>
                    <Col sm>
                      <img
                        className="d-block mx-auto img-fluid"
                        src={scPic}
                        alt="web control pannel"
                        style={{ width: '85px' }}
                      />
                    </Col>
                  </Row>                 
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <br/><br/><br/><br/>
      </div>
      
      <div className={`${styles.section1}`}>
        <div className={`${styles.sec1content}`} data-aos="fade-up">
          <Container>
            <Row className="justify-content-center align-items-center">
              <Col
                style={{ height: '100% !important' }}
                xs={{ order: 'first' }}
              >
                <div className={`${styles.sectionsdesc}`}>
                  <h1 style={{textAlign:"right"}}>لانچ شدن نسخه ی رایگان Beta</h1>
                  <p style={{textAlign:"justify"}}>
                    بعد از 6 ماه تحقیق و برنامه نویسی تیم مایلو کارای ربات تموم شده و نسخه ی اولیه لانچ شده و
                    <strong> به صورت کاملا رایگان </strong>
                     در خدمت شما عزیزان قرار گرفته. 
                    طبیعی است که مانند تمامی سرویس ها امکان برخورد ربات با اشکالات و باگ های متعدد وجود داشته باشه و تلاش تیم بر این هست که تمامی این اشکالات پیدا بشن و جلوگیری بشن.
                    برای همین کامیونیتی ای برای ربات در نظر گرفته شده تا شما درصورت برخورد با این مشکلات به ما اطلاع بدید.
                    همچنین در صورت داشتن هرگونه پیشنهاد و انتقاد حتما اون هارو با ما درمیان بذارید
                  </p>
                  <a href="https://discord.gg/ApGSg9c9p6">
                    <Button to="/about">عضو شدن در سرور</Button>
                  </a>
                </div>
              </Col>
              <Col xs={12} lg={6}>
                <img
                  src={developerPic}
                  alt="web control pannel"
                  style={{ width: '800px' }}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className={`${styles.section1}`}>
        <div className={`${styles.sec1content}`} data-aos="fade-up">
          <Container>
            <Row className="justify-content-center align-items-center">
              <Col xs={12} lg={{ span: 6, offset: 1 }}>
                <img
                  src={firstiniran}
                  alt="web control pannel"
                  style={{ width: '900px' }}
                />
              </Col>
              <Col
                style={{ height: '100% !important' }}
                xs={{ order: 'first' }}
                lg={{ order: 'last' }}
              >
                <div className={`${styles.sectionsdesc}`}>
                  <h1 style={{textAlign:"right"}}>برای اولین بار در ایران </h1>
                  <p style={{textAlign:"justify"}}>
                    بعد از مدت ها که خبری از ربات هایی مثل 
                    Rythm  و Groovy
                    نبود اینبار
                    Mylo
                    اومده تا جای خالیشونو پر کنه و حسابی بترکونه! برنامه نویس های تیم مایلو مدت زیادی روی ربات کار کردند و تمام سعیشون این بوده که کیفیت قابلیت های
                    Mylo
                    کاملا به خوبی برند های به روز جهان باشه
                  </p>
                  {/* <a href="/commands">
                    <Button >کامند ها</Button>
                  </a> */}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className={`${styles.lastsection}`}>
      <br/><br/><br/><br/>
        <div className={`${styles.sec1content}`} data-aos="fade-up">
          <Container>
            <div>
              <Row>
                <Col>
                  <img
                    className="d-block mx-auto img-fluid w-50"
                    src={invitePic}
                    alt="invite pic"
                    // style={{ width: '200px' }}
                  />
                  <div className={`${styles.sectionsdesc}`}>
                    <h1 style={{ fontSize: '60px', fontWeight: 700 }}>
                      آماده ای شروع کنی؟
                    </h1>
                    <p style={{ fontSize: '30px'}} className="text-center">
                      همین حالا به صورت کاملا رایگان ربات رو به سرورت اضافه کن و با دوستات آهنگ های مورد علاقت رو گوش کن!
                    </p>
                    <br/>
                    <a href='https://discord.com/oauth2/authorize?client_id=888431987919028244&scope=bot&permissions=3394624'>
                      <Button size="lg" style={{ width: '100px'}} className="mx-auto mb-3">
                        Invite Now
                      </Button>
                    </a>
                    <br />
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>

      
      
    </div>
  );
};

export default Home;
