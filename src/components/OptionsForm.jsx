import { useContext } from 'react'
import { Typography, FormControlLabel, Checkbox } from '@material-ui/core'
import { DisplacementsContext } from '../contexts/DisplacementsContext'

const OptionsForm = () => {
  const { options, setOptions } = useContext(DisplacementsContext);
  const {
    interpolateData
  } = options;

  return (
    <form>
      <Typography variant="h5">
        Opciones
      </Typography>
      <FormControlLabel
        control={
          <Checkbox
            checked={interpolateData}
            onChange={(e) => setOptions({...options, interpolateData: e.target.checked})}
            name="interpolateData"
            color="primary"
          />
        }
        label="Interpolar data"
      />
    </form>
  )
}

export default OptionsForm
