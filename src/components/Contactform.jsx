import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0y542xh', 'template_prosg0s', form.current, {
        publicKey: 'lsfbpTB-z5vt0LgtZ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Message sent successfully!");
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("An error occurred, please try again.");
        },
      );
      e.target.reset();
  };

  return (
    <div>
        <h2 class="text-center my-5 display-5 fw-bold">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div class="rounded container px-4 pt-2 pb-5 w-50 my-5 col-lg-6 col-sm-12 bg-body-secondary" id="contact">
              <div class="row my-5">
              <div class="col-lg-6 col-sm-12 my-2">
                  <input type="text" name="from_fName" class="form-control" placeholder="First name" aria-label="First name" />
              </div>
              <div class="col-lg-6 col-sm-12 my-2">
                  <input type="text" name="from_lName" class="form-control" placeholder="Last name" aria-label="Last name" />
              </div>
              </div>
              <div class="my-5 col-sm-12">
              <input type="email" name="from_email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div class="mb-3 col-sm-12">
              <textarea name="message" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button class="btn btn-primary me-md-2" type="submit" value="Send">Send</button>
              </div>
              </div>
            </form> 
    </div>
  )
};