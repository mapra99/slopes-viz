import { useContext } from 'react'
import ContourPlot from './ContourPlot'
import NoDataComplain from './NoDataComplain'
import { DisplacementsContext } from '../contexts/DisplacementsContext'
import { isEmptyObject, parseContourData } from '../utils/dataUtils'

const DisplXHeatMap = () => {
  const { scaledData } = useContext(DisplacementsContext)
  if (isEmptyObject(scaledData)) return <NoDataComplain />

  const data = parseContourData(scaledData, "dispX")
  return (
    <ContourPlot
      data={data}
      title="Desplazamientos en X"
    />
  )
}

export default DisplXHeatMap
