import { useContext } from 'react'
import HeatMap from './HeatMap'
import NoDataComplain from './NoDataComplain'
import { DisplacementsContext } from '../contexts/DisplacementsContext'
import { pluck, isEmptyObject } from '../utils/dataUtils'

const DisplXHeatMap = () => {
  const { scaledData } = useContext(DisplacementsContext)

  if (isEmptyObject(scaledData)) return <NoDataComplain />

  return (
    <HeatMap data = { pluck(scaledData, ['initialX', 'initialY', 'dispX']) } />
  )
}

export default DisplXHeatMap
