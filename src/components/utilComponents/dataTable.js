
 import Table from 'antd/es/table'
 import Divider from 'antd/es/divider'
 import Tag from 'antd/es/tag'

import React from 'react';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
 
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a>Download {record.name}</a>
        <Divider type="vertical" />
        <a>Delete</a>
      </span>
    ),
  },
];


  const DataTable=(props)=>
  {
      return(
      <Table columns={columns} dataSource={props.data} />
      )
  }

export default DataTable;