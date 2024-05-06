import React, { useState,ChangeEvent  } from 'react'
import { Tests } from '../types/Type'

type Props={
    arr: Tests[],
    setArr: React.Dispatch<React.SetStateAction<Tests[]>>,
    showEl: (x: Tests[]) => void;
}

const InpBtn:React.FC<Props> = ({arr,setArr,showEl}) => {
    const [inpVal,setInpVal]=useState<string>("")

    const inpHandler=(e: ChangeEvent<HTMLInputElement>)=>{
        setInpVal(e.target.value)
    }

    const add=()=>{
        if(inpVal!==''){
            let newObj={
                id: arr.length+1,
                message: inpVal
            }
            const newArr = [...arr, newObj];
            showEl(newArr)
            setInpVal("")
            localStorage.setItem("items",JSON.stringify(newArr))
            
        }else{
            alert('xanani doldur')
        }
    }
  return (
    <div className='inp_btn'>
        <input placeholder='Please enter items...' value={inpVal} onChange={inpHandler} type="text" />
        <button onClick={add}>add</button>
    </div>
  )
}

export default InpBtn