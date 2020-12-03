import React, { useCallback, useReducer } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import axios from 'axios'

const R = require('ramda')

const reducer = (formState, action) => {
  switch (action.type) {
    case ('formValChange'): {
      const formStateCopy = R.clone(formState)
      const { field, val } = action.payload
      formStateCopy.data[field] = val

      return formStateCopy
    }
    case ('formSubmitting'): {
      console.log("DSDSS")
      const formStateCopy = R.clone(formState)
      formStateCopy.submitting = true
      formStateCopy.submittingErr = null
      formStateCopy.submittingSuccess = null
      return formStateCopy
    }
    case ('formSubmittingErr'): {
      const formStateCopy = R.clone(formState)
      formStateCopy.submitting = false
      formStateCopy.submittingErr = (<><p className="m-0">Oops, something seems to be broken on our side.</p><p className="m-0">Please try again later or give us a call at { AMPM_PHONE } if it's urgent.</p></>)
      formStateCopy.submittingSuccess = null
      return formStateCopy
    }
    case ('formSubmittingSuccess'): {
      const formStateCopy = R.clone(formState)
      formStateCopy.submitting = false
      formStateCopy.submittingErr = null
      formStateCopy.submittingSuccess = (<><p className="m-0">Thanks for reaching out.</p><p className="m-0">Someone from our team will be reaching out to you shortly.</p></>)
      return formStateCopy
    }
    default: {
      return formState
    }
  }
}

const initialState = {
  data: {
    name: '',
    email: '',
    phone: '',
    msg: ''
  },
  submittingErr: null,
  submittingSuccess: null,
  submitting: false
}

const AMPM_PHONE = '416-206-3282'

function ContactForm() {
  const [formState, dispatch] = useReducer(reducer, initialState)

  const handleChangeForField = (fieldName) => {
    return function (e) {
      dispatch({
        type: 'formValChange',
        payload: {
          field: fieldName,
          val: e.target.value
        }
      })
    }
  }

  const onNameChange = useCallback(handleChangeForField('name'), [])
  const onEmailChange = useCallback(handleChangeForField('email'), [])
  const onPhoneChange = useCallback(handleChangeForField('phone'), [])
  const onMsgChange = useCallback(handleChangeForField('msg'), [])

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log("call disp")

    dispatch({
      type: 'formSubmitting'
    })

    // const info = {
    //   name,
    //   email,
    //   phone,
    //   message
    // }

    axios.post('/contact', formState.data)
      .then(res => {
        console.log(res)
        dispatch({
          type: 'formSubmittingSuccess'
        })
      })
      .catch(err => {

        console.log(err)
        dispatch({
          type: 'formSubmittingSuccess'
        })
      })

    // setName("")
    // setEmail("")
    // setMessage("")
    // setPhone("")

  }

  return (
    <>
      <p className='lead'>You can call us at { AMPM_PHONE } or use the form below to get in touch with us or receive a FREE Quote.</p>
      <p className="mb-4"><strong>Please be advised that your information is <u>never shared or sold</u>.</strong></p>

      { formState.submittingErr && <Alert variant="warning">{ formState.submittingErr }</Alert>}
      {
        formState.submittingSuccess ? <Alert variant="success">{ formState.submittingSuccess }</Alert> :
          <Form onSubmit={handleSubmit}>
            <div className='row'>
              <div className="col-md col-lg text-left">
                <div className="form-group">
                  <Form.Label htmlFor="name"><code className="lead">*</code>Name</Form.Label>
                  <Form.Control size="lg" required type="text" name="name" value={formState.data.name} onChange={onNameChange} />
                </div>
              </div>
              <div className="col-md col-lg text-left">
                <div className="form-group"> <Form.Label htmlFor="email"><code className="lead">*</code>Email address</Form.Label>
                  <Form.Control size="lg" name='email' required type="email" value={formState.data.email} placeholder="john@example.com" onChange={onEmailChange} />
                </div>
              </div>
              <div className="col-md col-lg text-left">
                <div className="form-group">
                  <Form.Label htmlFor='phone'><code className="lead"></code>Phone</Form.Label>
                  <Form.Control size="lg" type="tel" maxLength={10} name='phone' value={formState.data.phone} pattern="[0-9]{10}" placeholder="Only numbers" onChange={onPhoneChange} />
                </div>
              </div>
            </div>
            <div className="text-left">
              <div className="form-group">
                <Form.Label htmlFor="message"><code className="lead">*</code>Message</Form.Label>
                <Form.Control size="lg" rows='4' required as="textarea" name='message' value={formState.data.msg} onChange={onMsgChange} placeholder='Describe how we may serve you' />
              </div>
            </div>
            <div className="mt-3 text-left">
              <Button size="lg" disabled={formState.submitting} type="submit" className="btn btn-primary">{formState.submitting ? 'Sending...' : 'Send'}</Button>
            </div>
          </Form>
      }
    </>
  )
}

export default ContactForm