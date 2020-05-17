import { withStyles } from '@material-ui/core/styles'
import MuiDialogActions from '@material-ui/core/DialogActions'

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    justifyContent: 'space-around',
  },
}))(MuiDialogActions)

export default DialogActions
