import React from 'react';

const Contact = () => (
  <div className="about">
    <h2 className="about-title">Contactez moi</h2>
    <form className="form" action="mailto:daniel.dasilva.gsi@gmail.com" method="post" enctype="text/plain">
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
    </form>
  </div>
);

export default Contact;