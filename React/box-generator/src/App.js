import React,{useState }from'react';
import './App.css';
import Box from './components/Box';
import BoxGenerator from './components/BoxGenerator';

function App() {
  const[colors, setColors] = useState([]);
  const addColor = (e) =>{
    setColors(colors => [...colors, e])
  }

  return (
    <div className="App">
      <BoxGenerator newColor = {addColor} allColors = {colors}/>
      {colors}
      <Box colors = {colors}/>
    </div>
  );
}

export default App;
