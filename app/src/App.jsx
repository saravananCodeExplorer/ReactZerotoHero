import React from 'react'
import './App.css'
import Counter from './Components/1.CounterApp/Counter'
import UserList from './Components/2.UserCardList/UserList'
import ToggleTheme from './Components/3.ToggleTheme/ToggleTheme'
import FormEvent from './Components/4.Events/FormEvent'
import Profile from './Components/5.Styling in React/1.CSS Modules/Profile'
import InlineStyleDemo from './Components/5.Styling in React/2. Inline Styles/InlineStyleDemo'
import ProfilePage from './Components/5.Styling in React/3. Styled-components/ProfilePage'
import DynamicBtn from './Components/5.Styling in React/1.CSS Modules/4.DynamicStylingwithProps/DynamicBtn'
import CountdownTimer from './Components/6.Hooks/practice/CountdownTimer'
import { ThemeProvider } from './Components/6.Hooks/practice/ThemeContext'
import ThemeSwitcher from './Components/6.Hooks/practice/ThemeSwitcher'




function App() {


  return (
    <>
    <h1 style={{textAlign:"center"}}>hello All</h1>
       <Counter/>
       <hr />
       <UserList/>
       <hr />
       <ToggleTheme/>
       <hr />
       <FormEvent/>
       <hr />
       <Profile/>
       <hr />
       <InlineStyleDemo/>
       <hr />
       <ProfilePage/>
       <hr />
       <DynamicBtn/>
       <hr />
       <CountdownTimer/>
       <hr></hr>
     <ThemeProvider>
      <ThemeSwitcher/>
     </ThemeProvider>

      

    </>
  )
}

export default App
