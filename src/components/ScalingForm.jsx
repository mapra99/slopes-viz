import { useState, useEffect } from 'react'
import { Typography, TextField, Box } from '@material-ui/core'

const ScalingForm = () => {
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

  return (
    <form>
      <Typography variant="h5">
        Parámetros
      </Typography>

      <Box m="10px 0">
        <Typography>Ancho Talud</Typography>
        <TextField id="talud-width-mm" label="mm" onChange={e => setWidthMilimeters(e.target.value)} value={widthMilimeters} />
        <TextField id="talud-width-px" label="px" onChange={e => setWidthPixels(e.target.value)} value={widthPixels} />
        <Typography>Relación: {widthScale}</Typography>
      </Box>

      <Box m="10px 0">
        <Typography>Altura Talud</Typography>
        <TextField id="talud-height-mm" label="mm" onChange={e => setHeightMilimeters(e.target.value)} value={heightMilimeters} />
        <TextField id="talud-height-px" label="px" onChange={e => setHeightPixels(e.target.value)} value={heightPixels} />
        <Typography>Relación: {heightScale}</Typography>
      </Box>
    </form>
  )
}

export default ScalingForm
