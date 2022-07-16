import React from 'react'

const NewWindow = () => {

    function open(){
        window.open('/payment','payment', 'width=800,height=500')
    }
  return (
    <button onClick={open}>NewWindow</button>
  )
}

export default NewWindow