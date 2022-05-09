import React, {useState, Fragment} from 'react'

export default function StudentForm() {

   const [values, setValues] = useState({
       first_name : "", 
       last_name : "", 
       email : ""
    }) 
    const [submitted, setSubmitted] = useState(false)
    const [valid, setValid] = useState(false)

    const handleInputChange = event => {
        event.persist()
        setValues(values => ({
            ...values,
            first_name : event.target.value,
        }))
    }
    const handleLastChange = event => {
        event.persist()
        setValues(values => ({
            ...values, 
            last_name : event.target.value
        }))
    }

    const handleEmailChange = e => {
        e.persist()
        setValues(values => ({
            ...values, 
            email : e.target.value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(values.first_name && values.last_name && values.email){
            setValid(true)
        }
        setSubmitted(true)
    }

  return (
    <Fragment>   
        <h3 className='mt-3'>Register for free</h3>
        <p className="alert alert-info">
            First Name : {values.first_name}
            <br />
            Last Name : {values.last_name}
            <br /> 
            Email : {values.email}
             
        </p>
        {valid && <p className="alert alert-success text-center">Success! Your form get submitted successfully, </p>}
        <form action="" className='mt-2' onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-lg-4">
                    <label htmlFor="">First Name</label>
                    <input 
                    type="text" 
                    name='first_name' 
                    className='form-control form-control-lg' 
                    placeholder='Your First Name'
                    value={values.first_name}
                    onChange={handleInputChange}
                    />
                    {submitted && !values.first_name && <span id='first-name-field' className='text-danger'>please enter your first name</span>}
                </div>
                <div className="col-lg-4">
                    <label htmlFor="">Last Name</label>
                    <input 
                    type="text" 
                    name='last_name' 
                    className='form-control form-control-lg' 
                    placeholder='Your Last Name'
                    value={values.last_name}
                    onChange={handleLastChange}
                    />
                    {submitted && !values.last_name && <span className='text-danger'>please enter your last name</span>}
                </div>
                <div className="col-lg-4">
                    <label htmlFor="">Email Address</label>
                    <input 
                    type="text" 
                    name='first_name' 
                    className='form-control form-control-lg' 
                    placeholder='Your Email Address' 
                    value={values.email}
                    onChange={handleEmailChange}
                    />
                    {submitted && !values.email && <span className='text-danger'>please enter your eamil address</span>}
                </div>
            </div>

            <button className='btn btn-outline-primary btn-lg mt-3'>Submit</button>
        </form>
    </Fragment>
  )
}
