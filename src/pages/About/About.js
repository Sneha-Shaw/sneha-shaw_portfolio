import React from 'react'
import { useStyles } from './styles'
import mypic from '../../assets/mee.jpg'
import { Container, Grid, Typography, Button } from '@mui/material'
// import { Link } from 'react-router-dom'
// import GitHubIcon from '@mui/icons-material/GitHub';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import MailIcon from '@mui/icons-material/Mail';
import DownloadIcon from '@mui/icons-material/Download';
import CV from '../../assets/Sneha Shaw Nov22.pdf'

const About = () => {
  const classes = useStyles()
  return (
    <div className={classes.Maincontainer}>
      <h1 className={classes.title}>ABOUT <span>ME</span></h1>
      <div className={classes.container}>
        <div className={classes.left}>
          <div className={classes.imgDesign}>

          </div>
          <div className={classes.imgContainer}>
            <img src={mypic} alt="mypic" />
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.wrapper}>
            <p>
              Hi I'm a 21 year old full stack developer from Kolkata who loves solving problems in ways that are creative and sustainable.
              My specialty is Front-End Web Design. My hobbies are digital portraits and cycling.
            </p>
          </div>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href={CV}
            target="_blank"
            download="Sneha Shaw_Resume"
            startIcon={<DownloadIcon />}
            className={classes.button}
          >
            Download CV
          </Button>
        </div>
      </div>
    </div>
  )
}

export default About