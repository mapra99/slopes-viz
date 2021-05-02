import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import { Typography, Box} from '@material-ui/core'

const NoDataComplain = () => (
  <Box display="flex" justifyContent="center">
    <Box textAlign="center">
      <SentimentVeryDissatisfiedIcon style={{ fontSize: 200 }} />
      <Typography variant="h3">
        No has cargado ningun dato!
      </Typography>
    </Box>
  </Box>
)

export default NoDataComplain
