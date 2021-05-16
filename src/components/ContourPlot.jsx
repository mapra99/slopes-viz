
import React from 'react';
import Plot from 'react-plotly.js';

const ContourPlot = ({ data, title }) => (
  <Plot
    data={[
      {
        ...data,
        zsmooth: 'best',
        type: 'heatmap',
        connectgaps: true,
      },
    ]}
    layout={{width: '100%', height: '100%', title }}
  />
)

export default ContourPlot;
