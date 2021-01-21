import React, { useRef } from 'react';
import Header from './Header'
import Service from './Service'
import { certification, services } from './helper/data'
import Qualifications from './Qualifications';
import ContactForm from './ContactForm'
import Tagline from './Tagline'
import { Col } from 'react-bootstrap'


function App() {

  const service = services.map((item, i) => <div className="col-12 col-md-4 mb-4" key={i}><Service item={item} /></div>)
  const certs = certification.map((item, i) => <div className="col-md-3 col-sm-6 mb-4 " key={i}  ><Qualifications item={item} /></div>)

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 200)

  const contactRef = useRef(null)
  const serviceRef = useRef(null)
  const certRef = useRef(null)
  const topRef = useRef(null)

  const contactScroll = (e) => {
    e.preventDefault()
    scrollToRef(contactRef)
  }


  const serviceScroll = (e) => {
    e.preventDefault()
    scrollToRef(serviceRef)
  }

  const certScroll = (e) => {
    e.preventDefault()
    scrollToRef(certRef)
  }

  const topScroll = (e) => {
    e.preventDefault()
    scrollToRef(topRef)
  }




  return (
    <>
      <div className='fixed-top '>
        <Header className="" topScroll={topScroll} contactScroll={contactScroll} serviceScroll={serviceScroll} certScroll={certScroll} />
      </div>
      <div ref={topRef} className=" container mx-auto smScreen ">
        <section className='my-5 text-center'>
          <h3 ref={serviceRef} className="mb-2">Services We Offer</h3>
          <br />
          <div className=' row d-flex justify-content-center'>
            {service}
          </div>
        </section>
        <section className='my-5 text-center'>
          <h3 ref={certRef} className="mb-2">Qualifications & Certificates</h3>
          <br />
          <div className='row d-flex justify-content-center'>
            {certs}
          </div>
        </section>
        <section className='my-5 text-center'>
          <h3 ref={contactRef} className="mb-2">Contact Us</h3>          
          <div>
            <ContactForm />
          </div>
        </section>
      </div>
      <Tagline goToContact={contactScroll} />
    </>
  );
}

export default App;
