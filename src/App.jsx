import './App.css';
import TodoList from './components/TodoList';
import Counter from './components/Counter';
import NumberScroll from './components/NumberScroll'
import { useState } from 'react';
import Count from './components/Count';
import IsFive from './components/IsFire';
import Post from './components/Post';
import AboutMe from './components/Ex1Reflect';
import Ex2Rflect from './components/Ex2Reflect';
import { Ex3Reflect } from './components/Ex3Reflect';
import Ex4Reflect from './components/Ex4Relect';
import New1 from './components/New/New1';
import { New2 } from './components/New/New2';
import { New3 } from './components/New/New3';
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react"


const App = () => {

  const theme = extendTheme({
    fontSizes: {
      lg: "18px",
    },
    colors: {
      gray: {
        100: "red",
        200: "#f7f7f7",
      },
    },
  })

  const [count1, setcount1] = useState(0)
  const [count2, setcount2] = useState(0)


  return (<>

    < ChakraProvider theme={theme}>
      <Box mt={5} mb={100}> 
        <New1 />
        <New2 />
        <New3 />
      </Box>

      <Ex4Reflect />
      <Ex3Reflect />
      <Ex2Rflect />
      <AboutMe />
      <TodoList />
      <Counter />
      <NumberScroll />

      <div>
        <h5>Count1:</h5>
        <div>
          <button onClick={() => { setcount1(count1 + 1) }}>+</button>
          <Count id={1} value={count1} />
        </div>

        <h5>Count2:</h5>
        <div>
          <button onClick={() => { setcount2(count2 + 1) }}>+</button>
          <Count id={2} value={count2} />
          <IsFive value={count2} />
        </div>

      </div>

      <Post />
    </ChakraProvider>
  </>
  );
}

export default App;
