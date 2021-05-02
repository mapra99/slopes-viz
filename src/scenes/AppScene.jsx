import { Grid } from '@material-ui/core'
import SettingsPanel from '../components/SettingsPanel';

const AppScene = () => (
  <Grid container spacing={3}>
    <Grid xs={12} sm={3}>
      <SettingsPanel />
    </Grid>
    <Grid xs={12} sm={9}>
      WORLD
    </Grid>
  </Grid>
)

export default AppScene;
