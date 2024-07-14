import React, { memo } from 'react'

const Child=({data}:any)=> {
    console.log("childComponent")
  return (
    <div>
    <input
    name='name'
  value={data.name}
    
    />
    
    </div>
  )
}
export default memo(Child)