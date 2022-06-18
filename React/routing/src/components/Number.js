import React from 'react'
import { useParams } from 'react-router-dom'

const Number = (props) => {
    const {param} = useParams();
  return (
    <div>
        The Number is: {param}.
    </div>
  )
}

export default Number