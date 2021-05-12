import { useState } from 'react'
import { AppBar, Tabs, Tab } from '@material-ui/core'
import TabPanel from './TabPanel'
import DisplXHeatMap from './DisplXHeatMap'
import DisplYHeatMap from './DisplYHeatMap'
import DisplTotalHeatMap from './DisplTotalHeatMap'

const a11yProps = (index) => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`
})

const ChartsCollection = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Contour Plot" {...a11yProps(0)} />
          <Tab label="Desplazamientos X" {...a11yProps(1)} />
          <Tab label="Desplazamientos Y" {...a11yProps(2)} />
          <Tab label="Desplazamientos Totales" {...a11yProps(3)} />
          <Tab label="Campo de Desplazamientos" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <DisplXHeatMap />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DisplXHeatMap />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DisplYHeatMap />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <DisplTotalHeatMap />
      </TabPanel>
      <TabPanel value={value} index={4}>
        CAMPO DE DESPLAZAMIENTOS
      </TabPanel>
    </>
  )
}

export default ChartsCollection
