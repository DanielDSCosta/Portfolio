import React from 'react';
import Home from './home';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Votre message a été envoyé !');
    window.location.href = {Home} + "/";
  };
  return (
  <div className="about">
    <h2 className="about-title">Contactez moi</h2>
    <form className="form" action="https://formsubmit.co/daniel.dasilva.gsi@gmail.com" method="POST" enctype="multipart/form-data">
      <div className="form-group">
        <label className="form-label" for="email">Votre Email:</label>
        <input className="form-input" type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label className="form-label" for="subject">Objet:</label>
        <input className="form-input" type="text" id="subject" name="subject" required />
      </div>
      <div className="form-group">
        <label className="form-label" for="body">Message:</label>
        <textarea className="form-textarea" id="body" name="body" required />
      </div>
      <input className="form-submit" type="submit" value="Envoyer" />
      <input type="hidden" name="_next" value="/"></input>
    </form>
  </div>
);
  };

export default Contact;
