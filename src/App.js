import logo from './logo.svg';
import './App.css';

import React from 'react';
import HookCounter from './Components/HookCounter';
import HookCounterTwo from './Components/HookCounterTwo';
import HookCounterThree from './Components/HookCounterThree';
import HookCounterFour from './Components/HookCounterFour';
import HookEffectOne from './Components/HookEffectOne';
import HookMouse from './Components/HookMouse';
import MouseContainer from './Components/MouseContainer';
import IntervalHookCounter from './Components/IntervalHookCounter';
import DataFetching from './Components/DataFetching';
import ComponentC from './Components/ComponentC';
import ComponentF from './Components/ComponentF';
import ComponentE from './Components/ComponentE';
import ComponentG from './Components/ComponentG';
import CounterOne from './Components/CounterOne';
import CounterOneOwn from './CounterOneOwn';
import PropsPract from './Components/PropsPract';
import HOC from './Components/PropsProxy';
import RealCounter from './Components/RealCounter';
import ComponentTest from './ComponentTest';
import Demo from './Components/Demo';
 export const UserContext = React.createContext()
export const SomeContext = React.createContext()
export const XtraContext = React.createContext()
export const testContext = React.createContext()
function App() {
 
  return ( 
    <div className="App">

      {/* <HookCounter/> */}
       <HookCounterTwo/>
       <HookCounterThree/>
       <HookCounterFour/>
       <HookEffectOne/>
       {/* <HookMouse/> */}
       <MouseContainer/>
       <IntervalHookCounter/>
       <DataFetching/>
       <UserContext.Provider value={"randy"}>
        <SomeContext.Provider value={"sethrollins"}>
          <XtraContext.Provider value ={"johncena"}>
            <testContext.Provider value = {"dean ambrose"}>
        <ComponentF/>
        <ComponentC/>
        <ComponentE/>
        <ComponentG/>
        <ComponentTest/>
        </testContext.Provider>
        </XtraContext.Provider>
        </SomeContext.Provider>
       </UserContext.Provider>
       <CounterOne/>
       <CounterOneOwn/>
       <PropsPract/>
       <RealCounter/>
       <Demo/>
       {/* <HOC/> */}
   </div>
  );
  
}   
// let x=20;
// let y =35;
// (function (num1,num2){
 
  
//   console.log(num1+num2)
// })(x,y)

// (()=>{

//   let a=10;
//   let b=20;
//   let add = a+b;
//   console.log(add)

// })();
export default App;
