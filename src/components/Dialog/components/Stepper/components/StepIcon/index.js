import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import NoteIcon from '@material-ui/icons/Note'
import EventIcon from '@material-ui/icons/Event'
import SettingsIcon from '@material-ui/icons/Settings'
import GroupAddIcon from '@material-ui/icons/GroupAdd'
import VideoLabelIcon from '@material-ui/icons/VideoLabel'
import clsx from 'clsx'

const useStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    background: 'linear-gradient(188.41deg, #B39FD9 7.47%, #6C63FF 92.23%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    background: 'linear-gradient(188.41deg, #B39FD9 7.47%, #6C63FF 92.23%)',
  },
})

function StepIcon(props) {
  const classes = useStyles()
  const { active, completed } = props

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
    4: <NoteIcon />,
    5: <EventIcon />,
  }

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  )
}

export default StepIcon
