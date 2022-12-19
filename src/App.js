import React from 'react';
import './App.css';
import ClassCounter1 from './components/useEffect/ClassCounter1';
import HookEffect1 from './components/useEffect/HookEffect1';
import ClassCounter from './components/useState/ClassCounter';
import HookCounter from './components/useState/HookCounter';
import HookCounter1 from './components/useState/HookCounter1';
import HookCounter2 from './components/useState/HookCounter2';
import HookCounter3 from './components/useState/HookCounter3';
import ComponentC from './components/useContext/ComponentC'
import ComponentB from './components/useContext/ComponentB';
import CounterReducer from './components/useReducer/CounterReducer';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      {/* <ClassCounter />
      <HookCounter />
      <HookCounter1 />
      <HookCounter2 />
      <HookCounter3 /> */}
      
      {/* useEffect */}
      {/* <ClassCounter1 />
      <HookEffect1 /> */}
      
      {/* useContext */}
      {/* <UserContext.Provider value={'Hakuna'}>
        <ChannelContext.Provider value={'Matata'}>
          <ComponentB/>
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      <CounterReducer />

    </div>
  );
}

export default App;
