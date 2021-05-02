import { Typography, Button } from '@material-ui/core'

const FilesForm = () => (
  <form>
    <Typography variant="h5">
      Cargar Archivos
    </Typography>
    <Button
    variant="contained"
    component="label">
      Desplazamientos X
      <input
        type="file"
        hidden />
    </Button>
    <Button
    variant="contained"
    component="label" >
      Desplazamientos Y
      <input
        type="file"
        hidden />
    </Button>
  </form>
)

export default FilesForm
