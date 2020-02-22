import React,{useEffect} from 'react'
import {signout} from '../../services/connectToServer'
import {deleteAuthorizationCookies} from '../../util/common_utils'
import {withRouter} from 'react-router-dom'
import Typography from 'antd/es/typography'
import './logout.css'


const LogOut=(props)=>
{
let exception=false;

    useEffect( ()=>{
        const action=async()=>{
       const signOutRes=await signout();
       if(signOutRes.status===200)
       {
        deleteAuthorizationCookies();
        props.history.push("/")
       }
       else
       {
            exception=true;
       }
    }
    action()
    });

return(<div>

    {!exception && <Typography.Title className="center blink_me"> signing you out !!!</Typography.Title> }
    {exception && <><Typography.Title> ohh!!, we encountered a exception while signing you out</Typography.Title>  <Typography.Paragraph>If the Exception persist please contact the support</Typography.Paragraph></>}
</div>)
}


export default withRouter(LogOut);