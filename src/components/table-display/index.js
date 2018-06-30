import React from 'react';
import ReactTable from "react-table";

const TableDisplay = ({items}) =>(
    <ReactTable
          data={items}
          columns={[
            {
              Header: "Name",
              accessor: "login"
            },
            {
              Header: "url",
              accessor: 'url'
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
)

export default TableDisplay;