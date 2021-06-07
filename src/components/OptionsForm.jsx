import { useContext } from 'react'
import { Typography, FormControlLabel, Checkbox } from '@material-ui/core'
import { DisplacementsContext } from '../contexts/DisplacementsContext'

const OptionsForm = () => {
  const { options, setOptions } = useContext(DisplacementsContext);
  const {
    interpolateData,
    zeroesForNull
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

      <FormControlLabel
        control={
          <Checkbox
            checked={zeroesForNull}
            onChange={(e) => setOptions({...options, zeroesForNull: e.target.checked})}
            name="zeroesForNull"
            color="primary"
          />
        }
        label="Hacer datos inexistentes igual a 0"
      />
    </form>
  )
}

export default OptionsForm
