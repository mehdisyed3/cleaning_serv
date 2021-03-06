import React from 'react'
import { Card } from 'react-bootstrap'

function Service({ item }) {
  return (
    <Card className='h-100  shadow-sm bg-white rounded' >
      <Card.Img className='' variant="top " src="" />
      <Card.Body className='mx-auto'>
          <Card.Title className='p-1 m-1 text-center' >
            <p> {item.name}</p>
            <div className="mt-2">
              <small className="text-secondary" >{item.text}</small>
            </div>
          </Card.Title>   
      </Card.Body>
    </Card>
  )
}




export default Service