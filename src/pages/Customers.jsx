import React from 'react'
import { GridComponent, ColumnsDirective, Search, ColumnDirective, Selection, Edit, Filter, Sort, Page, Inject, Toolbar } from '@syncfusion/ej2-react-grids'
import { customersGrid, customersData } from '../data/dummy'
import { Header } from '../components'

const Customers = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent dataSource={customersData} allowPaging allowSorting toolbar={["Delete", "Search"]} editSettings={{ allowDeleting: true, allowEditing: true}}>
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Selection,Search, Edit, Sort, Filter, Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Customers