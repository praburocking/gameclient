 import Modal from 'antd/es/modal'
 import Input from 'antd/es/input'
 import message from 'antd/es/message'
import './fileUploader.css'
import {uploadfile} from '../../services/connectToServer'
import React,{useState} from 'react'
import {connect} from 'react-redux'


const updateFilesToStore=(files)=>
{
  files.key=files.id;
 return ({type:"FILES_ADD",data:files})
}

const FileUploader=(props)=>
{
    
    const prop = {
        name: 'file',
        multiple: true,

        onChange(info) {
          console.log('FILE',info.file);
        },
        beforeUpload:false
      };


    const [file,setFile]=useState(null);
    const [isShowModal,setModal]=useState(false);
    const [eKey,setEKey]=useState(null);


   const onChangeHandler=event=>{

        console.log(event.target.files[0])
        
        if(event.target.files[0])
        {
            setFile(event.target.files[0]);
            setModal(true);
        }
    }

   const handleOk = async(e) => {
        console.log(e);
        const data = new FormData() 
        data.append('file', file);
        data.append('key',eKey);
        let uploadResp=await uploadfile(data)
        if(uploadResp.status===200)
        {
          props.updateFilesToStore(uploadResp.data)
        }
        else
        {
          if(uploadResp.data.message)
          {
            message.error(uploadResp.data.message)
          }
          else
          {
            message.error("exception while uploading,please try again later")
          }
         
        }
        
        setModal(false);
        setFile(null);
        setEKey(null);
      };
    
    const  handleCancel = e => {
        console.log(e);
        setModal(false);
        setFile(null);
        setEKey(null);
      };

    const changeEKey=(event)=>
    {
        console.log("value",event.target.value);
        setEKey(event.target.value);

    }
    return(
            <div className="col-md-6" style={{backgroundColor:"rgb(57, 224, 89)"}}>
	      <form method="post" action="#" id="#" >
              <div className="form-group files color">
                <input type="file" className="form-control" multiple="" onChange={onChangeHandler}/>
              </div>
          </form>
	      
          <Modal
          title="please Enter your entryption key"
          visible={isShowModal}
          onOk={handleOk}
          onCancel={handleCancel}>
          <Input type="text" placeholder="Encryption Key" value={eKey} onChange={changeEKey}/>
          <p>we will use this key along with our own random private key to encrypt your data</p>
        </Modal>
	      
	  </div>
    )
}

export default connect(null,{updateFilesToStore})(FileUploader);


