import React from 'react'
import { Tests } from '../types/Type'

type Props={
    data: Tests,
    arr: Tests[],
    showEl: (x: Tests[]) => void
}

const Card:React.FC<Props> = ({data,arr,showEl}) => {

  const delFunc=(id: number)=>{
    const newArr = arr.filter(item => item.id !== id);
    showEl(newArr)
    localStorage.setItem("items",JSON.stringify(newArr))
  }
  return (
    <div className='card'>
        <p>{data.message}</p>
        <button onClick={()=>delFunc(data.id)}>Delete</button>
    </div>
  )
}

export default Card