import React from 'react'
import { useStyles } from './styles'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const classes = useStyles()
    // navbar for portfolio
    return (
        <div className={classes.container}>
            <div className={classes.logo}>
                <Link to="/">My Portfolio</Link>
            </div>
            <div className={classes.nav}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><a href="https://github.com/Sneha-Shaw?tab=repositories" target="_blank" rel="noreferrer">Projects</a></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar