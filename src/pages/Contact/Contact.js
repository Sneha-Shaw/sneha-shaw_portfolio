import React from 'react'
import { useStyles } from './styles'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';

const Contact = () => {
  const classes = useStyles()
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
          </div>
         
        </div>
        <div className={classes.right}>
        <div className={classes.formWrapper}>
            <h2>
              Don't hesitate to drop me a Hi !
            </h2>
            <form className={classes.form}>
              <input type="text" placeholder="Name" className={classes.input} />
              <input type="email" placeholder="Email" className={classes.input} />
              <textarea placeholder="Message" className={classes.input} />
              <button className={classes.button}>Send</button>
            </form>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Contact