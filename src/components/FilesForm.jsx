import { useState, useEffect, useContext } from 'react'
import { Typography, Button, CircularProgress } from '@material-ui/core'
import { DisplacementsContext } from '../contexts/DisplacementsContext'

const FilesForm = () => {
  const { loadRawData, loadingRawData } = useContext(DisplacementsContext)

  const [xDispFile, setXDispFile] = useState(null)
  const [yDispFile, setYDispFile] = useState(null)

  useEffect(() => {
    if (xDispFile) loadRawData(xDispFile, 'X')
    if (yDispFile) loadRawData(yDispFile, 'Y')
  }, [xDispFile, yDispFile])

  if (loadingRawData) return <CircularProgress />

  return (
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
          onChange = {e => setXDispFile(e.target.files[0])}
          hidden />
      </Button>
      <Button
      variant="contained"
      component="label" >
        Desplazamientos Y
        <input
          type="file"
          onChange = {e => setYDispFile(e.target.files[0])}
          hidden />
      </Button>
    </form>
  )
}

export default FilesForm
