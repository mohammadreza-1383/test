import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function Route2() {



  return (
    <div className='grid grid-cols-5 gap-6 p-8'>
<aside className='col-start-1 col-end-2 border border-gray-600 rounded-md p-4'>
<Sidebar/>

</aside>
<main className='col-start-2 col-end-6 border border-gray-600 rounded-md p-4'>
<Outlet/>
</main>

    </div>
  )
}

export default Route2

