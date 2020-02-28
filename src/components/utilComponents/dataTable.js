
 import Table from 'antd/es/table'
 import Divider from 'antd/es/divider'
 import Tag from 'antd/es/tag'
 import message from 'antd/es/message'
 import {downloadFiles,deleteFile} from '../../services/connectToServer'
import {connect} from 'react-redux'
import React from 'react';
import {state_to_props} from '../../util/common_utils'
var fs =require('fs')


const download=async (record)=>
{
  var key=record.key;
  var downloadResp=await downloadFiles(key);
  if(downloadResp.status===200)
    { 
        var data=downloadResp.data;
        const downloadUrl = window.URL.createObjectURL(new Blob([data]));
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', record.name); //any other extension
        document.body.appendChild(link);
        link.click();
        link.remove();
    }
  else
    {
      if(downloadResp.data && downloadResp.data.message)
        {
          message.error(downloadResp.data.message)
        }
      else
      {
        message.error("Exception while downloading the file")
      }
    }
}


const deleteFromStore=(key)=>
{
  return {type:"FILES_DEL",data:key}
}
  const DataTable=(props)=>
  {
    
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
            <a style={{color:"black"}} onClick={()=>download(record)}>Download </a>
            <Divider type="vertical" style={{color:"black"}} />
            <a style={{color:"black"}} onClick={()=>handeDelete(record.key)}>Delete</a>
          </span>
        ),
      },
    ];

    const handeDelete=async(key)=>
      {
          let deleteResp=await deleteFile(key)
          if(deleteResp.status===200)
            {
              props.deleteFromStore(key)
            }
          else
            {
              if(deleteResp.data && deleteResp.data.message)
                {
                  message.error(deleteResp.data.message)
                }
              else
                {
                  message.error("Exception while deleting the file, Please try again later")
                }
              }
        }

      return(
      <Table columns={columns} dataSource={props.data} />
      )
  }

export default connect(null,{deleteFromStore})(DataTable);