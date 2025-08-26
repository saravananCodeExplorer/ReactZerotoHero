import React from 'react'
import './App.css'
import Counter from './Components/1.CounterApp/Counter'
import UserList from './Components/2.UserCardList/UserList'
import ToggleTheme from './Components/3.ToggleTheme/ToggleTheme'
import FormEvent from './Components/4.Events/FormEvent'

function App() {


  return (
    <>
    <h1>hello All</h1>
       <Counter/>
       <hr />
       <UserList/>
       <hr />
       <ToggleTheme/>
       <hr />
       <FormEvent/>
       <hr />
    </>
  )
}

export default App
