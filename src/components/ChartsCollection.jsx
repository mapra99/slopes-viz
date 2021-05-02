import { useState } from 'react'
import { AppBar, Tabs, Tab } from '@material-ui/core'
import TabPanel from './TabPanel'

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
          <Tab label="Desplazamientos X" {...a11yProps(0)} />
          <Tab label="Desplazamientos Y" {...a11yProps(1)} />
          <Tab label="Desplazamientos Totales" {...a11yProps(2)} />
          <Tab label="Campo Vectorial" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        DESPLAZAMIENTOS X
      </TabPanel>
      <TabPanel value={value} index={1}>
        DESPLAZAMIENTOS Y
      </TabPanel>
      <TabPanel value={value} index={2}>
        DESPLAZAMIENTOS TOTALES
      </TabPanel>
      <TabPanel value={value} index={3}>
        CAMPO VECTORIAL
      </TabPanel>
    </>
  )
}

export default ChartsCollection
