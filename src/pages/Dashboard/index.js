import React from 'react'
import { Typography, Box, Tab, Tabs } from '@material-ui/core'
import TabPanel from '../../components/TabPanel'
import { makeStyles } from '@material-ui/core/styles'
import OAMap from '../../components/OAMap'

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme) => ({
  tabContainer: {
    backgroundColor: '#EAEAEF',
  },
}))
const Dashboard = () => {
  const classes = useStyles()
  const TABS = [
    { name: 'My activities', component: <Typography>My activities list</Typography> },
    { name: 'Tasks around', component: <Typography>Tasks around list</Typography> },
  ]
  const [tab, setTab] = React.useState(0)

  const handleTabChange = (event, newTab) => {
    setTab(newTab)
  }

  return (
    <Box display="flex" flexGrow={1}>
      <Box mt={2} display="flex" flexDirection="column" flex={1}>
        <Box m={2}>
          <Tabs value={tab} onChange={handleTabChange} aria-label="simple tabs example">
            {TABS.map(({ name }, i) => (
              <Tab key={name} label={name} {...a11yProps(i)} />
            ))}
          </Tabs>
        </Box>

        <Box className={classes.tabContainer} flexGrow={1}>
          {TABS.map(({ component, name }, i) => (
            <TabPanel key={name} value={tab} index={i}>
              {React.cloneElement(component, {})}
            </TabPanel>
          ))}
        </Box>
      </Box>
      <Box display="flex" flex={1}>
        <OAMap />
      </Box>
    </Box>
  )
}

export default Dashboard
