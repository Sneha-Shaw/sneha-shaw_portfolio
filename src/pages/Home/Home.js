import React from 'react'
import { useStyles } from './styles'
import pic from '../../assets/dp.jpg'
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <div className={classes.left}>
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
      <div className={classes.right}>
      <div className={classes.wrapper}>
          <h2>Hi There, I'm</h2>
           <h1>Sneha Shaw</h1>
          {/*<h2>I am a</h2> */}
          <TypeAnimation
            sequence={[
              'I\'m a Full Stack Developer',
              2000, // Waits 2s
              'I\'m a Coding Enthusiast',
              1000, // Waits 1s
              'I\'m a Problem Solver',
              1000,
              'I\'m a Learner',
              1000,
              
            ]}
            repeat={Infinity}
            style={{ fontSize: '2rem' }}
            speed="45"
          />

        </div>
       
      </div>

    </div>
  )
}

export default Home