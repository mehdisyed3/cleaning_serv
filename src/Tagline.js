import React, {useState} from 'react'
import { Button, Modal } from 'react-bootstrap'

function Tagline({ goToContact }) {
  const [appear, setAppear] = useState(true)

  function contactCTA(e) {
    setAppear(false)
    goToContact(e)
  }

  const handleClose = () => setAppear(false);

  return (
    <Modal show={appear}  onHide={handleClose}>
      <Modal.Header className="" closeButton><Modal.Title>Need Cleaning?</Modal.Title></Modal.Header>
      <Modal.Body className="text-center">
        <p className="lead px-5 text-center">We care and understand the difficulty of dealing and living in a home that has mold.</p>
        <p>Get in touch so we can take care of it for you.</p>
        <strong className=''>We are insured and bonded.</strong>
      </Modal.Body>
      <Modal.Footer >
        <Button onClick={contactCTA}>Contact Us</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default Tagline