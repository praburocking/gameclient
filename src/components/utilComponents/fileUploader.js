 import Modal from 'antd/es/modal'
 import Input from 'antd/es/input'
import './fileUploader.css'
import {uploadfile} from '../../services/connectToServer'
import React,{useState} from 'react'


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
        await uploadfile(data)
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
            <div className="col-md-6">
                {console.log("selected files ",file)}
	      <form method="post" action="#" id="#" >
              <div className="form-group files color">
                <label>Upload Your File </label>
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

export default FileUploader;


