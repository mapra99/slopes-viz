import Highcharts from 'highcharts'
import heatmap from 'highcharts/modules/heatmap'
import HighchartsReact from 'highcharts-react-official'
import { defaultOptions } from '../utils/highChartsOptions'

heatmap(Highcharts)

const HeatMap = ({ customOptions, data }) => {
  const options = {
    ...defaultOptions,
    ...customOptions,
    series: [{
      data
    }]
  }

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  )
}

HeatMap.defaultProps = {
  customOptions: {},
  data: []
}

export default HeatMap
