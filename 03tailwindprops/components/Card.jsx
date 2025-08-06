import React from 'react'

const Card = (props) => {

    console.log(props.channel);
    
  return (
    <div>
      <h1>Title: {props.channel}</h1>
    </div>
  )
}

export default Card

