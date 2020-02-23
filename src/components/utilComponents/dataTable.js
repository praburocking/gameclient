
 import Table from 'antd/es/table'
 import Divider from 'antd/es/divider'
 import Tag from 'antd/es/tag'
 import {downloadFiles} from '../../services/connectToServer'

import React from 'react';


const download=async (key)=>
{
await downloadFiles(key);
}


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
        <a style={{color:"black"}} onClick={()=>download(record.key)}>Download {record.name}</a>
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