import './App.css';
import TodoList from './components/TodoList';
import Counter from './components/Counter';
import NumberScroll from './components/NumberScroll'
import { useState } from 'react';
import Count from './components/Count';
import IsFive from './components/IsFire';


const App = () => {

  const [count1, setcount1] =useState(0)
  const [count2, setcount2] = useState(0)


  return (<>
    <TodoList />
    <Counter />
    <NumberScroll/>

    <div>
      <h5>Count1:</h5>
      <div>
        <button onClick={()=>{setcount1(count1+1)}}>+</button>
        <Count id={1} value={count1}/>
      </div>

      <h5>Count2:</h5>
      <div>
        <button onClick={()=>{setcount2(count2+1)}}>+</button>
        <Count id={2} value={count2}/>
        <IsFive value={count2}/>
      </div>

    </div>
  </>
  );
}

export default App;
