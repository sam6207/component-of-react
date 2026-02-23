

import './App.css'
import UserContextProvider from './context/UserContextProvider'
function App (){

  return (
    <UserContextProvider>
      <h1>hello coder boos</h1>
      <login />
      <profile />
    </UserContextProvider>
  )
}

export default App
