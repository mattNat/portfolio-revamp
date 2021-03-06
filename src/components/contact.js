import React from 'react';
import '../styles/contact.css';

export default function Contact() {
  return (
    <div className="contact">
      <section>
        <a name="contact" />
        <div className="banner">
          <div className="bg-overlay4">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <h2 className="connect">
                    Let's talk code<br/>
                    Get in touch<br/>
                  </h2>
                </div>
                <br />
                <address>
                  <div className="col-lg-6">
                    <ul className="list-inline banner-social-buttons">
                      <li>
                        <a href="mailto:mattsanpedro7@gmail.com" className="btn btn-default btn-lg">
                        <i className="far fa-envelope"></i> <span className="network-name">mattsanpedro7@gmail.com</span></a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/matthew-san-pedro" target="_blank" className="btn btn-default btn-lg">
                        <i className="fab fa-linkedin-in"></i> <span className="network-name">Linkedin</span></a>
                      </li>
                      <li>
                        <a href="https://github.com/mattsanpedro7" target="_blank" className="btn btn-default btn-lg ">
                        <i className="fab fa-github" /> <span className="network-name">Github</span></a>
                      </li>
                    </ul>
                  </div>
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}