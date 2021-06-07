import { useContext } from 'react'
import ContourPlot from './ContourPlot'
import NoDataComplain from './NoDataComplain'
import { DisplacementsContext } from '../contexts/DisplacementsContext'
import { isEmptyObject, parseContourData } from '../utils/dataUtils'

const DisplXHeatMap = () => {
  const { scaledData, options } = useContext(DisplacementsContext)
  if (isEmptyObject(scaledData)) return <NoDataComplain />

  const data = parseContourData(scaledData, "dispX", options)
  data.connectgaps = options.interpolateData

  return (
    <ContourPlot
      data={data}
      title="Desplazamientos en X"
    />
  )
}

export default DisplXHeatMap
