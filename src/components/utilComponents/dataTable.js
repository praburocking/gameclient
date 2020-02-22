
 import Table from 'antd/es/table'
 import Divider from 'antd/es/divider'
 import Tag from 'antd/es/tag'

import React from 'react';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a style={{color:"black"}}>{text}</a>,
  },
 
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a style={{color:"black"}}>Download {record.name}</a>
        <Divider type="vertical" style={{color:"black"}} />
        <a style={{color:"black"}}>Delete</a>
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