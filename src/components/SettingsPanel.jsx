import { Box, Typography } from '@material-ui/core'
import FilesForm from './FilesForm'
import ScalingForm from './ScalingForm'
import OptionsForm from './OptionsForm'

const SettingsPanel = () => (
  <>
    <Box m="0 0 40px">
      <Typography variant="h4">
          Configuración
      </Typography>
    </Box>

    <Box m="20px 0">
      <FilesForm />
    </Box>

    <Box m="20px 0">
      <ScalingForm />
    </Box>

    <Box m="20px 0">
      <OptionsForm />
    </Box>
  </>
)

export default SettingsPanel;
