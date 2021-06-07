import { createContext, useState, useEffect } from 'react'

export const DisplacementsContext = createContext(null)
export const DisplacementsProvider = ({ children }) => {
  const [rawData, setRawData] = useState({})
  const [scaledData, setScaledData] = useState({})
  const [loadingRawData, setLoadingRawData] = useState(false)
  const [unitsScale, setUnitsScale] = useState(1)
  const [options, setOptions] = useState({
    interpolateData: false
  })

  const totalDisplacement = (pointData) => {
    const { dispX, dispY } = pointData
    return (
      Math.sqrt((dispX || 0)**2 + (dispY || 0)**2)
    )
  }

  const loadRawData = (dispFile, direction) => {
    setLoadingRawData(true)

    const reader = new FileReader()
    reader.addEventListener('load', event => {
      const { result: fileContent } = event.target
      fileContent
        .split('\n')
        .forEach(pointData => {
          const [pointID, initialValue, finalValue] = pointData.split(' ')
          if (!pointID || !initialValue || !finalValue) return
          
          const formattedData = rawData[pointID] || {}
          formattedData[`initial${direction}`] = parseFloat(initialValue)
          formattedData[`final${direction}`] = parseFloat(finalValue)
          formattedData[`disp${direction}`] = finalValue - initialValue
          formattedData.totalDisp = totalDisplacement(formattedData)

          rawData[pointID] = formattedData
          setRawData(rawData)
        })
      setLoadingRawData(false)
    })

    reader.readAsText(dispFile)
  }

  const scaleRawData = () => {
    const transformedData = {}
    Object.keys(rawData).forEach(pointID => {
      const {initialX, initialY, finalX, finalY} = rawData[pointID]
      transformedData[pointID] = {
        initialX: initialX * unitsScale,
        finalX: finalX * unitsScale,
        dispX: (finalX - initialX) * unitsScale,
        
        initialY: initialY * unitsScale,
        finalY: finalY * unitsScale,
        dispY: (finalY - initialY) * unitsScale
      }

      transformedData[pointID].totalDisp = totalDisplacement(transformedData[pointID])
    })
    setScaledData(transformedData)
  }

  const contextVal = {
    rawData,
    loadRawData,
    loadingRawData,

    unitsScale,
    setUnitsScale,

    scaledData,
    scaleRawData,

    options,
    setOptions
  }

  return (
    <DisplacementsContext.Provider value={contextVal}>
      {children}
    </DisplacementsContext.Provider>
  )
}
