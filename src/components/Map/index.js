import React from 'react'
import GoogleMapReact from 'google-map-react'
import Grid from '@material-ui/core/Grid'
import OAmapPin from '../../assets/logo.png'

const Marker = ({ text }) => (
  <Grid container direction="column" alignItems="center" style={{ width: 30 }}>
    <img alt="" src={OAmapPin} width="40px" />
    <p style={{ textAlign: 'center', backgroundColor: '#fff', padding: '0 3px' }}>{text}</p>
  </Grid>
)

const OAMap = () => {
  return (
    <div style={{ height: 500, width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBKUWpYchxkzUgQhFXiyegsCyZKDricnus' }}
        defaultCenter={{
          lat: -27.5707129,
          lng: 152.7130154,
        }}
        defaultZoom={11}
      >
        <Marker lat={-27.5707129} lng={152.7130154} text="neighour in need" />
      </GoogleMapReact>
    </div>
  )
}

export default OAMap
