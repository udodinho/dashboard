import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts'

class SparkLine extends React.PureComponent {
  render() {
    const { id, height, width, currentColor, data, type, color } = this.props;

    return (
      <SparklineComponent id={id}
        height={height}
        width={width}
        lineWidth={1}
        fill={color}
        valueType="Numeric"
        border={{ color: currentColor, width: 2 }}
        markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}

        dataSource={data}
        xName="x"
        yName="y"
        type={type}
        tooltipSettings={{
          visible: true,
          format: '${x} : data: ${y}',
          trackLineSettings: {
            visible: true
          }
        }}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    );
  }
}

export default SparkLine