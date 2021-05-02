import { useState, useEffect, useContext } from 'react'
import { Typography, TextField, Box, Button } from '@material-ui/core'
import { DisplacementsContext } from '../contexts/DisplacementsContext'

const ScalingForm = () => {
  const { setUnitsScale, scaleRawData } = useContext(DisplacementsContext)

  const [widthMilimeters, setWidthMilimeters] = useState(null)
  const [widthPixels, setWidthPixels] = useState(null)
  const [widthScale, setWidthScale] = useState(1)

  const [heightMilimeters, setHeightMilimeters] = useState(null)
  const [heightPixels, setHeightPixels] = useState(null)
  const [heightScale, setHeightScale] = useState(1)

  useEffect(() => {
    if (!widthMilimeters || !widthPixels) return

    setWidthScale(widthMilimeters / widthPixels)
  }, [widthMilimeters, widthPixels])

  useEffect(() => {
    if (!heightMilimeters || !heightPixels) return

    setHeightScale(heightMilimeters / heightPixels)
  }, [heightMilimeters, heightPixels])

  useEffect(() => {
    if (!widthScale || !heightScale) return

    setUnitsScale((widthScale + heightScale) * 0.5)
  }, [widthScale, heightScale])

  return (
    <form>
      <Typography variant="h5">
        Parámetros
      </Typography>

      <Box m="10px 0">
        <Typography>Ancho Talud</Typography>
        <TextField id="talud-width-mm" label="mm" style={{width: "50%"}} onChange={e => setWidthMilimeters(e.target.value)} value={widthMilimeters} />
        <TextField id="talud-width-px" label="px" style={{width: "50%"}} onChange={e => setWidthPixels(e.target.value)} value={widthPixels} />
        <Typography>Relación: {widthScale}</Typography>
      </Box>

      <Box m="10px 0">
        <Typography>Altura Talud</Typography>
        <TextField id="talud-height-mm" label="mm" style={{width: "50%"}} onChange={e => setHeightMilimeters(e.target.value)} value={heightMilimeters} />
        <TextField id="talud-height-px" label="px" style={{width: "50%"}} onChange={e => setHeightPixels(e.target.value)} value={heightPixels} />
        <Typography>Relación: {heightScale}</Typography>
      </Box>

      <Box m="10px 0">
        <Button
          variant="contained"
          onClick={scaleRawData}>
          Graficar
        </Button>
      </Box>
    </form>
  )
}

export default ScalingForm
