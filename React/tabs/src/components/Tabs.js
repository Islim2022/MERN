import React,{useState} from 'react'

const Tabs = (props) => {
    const [label, setLabel] = useState("");
    
    const handleClick=(e,index)=>{
        setLabel(props.tabs[index])
        props.content(props.tabs[index])


    }
    const active={
            fontFamily: 'cursive',
            color: 'Red',
        };
    
    return (
        <div>
            {props.tabs.map((tab,index)=>{
                if (tab===label)
                    return <label key={index} onClick={(e)=>handleClick(e,index)} style={active}> {tab} </label>
                    else
                    return <label key={index} onClick={(e)=>handleClick(e,index)}> {tab} </label>
            })}
            
        </div>
    )
}

export default Tabs