import React, { useRef } from 'react';
import Header from './Header'
import Service from './Service'
import { certification, services, sServices } from './helper/data'
import Qualifications from './Qualifications';
import ContactForm from './ContactForm'
import Tagline from './Tagline'
import SecondaryService from "./SecondaryService"

import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col } from 'react-bootstrap'


function App() {

  const certs = certification.map((item, i) => <Col className="col-lg-3 col-md-4 col-sm-6 mt-3 m-5" key={i}  ><Qualifications item={item} /></Col>)
  const service = services.map((item, i) => <Col className="col-lg-3 col-md-4 col-sm-6 m-5" key={i}  ><Service item={item} /></Col>)
  const services2a = sServices.map((item, i) => <Col className="col-lg-4 col-md-4 col-sm-7 mb-5" key={i}  ><SecondaryService item={item} /></Col>)

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 80)

  const contactRef = useRef(null)
  const serviceRef = useRef(null)
  const certRef = useRef(null)
  const topRef = useRef(null)

  const contactScroll = () => scrollToRef(contactRef)

  const serviceScroll = () => scrollToRef(serviceRef)

  const certScroll = () => scrollToRef(certRef)

  const topScroll = () => scrollToRef(topRef)

 


  return (
    <div ref={topRef} className=".container-fluid m-5 ">

      <div className='fixed-top'>
        <Header className="row" topScroll={topScroll} contactScroll={contactScroll} serviceScroll={serviceScroll} certScroll={certScroll} />
      </div>

      <br/>

      <div className='m-5'>
        <Tagline />
      </div>

      <hr ref={serviceRef}  />

      <div className='text-center m-5 '>
        <h3>Services We Offer</h3>
        <br/>

        <div className='row'>
          {service}
        </div>

        <div className='row'>
          {services2a}
        </div>

      </div>

      <hr ref={certRef} />

      <div >

        <h3 className='mt-5 mb-3 text-center '> Qualifications & Certificates</h3>
        <br />

        <div className='row'>
          {certs}
        </div>

      </div>

      <hr ref={contactRef} />

      <div className='m-5 text-center'>
        <h3 >Contact Us</h3>
        <br />
        <ContactForm />
      </div>

    </div>
  );
}

export default App;
