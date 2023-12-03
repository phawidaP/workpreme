import React from 'react'

const MyButton = (props) => {
    let C = {
        color: props.color,
        backgroundColor: props.bgcolor
    }
  return (
    <button className= {"btn btn-outline-"+props.color}>
        {props.text}
    </button>
  )
}

export default MyButton