import React from 'react'
import { Tests } from '../types/Type'
import Card from './Card'


type Props={
    arr: Tests[],
    showEl: (x: Tests[]) => void
}


const Container:React.FC<Props> = ({arr,showEl}) => {
  return (
    <div className='container'>
        {
            arr.map((data,i)=>{
                return <Card key={i} data={data} arr={arr} showEl={showEl}/>
            }
                
            )
        }
    </div>
  )
}

export default Container