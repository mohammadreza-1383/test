import React from 'react'
import About from './About'
import InputContext from './Component/context/inputContext.js'
function Route1() {
  return (
    <InputContext.Provider value={"target"}>
    

    <About/>
    </InputContext.Provider>
  )
}

export default Route1