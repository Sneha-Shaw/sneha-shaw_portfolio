import React, { useState } from 'react'
import { useStyles } from './styles'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import Swal from 'sweetalert2';

const Contact = () => {
  const classes = useStyles()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    const templateId = 'template_t7dw9lw'
    // console.log(message);
    sendFeedback(templateId, {
      message: message,
      from_name: name,
      reply_to: email
    })
    setName('')
    setEmail('')
    setMessage('')
  }
  const sendFeedback = (templateId, variables) => {
    window.emailjs.send(
      'service_d435bqq', templateId,
      variables
    ).then(
      res => {
        // console.log('Email successfully sent!')
        Swal.fire({
          title: 'Success!',
          text: 'Your message has been sent',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        })
      }
    ).catch(
      err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err)
    )
  }
  return (
    <div className={classes.Maincontainer}>
      <h1 className={classes.title}>Contact <span>Me</span></h1>
      {/* mail me form */}
      <div className={classes.container}>
        <div className={classes.left}>
          <div className={classes.wrapper}>
            <h2>
              Let's <span>create</span> Something Together
            </h2>
            {/* <p>
              You can also find me on these platforms
            </p> */}
            <div className={classes.social}>
              <a href="https://github.com/Sneha-Shaw" target="_blank" rel="noreferrer">
                <GitHubIcon className={classes.icon} />
              </a>
              <a href="https://www.linkedin.com/in/sneha-shaw-122/" target="_blank" rel="noreferrer">
                <LinkedInIcon className={classes.icon} />
              </a>
              <a href="mailto:snehashaw122@gmail.com" target="_blank" rel="noreferrer">
                <MailIcon className={classes.icon} />
              </a>
            </div>
            {/* mail info */}
            <div className={classes.mail}>
              <h3>Mail Me</h3>
              <p>
                snehashaw122@gmail.com
              </p>
            </div>

          </div>

        </div>
        <div className={classes.right}>
          <div className={classes.formWrapper}>
            <h2>
              Don't hesitate to drop me a Hi !
            </h2>
            <form className={classes.form}>
              <input type="text"
                placeholder="Name"
                className={classes.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input type="email"
                placeholder="Email"
                className={classes.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                placeholder="Message"
                className={classes.input}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button className={classes.button}
                onClick={handleSubmit}
              >Send</button>
            </form>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Contact