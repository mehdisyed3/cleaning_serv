import React from 'react'
import { Card } from 'react-bootstrap'

function Qualifications({ item }) {
  return (
    <Card className='h-100  shadow-sm bg-white rounded' >
      <Card.Img className=" mx-auto d-block m-3" max-width="60" height="100" variant="top" src={item.src} />
      <Card.Body className='mx-auto'>
          <Card.Title className='p-1 m-1 text-center align-baseline' >
            
              {item.desc}
           
          </Card.Title>
      </Card.Body>
    </Card>
  )
}

export default Qualifications