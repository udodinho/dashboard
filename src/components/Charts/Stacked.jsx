import React from 'react'
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts'
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

const Stacked = ({ width, height}) => {
  const { currentMode } = useStateContext()
  return (
    <div>
      <ChartComponent width={width} height={height}
      id="charts"
      primaryXAxis={stackedPrimaryXAxis} 
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: {width: 0}}}
      tooltip={{ enable: true }}
      legendSettings={{ background: "white"}}
      background={currentMode === "Dark" ? "#33373E" : "#fff"}
      >
       <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
        <SeriesCollectionDirective>
          {stackedCustomSeries.map((item, index) => 
            <SeriesDirective key={index} {...item} /> )}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default Stacked