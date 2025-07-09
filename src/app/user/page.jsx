'use client'
import { useState } from "react"

export default function SetUser(){
const [name, setName] = useState('')
const [message,setMessage] = useState('')


const changeNameHandler = (e)=>{
    setName(e.target.value)
}

const submitNameHandler = async(e)=>{
    e.preventDefault()
    if(!name){
        setMessage('Name is required')
        return 
    }
    try{
      const res = await fetch('/api/users', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({name})
        })
        const data = res.json();

        if(res.ok){
            setMessage(data.message)
            setName('')
        }else{
            setMessage(data.error || "Error Occurred")
        }

    }catch(error){
        console.log(error)
        setMessage('Something went wrong')
    }


  
    
}

return (
    <>
        <h1>Add User Form</h1>
        <form onSubmit={submitNameHandler}>
            <div className="form-group">
                {/* <label htmlFor="user">User</label> */}
                <input type="text" name="name" value={name} id="name" onChange={changeNameHandler} />
                <button>Add User</button>
            </div>
            <p style={{
                color:'red'
            }}>{message}</p>
        </form>
    </>
)


}