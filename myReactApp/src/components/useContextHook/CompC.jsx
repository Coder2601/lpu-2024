import React, { useContext } from 'react'
import { storeContext } from './StoreHouse'

const CompC = () => {
    const{msg} = useContext(storeContext);
  return (
    <div>{msg}</div>
  )
}

export default CompC