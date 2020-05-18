import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import { Box, Chip } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import { Typography, Button } from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import ArrowIcon from '@material-ui/icons/ArrowForwardIos'
import ShareIcon from '@material-ui/icons/Share'
import BookmarkIcon from '@material-ui/icons/BookmarkBorder'
import WatchIcon from '@material-ui/icons/WatchLater'
import RoomIcon from '@material-ui/icons/Room'

import Avatar from '../Avatar'

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  header: {
    borderBottom: '1px solid #c4c4c4',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  card: {
    margin: theme.spacing(2),
  },
}))

export default function TaskTile() {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<Avatar />}
        action={
          <Box>
            <IconButton aria-label="settings" color="primary">
              <ShareIcon />
            </IconButton>
            <IconButton aria-label="settings" color="primary">
              <BookmarkIcon />
            </IconButton>
          </Box>
        }
        title="Alan Mortoni"
        subheader="Brisbane, 4000"
        classes={{ root: classes.header }}
      />

      <CardContent>
        <Chip label="Dog Walking" />
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <WatchIcon />
        </IconButton>
        <Typography variant="body1">ASAP</Typography>
        <IconButton aria-label="share">
          <RoomIcon />
        </IconButton>
        <Typography variant="body1">500m</Typography>
        <Box flexGrow={1} display="flex" justifyContent="flex-end">
          <Button color="primary" endIcon={<ArrowIcon />}>
            View
          </Button>
        </Box>
      </CardActions>
    </Card>
  )
}
