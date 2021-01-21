import React from 'react'
import { Card } from 'react-bootstrap'

function SecondaryService({ item }) {
  return (
    <Card className='h-70 w-70 shadow-sm bg-white rounded' >

      <Card.Body className='p-1 m-1 text-center'>
        <Card.Title className=''>
          <small>
            {item}
          </small>
        </Card.Title>
      </Card.Body>
    </Card>

  )
}

export default SecondaryService