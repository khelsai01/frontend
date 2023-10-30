import React, {useState } from 'react'

const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")


   const login=()=>{
        const payload ={
            email,
            password
        }
        fetch(`https://zealous-rose-handkerchief.cyclic.app/users/login`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            
        },
        body:JSON.stringify(payload)
        }).then((res)=>res.json()).then((data)=>{
            console.log(data)
            localStorage.setItem("token",data.token)
        }).catch((er)=>console.log(er))
    }

  return (
    <div>
        <br/>

        <input type="text"  value={email} placeholder='email' onChange={(e)=>setEmail(e.target.value)} />
        <br/>
        <input type="text"  value={password} placeholder='email' onChange={(e)=>setPassword(e.target.value)} />
        <br/>

        <button onClick={login}>Login</button>

    </div>
  )
}

export default Login