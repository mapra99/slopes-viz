import { useContext } from 'react'
import HeatMap from './HeatMap'
import NoDataComplain from './NoDataComplain'
import { DisplacementsContext } from '../contexts/DisplacementsContext'
import { pluck, isEmptyObject, normalizeChartData } from '../utils/dataUtils'

const DisplYHeatMap = () => {
  const { scaledData } = useContext(DisplacementsContext)
  if (isEmptyObject(scaledData)) return <NoDataComplain />

  const normalizedData = normalizeChartData(scaledData)
  return (
    <HeatMap
      data = { pluck(normalizedData, ['xCoord', 'yCoord', 'dispY']) }
      customOptions = {{
        title: {
          text: 'Desplazamientos en Y'
        },
      }}
    />
  )
}

export default DisplYHeatMap
