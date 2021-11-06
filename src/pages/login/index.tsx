import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { setDefaultHeaders } from 'until/request'

import { login, test } from 'api/login'
import { setSession, getSession } from 'until/storage'
import { updataUser } from "store/action"

const Login: React.FC = () => {
    const dispatch = useDispatch()

     useEffect(() => {
        dispatch(updataUser({username: 'admin'}))
        
        // setSession('helo', 19)
        // console.log(getSession('token'));
        
        // setDefaultHeaders({'X-Access-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzU5OTUzMTcsInVzZXJuYW1lIjoiamVlY2cifQ.DBhLTg-uvhK-JyadjuvioyIi2TSum9JeCuJBmbBCS2k'})
        bb()
    })
    
    
    const bb = async () => {
        // const aa =  await login({username: 'jeecg', password: '123456',captcha: 'wtip'})
        // console.log(aa);

        setSession('token','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzYwMDY1NjIsInVzZXJuYW1lIjoiamVlY2cifQ.73JmitUTzXYFRQScWeLRkFGnscThHDVeB2K2l-2yEc8')
        test({_t: 1636004763}).then(res => {
            console.log(res)
        }
        )
    }

    return (
        <div>Login ---- </div>
    )
}

export default Login