import React from 'react'
import { Box, Container, Tabs, Tab, IconButton, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import MapIcon from '@material-ui/icons/Map'
import TuneIcon from '@material-ui/icons/Tune'
import TabPanel from './components/TabPanel'
import TaskTile from '../TaskTile'
import Header from '../Header'
import OAMap from '../OAMap'

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabPanel: {
    backgroundColor: '#E5E5E5',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  },
}))
function Dashboard() {
  const [showMap, setShowMap] = React.useState(false)
  const classes = useStyles({ showMap })
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box>
      <Header />
      <Box mt={4}>
        <Container maxWidth={showMap ? 'xl' : 'md'} disableGutters>
          <Box display="flex" justifyContent="space-between" flexDirection={{ xs: 'column-reverse', sm: 'row' }}>
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
              <Tab label="Task" {...a11yProps(0)} />
              <Tab label="Helpers" {...a11yProps(1)} />
              <Tab label="Offers" {...a11yProps(2)} />
            </Tabs>

            <Box display="flex" justifyContent={{ xs: 'flex-end', sm: 'flex-start' }}>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color={showMap ? 'secondary' : 'primary'}
                onClick={() => setShowMap(!showMap)}
              >
                <MapIcon style={{ fontSize: 30 }} />
              </IconButton>

              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="secondary"
              >
                <TuneIcon style={{ fontSize: 30 }} />
              </IconButton>
            </Box>
          </Box>

          <Box className={classes.tabPanel}>
            <TabPanel value={value} index={0}>
              <Grid container className={classes.container}>
                <Grid item xs={12} md={showMap ? 6 : 12}>
                  <TaskTile />
                  <TaskTile />
                  <TaskTile />
                </Grid>
                <Grid item xs={showMap ? 12 : null} md={showMap ? 6 : null}>
                  <Box my={{ xs: 0, md: 2 }} display={showMap ? 'flex' : 'none'}>
                    {/* <OAMap /> */}
                  </Box>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
              Helpers
            </TabPanel>
            <TabPanel value={value} index={2}>
              Offers
            </TabPanel>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Dashboard
