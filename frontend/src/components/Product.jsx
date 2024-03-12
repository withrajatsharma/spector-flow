import React from 'react'

const Product = ({data}) => {
  return (
    <div className={` duration-200 py-7 delay-100 group hover:py-14 w-full group items-center flex justify-between text-diff_white pl-10  
    hover:bg-gradient-to-r ${data.clr}`}>
        <img src={data.img} className='h-[24rem] w-[30rem] pointer-events-none rounded-xl group-hover:opacity-100 group-hover:block duration-100 fixed top-40 opacity-0 hidden left-[30rem]'  alt="" />
        <h1 className='text-5xl font-medium'>{data.title}</h1>
        <div className=' w-1/3 pr-20'>
            <p className='mb-4 text-lg'>{data.desc}</p>
        </div>
    </div>
  )
}

export default Product