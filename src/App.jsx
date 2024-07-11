import React from 'react';
import './App.css';

import Input from './component/Input';
import Output from './component/Output';

function App() {
  const [getNum,setGetNum]=React.useState(0);
  const [result,setResult]=React.useState(0);
  return (
    <div>  
      <Input setGetNum={setGetNum} getNum={getNum} setResult={setResult} result={result}/>
        <Output result={result}/>
        </div>
  );
}

export default App;