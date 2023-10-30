import React, { useEffect, useState } from 'react'

const Home = () => {
    const [data,setDaat] = useState([]);

    const device = ()=>{
        fetch(`https://zealous-rose-handkerchief.cyclic.app/devices`,{
            method:"GET",
            headers:{
                "Content-type":"application/json",
                authorization:`Bearer ${localStorage.getItem("token")}`
            }
        }).then((res)=>res.json()).then((data)=>{
            console.log(data);
            setDaat(data);
           
        }).catch((err)=>console.log(err))
    }
    useEffect(()=>{
        device()
    },[]);
    

    // console.log(data)
    const deleteItem =(id)=>{
        fetch(`https://zealous-rose-handkerchief.cyclic.app/devices/delete/${id}`,{
            method:"DELETE",
            headers:{
                "Content-type":"application/json",
                authorization:`Bearer ${localStorage.getItem("token")}`
            }
        }).then((res)=>res.json()).then((data)=>{
            console.log(data);
            device()}).catch((err)=>console.log(err))
    }
  return (
    <div>
        {data.length>0 ? data?.map((item)=>(
            <div style={{border:"1px solid black"}} key={item._id}>
                <p>device :{item.title}
                </p>
                <p>{item.device}</p>
                <p>{item.body}</p>
                <p>{item.no_of_comments}</p>
                <button onClick={()=>deleteItem(item._id)}>Delete</button>
            </div>
        )):
        <p>Loading...</p>}
        
        </div>
  )
}

export default Home