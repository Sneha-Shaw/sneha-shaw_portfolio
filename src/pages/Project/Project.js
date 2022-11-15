import React from 'react'
import { useStyles } from './styles'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardMedia,CardHeader, Button  } from '@mui/material'

const Project = () => {
  const classes = useStyles()
  return (
    <div className={classes.Maincontainer}>
      <h1 className={classes.title}>
        <span>My</span> Projects
      </h1>
      <div className={classes.container}>
        {/* cards containing project image, link, header */}
        <Card className={classes.card}>
          <CardHeader title="Project 1" />
          <CardMedia
            component="img"
            height="140"
            image="https://source.unsplash.com/random"
            alt="green iguana"
          />
          <CardContent>
            <Button variant="contained" color="primary">
              <Link to="/project/1">View Project</Link>
            </Button>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardHeader title="Project 2" />
          <CardMedia
            component="img"
            height="140"
            image="https://source.unsplash.com/random"
            alt="green iguana"
          />
          <CardContent>
            <Button variant="contained" color="primary">
              <Link to="/project/2">View Project</Link>
            </Button>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardHeader title="Project 3" />
          <CardMedia
            component="img"
            height="140"
            image="https://source.unsplash.com/random"
            alt="green iguana"
          />
          <CardContent>
            <Button variant="contained" color="primary">
              <Link to="/project/3">View Project</Link>
            </Button>
          </CardContent>
        </Card>
        
      </div>
    </div>
  )
}

export default Project