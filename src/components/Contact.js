import React from 'react'
import { navigate } from 'gatsby'
import Recaptcha from 'react-google-recaptcha'

const RECAPTCHA_KEY = '6Lf8vr0bAAAAAP8IttOzpEtLdv2tX8K-rkgqCIKa'
const SECRET_KEY = '6Lf8vr0bAAAAALyxtUyVRbpHXL2mluHMdc3pZJOy'

const ContactForm = () => {
  const [state, setState] = React.useState({})
  const recaptchaRef = React.createRef()
  const [buttonDisabled, setButtonDisabled] = React.useState(true)

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const recaptchaValue = recaptchaRef.current.getValue()

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encodeURI( {
        'form-name': form.getAttribute('name'),
        'g-recaptcha-response': recaptchaValue,
        ...state,
      },)
    })
    .then(() => navigate(form.getAttribute('action')))
    .catch(error => alert(error))
  }

  return (
    
    <form
    name="contact-us"
    method="POST"
    data-netlify="true"    
    data-netlify-honeypot="bot-field"
    data-netlify-recaptcha="true"
    action="/thank-you"
    onSubmit={handleSubmit}
     >
    <noscript>
        <p>This form won’t work with Javascript disabled</p>
     </noscript>
  <div className="field half first">
    <label htmlFor="name">Name</label>
    <input type="text" name="name" id="name"  onChange={handleChange}
          required />
  </div>
  <div className="field half">
    <label htmlFor="email">Email</label>
    <input type="email" name="email" id="email"  onChange={handleChange}
          required />
  </div>
  <div className="field">
    <label htmlFor="message">Message</label>
    <textarea name="message" id="message" rows="4" onChange={handleChange}
          required></textarea>
    {/* Recaptcha */}
    <Recaptcha
        ref={recaptchaRef}
        sitekey={RECAPTCHA_KEY}
        size="normal"
        id="recaptcha-google"
        onChange={() => setButtonDisabled(false)}
      />
  </div>
  
  <ul className="actions">
    <li>
    <button type="submit" value="Send Message" className="special" disabled={buttonDisabled}>Submit</button>
      {/* <button type="submit" value="Send Message" className="special" /> */}
    </li>
    <li>
      <input type="reset" value="Reset" />
    </li>
  </ul>
</form>
   
  )
}

export default ContactForm
