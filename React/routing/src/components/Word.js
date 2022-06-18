import React from 'react'
import { useParams } from 'react-router-dom'

const Word = (props) => {
    const {param} = useParams();
  return (
    <div>
        The Word is: {param}.
    </div>
  )
}

export default Word