import React from 'react'
import image1 from '../assets/hero2.png'

function Bentogrid() {
  return (
<>
    <div className='grid grid-cols-1 md:grid-cols-4 w-80 h-80 bg-slate-50'>
        <div className=' row-start-1 row-end-3 col-start-1 col-end-2 border-2 h-full w-full overflow-hidden '> <img src={image1} alt="" className=' overflow-clip ' /> </div>
        <div className=' row-start-1 row-end-2 col-start-2 col-end-4 border-2 h-full w-full overflow-hidden '> <img src={image1} alt="" className=' overflow-clip ' />  </div>
        <div className=' row-start-1 row-end-2 col-start-4 col-end-5 border-2 h-full w-full overflow-hidden '> <img src={image1} alt="" className=' overflow-clip ' />  </div>
        <div className=' row-start-2 row-end-3 col-start-2 col-end-3 border-2 h-full w-full overflow-hidden '> <img src={image1} alt="" className=' overflow-clip ' />  </div>
        <div className=' row-start-2 row-end-3 col-start-3 col-end-5 border-2 h-full w-full overflow-hidden '> <img src={image1} alt="" className=' overflow-clip ' />  </div>
        <div className=' row-start-3 row-end-4 col-start-1 col-end-2 border-2 h-full w-full overflow-hidden '> <img src={image1} alt="" className=' overflow-clip ' />  </div>
        <div className=' row-start-3 row-end-4 col-start-2 col-end-5 border-2 h-full w-full overflow-hidden '> <img src={image1} alt="" className=' overflow-clip ' />  </div>

    </div>
</>
  )
}

export default Bentogrid