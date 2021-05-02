import { createContext, useState } from 'react'

export const DisplacementsContext = createContext(null)
export const DisplacementsProvider = ({ children }) => {
  const [rawData, setRawData] = useState({})
  const [loadingRawData, setLoadingRawData] = useState(false)

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

          rawData[pointID] = formattedData
          setRawData(rawData)
        })

      setLoadingRawData(false)
    })

    reader.readAsText(dispFile)
  }

  const contextVal = {
    rawData,
    loadRawData,
    loadingRawData
  }

  return (
    <DisplacementsContext.Provider value={contextVal}>
      {children}
    </DisplacementsContext.Provider>
  )
}
