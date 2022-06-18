import './App.css';
import Tabs from './components/Tabs';
import {useState} from 'react';
import Content from './components/Content';

function App() {
  const tabs = ["Tab 1 "," Tab 2"," Tab 3",]
  const [content,setContent] = useState("")

  return (
    <div className="App">
      <Tabs tabs={tabs} content={setContent}/>
      <Content text={content}/>
    </div>
    

  );
}

export default App;

