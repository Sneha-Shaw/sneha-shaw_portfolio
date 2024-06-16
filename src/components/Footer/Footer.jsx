import React from 'react'
import { useStyles } from './styles'

const Footer = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <p>
        Made with <span className={classes.heart}>❤</span> by <span className={classes.name}>Sneha Shaw
        </span>
      </p>
    </div>

  )
}

export default Footer