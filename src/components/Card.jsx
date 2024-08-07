import React from 'react'

const Card = ({children, fontColor="text-white", dividerColor="bg-gray-500", borderColor="border-error",background="bg-primary", titleText="Card", status=50,quantity=50}) => {
  return (
    <div className={`border-b-8 ${borderColor} ${background} w-64 h-44 rounded-md flex flex-col justify-center items-center py-2`}>
      <div className='text-primary-content text-2xl </mb-2'>
      {children} <span>{titleText}</span>
      </div>
      <div className={`divider ${dividerColor} h-0.5 mx-4 rounded-sm`}></div>
      <div className='flex justify-around gap-4 items-center mt-2'>
        <div className={`text-7xl ${fontColor}`}>
          {quantity}
        </div>
        <div className={`radial-progress ${fontColor}`} style={{"--value": status}}>{status}%</div>
      </div>
    </div>
  )
}

export default Card

// 