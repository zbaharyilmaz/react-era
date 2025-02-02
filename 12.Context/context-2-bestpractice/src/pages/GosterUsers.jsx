import React from 'react'
import Baslik from '../component/Baslik'
import Isimler from '../component/Isimler'


const GosterUsers = () => {
  return (
    <div>
        <h1 style={{textAlign:"center",fontFamily:"Caveat"}}>MOTHLY STATISTICS</h1>
        <Baslik/>
        <Isimler/>
    </div>
  )
}

export default GosterUsers