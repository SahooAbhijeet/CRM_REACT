import React from 'react'
import HomeLayout from '../layouts/HomeLayout'
import Card from './Card'
import { BsFillPencilFill } from 'react-icons/bs'

const Home = () => {
  return (
    <div>
      <HomeLayout>
        {/* <Card>
          <BsFillPencilFill className='inline mr-2' />
        </Card>

        <Card status={30} background='bg-yellow-300' borderColor='border-green-500 ' fontColor='text-black' dividerColor='bg-black'>
          <BsFillPencilFill className='inline mr-2' />
        </Card> */}

      </HomeLayout>
    </div>
  )
}

export default Home