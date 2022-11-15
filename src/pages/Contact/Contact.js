import React from 'react'
import { useStyles } from './styles'
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
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
              <Link to="">
                <GitHubIcon className={classes.icon} />
              </Link>
              <Link to="">
                <FacebookIcon className={classes.icon} />
              </Link>
              <Link to="">
                <LinkedInIcon className={classes.icon} />
              </Link>
              <Link to="">
                <MailIcon className={classes.icon} />
              </Link>
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