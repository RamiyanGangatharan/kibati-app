import React from 'react';

function Contact() {
  return (
    <div className="contact-page">
      <h1 className='display-1 text-center'>Contact Us</h1>
      <p className='small text-center'>If you have any questions, feel free to reach out!</p>

      <div className='container card'>
        <form className='form'>
          <div className='form-group'>
            <label for="fname">First Name</label><br/>
            <input type='text' id='fname' placeholder='John'></input>
          </div>
          <div className='form-group'>
            <label for="lname">Last Name</label><br/>
            <input type='text' id='lname' placeholder='Doe'></input>
          </div>
          <div className='form-group'>
            <label for="email">Email Address</label><br/>
            <input type='email' id='emailaddr' placeholder='John.Doe@gmail.com'></input>
          </div>
          <div className='form-group'>
            <label for="phoneNumber">Telephone Number</label><br/>
            <input type='phone' id='phone' placeholder='(555) 555 5555'></input>
          </div>
          <div className='form-group'>
            <label for="messagebox">Message</label><br/>
            <input type='text' id='msg' placeholder='type your message here'></input>
          </div>
          <button className='btn btn-outline-success'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
