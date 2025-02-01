import React from 'react'

const ContactForm = () => {
  return (
    <section className='py-[7.5rem]'>
      <div>
        <div className='text-center'>
          <h5 className='mb-3 text-capitalize'>Lorem ipsum dolor sit amet</h5>
          <h2 className="text-capitalize gradient-text1">Let's Get In Touch</h2>
        </div>

        <div className='max-w-[780px] mx-auto'>
          <form className='contact-form' id='contact-form-data'>
            <div className='flex md:flex-row flex-col'>
              <div className='md:w-1/2 px-[10px]'>
                <div className="form-group">
                  <input className="form-control" type="text" placeholder="First Name:" required id="firstName" name="firstName" />
                </div>
              </div>

              <div className='md:w-1/2 px-[10px]'>
                <div className="form-group">
                  <input className="form-control" type="text" placeholder="Last Name:" required id="last_name" name="lastName" />
                </div>
              </div>
            </div>

            <div className='flex'>
              <div className='md:w-1/2 px-[10px]'>
                <div className="form-group">
                  <input className="form-control" type="text" placeholder="Last Name:" required id="last_name" name="lastName" />
                </div>
              </div>

              <div className='md:w-1/2 px-[10px]'>
                <div className="form-group">
                  <input className="form-control" type="text" placeholder="Last Name:" required id="last_name" name="lastName" />
                </div>
              </div>
            </div>

            <div>
              <div className="form-group">
                <textarea className="form-control" placeholder="Message" id="message" name="userMessage"></textarea>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm