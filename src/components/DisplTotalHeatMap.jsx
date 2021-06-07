import { useContext } from 'react'
import ContourPlot from './ContourPlot'
import NoDataComplain from './NoDataComplain'
import { DisplacementsContext } from '../contexts/DisplacementsContext'
import { isEmptyObject, parseContourData } from '../utils/dataUtils'

const DisplTotalHeatMap = () => {
  const { scaledData, options: { interpolateData } } = useContext(DisplacementsContext)
  if (isEmptyObject(scaledData)) return <NoDataComplain />

  const data = parseContourData(scaledData, "totalDisp")
  data.connectgaps = interpolateData

  return (
    <ContourPlot
      data={data}
      title="Desplazamientos Resultantes"
    />
  )
}

export default DisplTotalHeatMap
