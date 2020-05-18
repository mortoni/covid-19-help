import { withStyles } from '@material-ui/core/styles'
import { StepConnector } from '@material-ui/core'

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      background: 'linear-gradient(188.41deg, #B39FD9 7.47%, #6C63FF 92.23%)',
    },
  },
  completed: {
    '& $line': {
      background: 'linear-gradient(188.41deg, #B39FD9 7.47%, #6C63FF 92.23%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector)

export default ColorlibConnector
