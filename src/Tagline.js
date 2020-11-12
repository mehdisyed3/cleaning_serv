import React, {useState} from 'react'
import { Button, Modal, ModalBody,ModalTitle } from 'react-bootstrap'

function Tagline() {

  const [appear, setAppear] = useState(true)

  return (
    
    <Modal show={appear}>
      <Modal.Header className="text-center"><h1 className="mx-auto"> Need Cleaning?</h1></Modal.Header>
      <Modal.Body className="text-center">
        <p className="lead px-5 text-center">
        We care and understand the difficulty of dealing and living in hoarded and hazardous places during difficult times. Get in touch so we can take care of it for you. 
        </p>
        <small className=''> *We are insured and bonded</small>
      </Modal.Body>
      <Modal.Footer >
        <Button onClick={()=> setAppear(false)} > Close </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default Tagline