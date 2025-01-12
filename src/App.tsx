import { Outlet } from "react-router-dom"
import Header from "./components/Header"

function App() {
  //여기서 로그인 여부 local에서 받아와야 함.
  let isLoggedIn = false
  let isDarkMode = false

  return (
    <>
      <Outlet context={ {isLoggedIn, isDarkMode} } />
    </>
  )
}

export default App
