export const defaultOptions = {
  chart: {
    type: 'heatmap',
    marginTop: 40,
    marginBottom: 80,
  },

  boost: {
    useGPUTranslations: true
  },

  title: {
    text: 'Chart'
  },

  colorAxis: {
    minColor: '#0000FF',
    maxColor: '#FF0000'
  },

  yAxis: {
    title: null,
    reversed: true,
    visible: false
  },

  xAxis: {
    visible: false
  },

  legend: {
    align: 'right',
    layout: 'vertical',
    margin: 0,
    verticalAlign: 'top',
    y: 25,
    symbolHeight: 280
  },

  tooltip: {
    formatter: function () {
      return this.point.value.toFixed(2)
    }
  },

  series: []
}
