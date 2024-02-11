import React from 'react';
import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleMailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return isSubmitted ? (
    <div className='thanku_message'>Thank you! Your submission has been received!</div>
  ) : (
    <>
      <div className='contact_heading'>CONTACT</div>
      <div className='contact_form'>
        <form onSubmit={handleSubmit}>
          <div className='form_name field'>
            <label>Name</label>
            <input type='text' name='name' value={name} placeholder='Full Name' required onChange={handleNameChange} />
          </div>
          <div className='form_email field'>
            <label>Email</label>
            <input type='email' name='email' value={email} placeholder='Email' required onChange={handleMailChange} />
          </div>
          <div className='form_message field'>
            <label>Message</label>
            <textarea name='message' value={message} placeholder='Start writing here' required onChange={handleMessageChange} />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
