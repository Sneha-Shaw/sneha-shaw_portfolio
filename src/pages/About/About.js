import React from 'react'
import { useStyles } from './styles'
import mypic from '../../assets/mee.jpg'
import { Container, Grid, Typography, Button } from '@mui/material'
// import { Link } from 'react-router-dom'
import DownloadIcon from '@mui/icons-material/Download';
import CV from '../../assets/Sneha Shaw Nov22.pdf'

const About = () => {
  const classes = useStyles()
  return (
    <div className={classes.Maincontainer}>
      <h1 className={classes.title}>About <span>Me</span></h1>
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
      {/* skill section */}
      <div className={classes.skillContainer}>
        <h1 className={classes.title}><span>MY </span> SKILLS</h1>
        <Container className={classes.gridContainer}>
          <h2>Languages:</h2>
          <Grid container spacing={2} className={classes.grid}>
            <Grid item xs={6} sm={3} className={classes.gridItem}>
              <Typography variant="h6" className={classes.skill}>JavaScript</Typography>
            </Grid>
            <Grid item xs={6} sm={3} className={classes.gridItem}>
              <Typography variant="h6" className={classes.skill}>Java</Typography>
            </Grid>
            <Grid item xs={6} sm={3} className={classes.gridItem}>
              <Typography variant="h6" className={classes.skill}>C</Typography>
            </Grid>
          </Grid>
        </Container>
        <Container className={classes.gridContainer}>
          <h2>Front-End:</h2>
          <Grid container spacing={2} className={classes.grid}>
            <Grid item xs={6} sm={3} className={classes.gridItem}>
              <Typography variant="h6" className={classes.skill}>HTML</Typography>
            </Grid>
            <Grid item xs={6} sm={3} className={classes.gridItem}>
              <Typography variant="h6" className={classes.skill}>CSS</Typography>
            </Grid>
            <Grid item xs={6} sm={3} className={classes.gridItem}>
              <Typography variant="h6" className={classes.skill}>JQuery</Typography>
            </Grid>
            <Grid item xs={6} sm={3} className={classes.gridItem}>
              <Typography variant="h6" className={classes.skill}>React</Typography>
            </Grid>
            <Grid item xs={6} sm={3} className={classes.gridItem}>
              <Typography variant="h6" className={classes.skill}>Material UI</Typography>
            </Grid>
            <Grid item xs={6} sm={3} className={classes.gridItem}>
              <Typography variant="h6" className={classes.skill}>Bootstrap</Typography>
            </Grid>
            <Grid item xs={6} sm={3} className={classes.gridItem}>
              <Typography variant="h6" className={classes.skill}>Tailwind CSS</Typography>
            </Grid>
            <Grid item xs={6} sm={3} className={classes.gridItem}>
              <Typography variant="h6" className={classes.skill}>SASS</Typography>
            </Grid>
          </Grid>
        </Container>
        <Container className={classes.gridContainer}>
          <h2>Back-End:</h2>
          <Grid container spacing={2} className={classes.grid}>
            <Grid item xs={6} sm={3} className={classes.gridItem}>
              <Typography variant="h6" className={classes.skill}>Node.js</Typography>
            </Grid>
            <Grid item xs={6} sm={3} className={classes.gridItem}>
              <Typography variant="h6" className={classes.skill}>Express.js</Typography>
            </Grid>
            <Grid item xs={6} sm={3} className={classes.gridItem}>
              <Typography variant="h6" className={classes.skill}>REST Api</Typography>
            </Grid>
          </Grid>
        </Container>
        <Container className={classes.gridContainer}>
          <h2>Database:</h2>
          <Grid container spacing={2} className={classes.grid}>
            <Grid item xs={6} sm={3} className={classes.gridItem}>
              <Typography variant="h6" className={classes.skill}>MySQL</Typography>
            </Grid>
            <Grid item xs={6} sm={3} className={classes.gridItem}>
              <Typography variant="h6" className={classes.skill}>MongoDB</Typography>
            </Grid>
          </Grid>
        </Container>
        <Container className={classes.gridContainer}>
          <h2>Tools:</h2>
          <Grid container spacing={2} className={classes.grid}>
            <Grid item xs={6} sm={3} className={classes.gridItem}>
              <Typography variant="h6" className={classes.skill}>Git</Typography>
            </Grid>
            <Grid item xs={6} sm={3} className={classes.gridItem}>
              <Typography variant="h6" className={classes.skill}>GitHub</Typography>
            </Grid>
            <Grid item xs={6} sm={3} className={classes.gridItem}>
              <Typography variant="h6" className={classes.skill}>Heroku</Typography>
            </Grid>
            <Grid item xs={6} sm={3} className={classes.gridItem}>
              <Typography variant="h6" className={classes.skill}>Netlify</Typography>
            </Grid>
            <Grid item xs={6} sm={3} className={classes.gridItem}>
              <Typography variant="h6" className={classes.skill}>Illustrator</Typography>
            </Grid>
          </Grid>
        </Container>

      </div>

    </div>
  )
}

export default About