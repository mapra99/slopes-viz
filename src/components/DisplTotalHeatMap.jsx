import { useContext } from 'react'
import ContourPlot from './ContourPlot'
import NoDataComplain from './NoDataComplain'
import { DisplacementsContext } from '../contexts/DisplacementsContext'
import { isEmptyObject, parseContourData } from '../utils/dataUtils'

const DisplTotalHeatMap = () => {
  const { scaledData } = useContext(DisplacementsContext)
  if (isEmptyObject(scaledData)) return <NoDataComplain />

  const data = parseContourData(scaledData, "totalDisp")
  return (
    <ContourPlot
      data={data}
      title="Desplazamientos Resultantes"
    />
  )
}

export default DisplTotalHeatMap
