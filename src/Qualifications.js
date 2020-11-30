import React from 'react'
import { Card } from 'react-bootstrap'

function Qualifications({ item }) {
  return (
    <Card className='h-100  shadow-sm bg-white rounded' >
      <div className="qual-img-holder">
        <Card.Img className="m-1 mx-auto d-block" width="" height="100" variant="top" src={item.src} />
      </div>
      <Card.Body className='mx-auto'>
          <Card.Title className='text-center align-baseline'>
              {item.desc}
          </Card.Title>
      </Card.Body>
    </Card>
  )
}

export default Qualifications