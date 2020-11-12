import React, { useRef } from 'react';
import Header from './Header'
import Service from './Service'
import { certification, services } from './helper/data'
import Qualifications from './Qualifications';
import ContactForm from './ContactForm'
import Tagline from './Tagline'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Col } from 'react-bootstrap'


function App() {

  const service = services.map((item, i) => <Col className="col-md-4 mb-4 col-sm-6" key={i}  ><Service item={item} /></Col>)
  const certs = certification.map((item, i) => <Col className="col-md-4 col-sm-6 mb-4 " key={i}  ><Qualifications item={item} /></Col>)

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 100)

  const contactRef = useRef(null)
  const serviceRef = useRef(null)
  const certRef = useRef(null)
  const topRef = useRef(null)

  const contactScroll = () => scrollToRef(contactRef)

  const serviceScroll = () => scrollToRef(serviceRef)

  const certScroll = () => scrollToRef(certRef)

  const topScroll = () => scrollToRef(topRef)




  return (
    <div ref={topRef} className=" container mx-auto smScreen ">

      <div className='fixed-top '>
        <Header className="" topScroll={topScroll} contactScroll={contactScroll} serviceScroll={serviceScroll} certScroll={certScroll} />
      </div>
      


      <div className='mt-5 mb-5 '>
        <Tagline />
      </div>
      <br/>
      <div ref={serviceRef} className='mt-5 mb-5 text-center'>

        <h3>Services We Offer</h3>
        <br />

        <div className=' row d-flex justify-content-center'>
          {service}
        </div>

      </div>

      <hr ref={certRef} />

      <div>

        <h3 className='mt-5 mb-5 text-center '> Qualifications & Certificates</h3>
        <br />
        <div className='row d-flex justify-content-center'>
          {certs}
        </div>

      </div>

      <hr ref={contactRef} />

      <div>
        <h3 className='mt-5 mb-5 text-center'>Contact Us</h3>
        <div>
          <ContactForm />
        </div>
      </div>

    </div>
  );
}

export default App;
