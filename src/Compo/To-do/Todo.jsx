import React, { useState } from 'react'

const Todo = () => {
  const [data, setData]=useState(" ")
  const [list,setList]= useState([])

  function handelData(){


    // setList([...list,data])
    // console.log(list)
    setList((list)=>{
      const update= [...list, data]
      console.log(list)
      setData(" ")
      return update
    })
  }
  function removedata(index){
    let updata= list.filter((d,i)=>{
      return i!=index
    })
    setList(updata)
  }
  return (
    <div className='w-[800px] mt-5'>
        <div className='border ml-[400px] bg-orange-300 p-7 rounded-md shadow-lg'>
        <div className=' flex flex-col justify-center items-center'>
          <h1  className='p-5 text-3xl'>To-Do List App</h1>
          <div>
          <input onChange={(e)=>setData(e.target.value)} className='p-1 w-[230px] rounded-md outline-1' type="text" placeholder='Add Activity' />
          <button onClick={()=>handelData()} className='p-1 w-[70px] rounded-lg text-white bg-cyan-600'>Add</button>
        </div>
        </div>
        {
          list!=[] && list.map((d,index)=>{
            return(
              <div className='flex gap-[250px] mt-10'>
                <div className='' key={index}>
                <p className='text-2xl'>{d}</p>

              </div>
              <button onClick={()=>removedata(index)} className='bg-red-700 text-white p-1 rounded'>remove</button>
              </div>  
            )
          })
        }
        </div>

    </div>
  )
}

export default Todo