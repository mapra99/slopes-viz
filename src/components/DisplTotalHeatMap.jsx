import { useContext } from 'react'
import HeatMap from './HeatMap'
import NoDataComplain from './NoDataComplain'
import { DisplacementsContext } from '../contexts/DisplacementsContext'
import { pluck, isEmptyObject, normalizeChartData } from '../utils/dataUtils'

const DisplTotalHeatMap = () => {
  const { scaledData } = useContext(DisplacementsContext)
  if (isEmptyObject(scaledData)) return <NoDataComplain />

  const normalizedData = normalizeChartData(scaledData)
  return (
    <HeatMap
      data = { pluck(normalizedData, ['xCoord', 'yCoord', 'totalDisp']) }
      customOptions = {{
        title: {
          text: 'Desplazamientos Totales'
        },

        colorAxis: {
          min: 0,
          minColor: '#0000FF',
          maxColor: '#FF0000'
        },
      }}
    />
  )
}

export default DisplTotalHeatMap
