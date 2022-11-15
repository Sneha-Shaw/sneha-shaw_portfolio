import React from 'react'
import { useStyles } from './styles'
import pic from '../../assets/dp.jpg'
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes.wrapper}>
          <h2>Hi There, I'm</h2>
          <h1>Sneha Shaw</h1>
          <TypeAnimation
            sequence={[
              'A Full Stack Developer', // Types 'One'
              1000, // Waits 1s
              'A Tech Enthusiast', // Deletes 'One' and types 'Two'
              1000, // Waits 2s
              'A Problem Solver',
              1000 // Types 'Three' without deleting 'Two'
            ]}
            repeat={Infinity}
            style={{ fontSize: '2rem' }}
            speed="45"
          />

        </div>
      </div>
      <div className={classes.right}>

        <div className={classes.imgContainer}>
        <div className={classes.imgContainer2}>

          <img
            src={pic}
            alt=""
            className={classes.img}
          />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home