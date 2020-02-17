import { Upload, Icon, message } from 'antd';

import React from 'react'


const FileUploader=(props)=>
{
    const { Dragger } = Upload;
    const prop = {
        name: 'file',
        multiple: true,
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange(info) {
          const { status } = info.file;
          if (status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
          } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };

    return(

<Dragger {...prop}>
    <p className="ant-upload-drag-icon">
      <Icon type="inbox" />
    </p>
    <p className="ant-upload-text">Upload or Drag and Drop to upload a new file to your Vault</p>
    <p className="ant-upload-hint">
     your new file will be stored in our secured server
    </p>
  </Dragger>

    )
}

export default FileUploader;