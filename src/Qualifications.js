import React from 'react'
import { Card } from 'react-bootstrap'

function Qualifications({ item }) {
  return (
    <Card className='h-100 shadow-sm bg-white rounded ' >
      <Card.Img className="h-50 w-80 mx-auto d-block mt-3 mb-3" variant="top" src={item.src} />
      <Card.Body className=''>
        <div className='pb-1 mb-1  justify-content-between' >
          <Card.Title className=' ml-2  text-center ' >
            <small className='align-text-bottom '>
              {item.desc}
            </small>
          </Card.Title>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Qualifications