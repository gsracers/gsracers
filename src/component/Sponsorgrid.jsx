import React from 'react'

function sponsorgrid(props) {
  return (
    <>
     <div className="py-10">
              <h1 className="md:text-4xl text-2xl text-blue-300 font-bold text-center font-proracing">
               {props.category}
              </h1>
              <hr className="bg-blue-900 md:w-1/6 w-1/2 mx-auto border-none my-2 h-1" />

              <div>
                <div className='flex flex-wrap justify-center gap-10'>
                    {props.image.map((item, index) => (
                        <div key={index} className=" h-72 w-72 py-5">
                        <img src={item} alt={props.category} />
                        </div>
                    ))}
                </div>
              </div>
            </div>
    </>
  )
}

export default sponsorgrid