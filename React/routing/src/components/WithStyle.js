import React from 'react'
import { useParams } from 'react-router-dom'

const WithStyle = (props) => {
    const {word, textColor, bColor} = useParams();
  return (
    <div style={{color: textColor, backgroundColor: bColor}}>
        The Word is: {word}
    </div>
  )
}

export default WithStyle