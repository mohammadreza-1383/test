import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='py-4 bg-stone-400 flex justify-center'>
        <nav className='flex gap-4'>
<Link to={"/route-1"}>
Route 1
</Link>
<Link to={"/route-2"}>Route 2
</Link>
<Link to={"/route-3"}>Route 3
</Link>
</nav>
</header>
)
}

export default Header