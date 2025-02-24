import React, { useContext } from 'react'
import InputContext from './Component/context/inputContext'

function Li() {
    const contextdata=useContext(InputContext)
  return (
    <li>
{contextdata}
    </li>
  )
}

export default Li