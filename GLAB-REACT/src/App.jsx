import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//components
function Header(){
  return(<h1>Simple React Appplication</h1>)
}
function Content(){
  return(<h1>This is my first React Application , Wish me luck.</h1>)
}
function Footer(){
  return (<h1>Created by Me, of course</h1>)
}
// APP is MAIN component
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   {/* // add our components to the App function */}
     <Header />
     <Content color="blue" text ="This is my first React Apllication"/>
     <Content color="red" text="Wish me Luck..."/>
     <Content color="green" text="I think I've got it!"/>
     <Footer/>
    </>
  )
}

export default App
