import React from 'react'

const Box = (props) => {
  return (
    <div>
                <div >
            { props.colors.map( (box, b) => 
                <p  key={ b } style={{width:'250px',height:'250px',margin:'20px',color:box,backgroundColor:box}} >{ box }</p> ) }
        </div>
    </div>
  )
}

export default Box