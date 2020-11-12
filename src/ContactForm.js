import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'



function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [didSubmit, setDidSubmit] = useState(false)
  const [errSubmit , setErrSubmit] = useState(false)


  const handleChange = (e) => {

    if (e.target.name === 'name') setName(e.target.value)
    if (e.target.name === 'email') setEmail(e.target.value)
    if (e.target.name === 'phone') setPhone(e.target.value)
    if (e.target.name === 'message') setMessage(e.target.value)
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    const info ={
      name,
      email,
      phone,
      message
    }

    axios.post('url',info)
      .then(res => {

        console.log(res)
        setDidSubmit(true)

      })
      .catch(err =>{

        console.log(err)
        setErrSubmit(true)
      })
      
          setName("")
          setEmail("")
          setMessage("")
          setPhone("")
        
        }
        
        
  var cForm =<Form onSubmit={handleSubmit} >

  
    <div className='row'>
      <div className="col-md col-lg text-left">
        <Form.Label htmlFor="name">Name</Form.Label>
        <Form.Control size="lg" type="text" name="name" value={name} placeholder='Name' onChange={handleChange} />
      </div>

      <div className="col-md col-lg m-1 text-left">
        <Form.Label htmlFor="email">Email address</Form.Label>
        <Form.Control size="lg" name='email' type="email" value={email} placeholder="someone@somwhere.com" onChange={handleChange} />
      </div>

      <div className="col-md col-lg m-1 text-left">
        <Form.Label htmlFor='phone'>Phone Number </Form.Label>
        <Form.Control size="lg" type="tel" value={phone} name='phone' pattern="[0-9]{10}" placeholder="Your 10 digit phone number" onChange={handleChange} />
      </div>
    </div>


    <div className="text-left m-1">
      <Form.Label htmlFor="message">Message</Form.Label>
      <Form.Control size="lg" rows='4' as="textarea" value={message} name='message' onChange={handleChange} placeholder='Type in your message' />
    </div>


    <div className="mt-3 text-left">

      <Button disabled={email === "" && phone === "" ? true : false} size="lg" type="submit" className="btn btn-primary">Send</Button>

    </div>
  </Form>

  
  return (
    // Contact form will be visible on component mount.
    // if form is submitted , Success Message will appear . Form will disappear
    // if form submission fails, failure message along with contact form will appear
    <>
      
      <p className='text-center'>You can call us at 416.206.3282</p>
      <p hidden={didSubmit} className="text-center">OR</p>
      <p hidden={didSubmit}className="text-center"> Get in touch with us to get a quote on your clean up. Please provide either a phone number or email address for us to get back to you. Your information will not be shared</p>
      
      {didSubmit ?
        <p className='text-success text-center'>
          Thank You. Your inquiry has been submitted.
        </p>
         :
        errSubmit ?
      
        <div>
          <p className='text-danger text-center'>
            Oops. Something went wrong. Please Try again later.
          </p> 
          
          {cForm}
        </div>        
        :
        
        cForm
      }
    </>
  )
}

export default ContactForm