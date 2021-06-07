
import React from 'react';
import Plot from 'react-plotly.js';

const ContourPlot = ({ data, title }) => (
  <Plot
    data={[
      {
        type: 'contour',
        // contours: {
        //   coloring: 'heatmap',
        // },
        line: {
          width: 0,
        },
        colorscale: [
          [-1000, 'rgb(0, 255, 0)'],
          [0, 'rgb(255, 255, 255)'],
          [1000, 'rgb(255, 0, 0)']
        ],
        ...data,
      },
    ]}
    layout={{width: '100%', height: '100%', title }}
  />
)

export default ContourPlot;
