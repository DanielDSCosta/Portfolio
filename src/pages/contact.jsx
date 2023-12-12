import React from 'react';
import Home from './home';


const Contact = () => {

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
      <input type="hidden" name="_next" value={Home}></input>
      <input type="hidden" name="_captcha" value="false"></input>
    </form>
  </div>
);
  }

export default Contact;
