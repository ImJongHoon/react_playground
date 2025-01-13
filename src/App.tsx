import { Outlet } from "react-router-dom"
import { useRecoilValue } from "recoil"
import { isDarkAtom, isLoginAtom } from "./atom"

function App() {
  //여기서 로그인 여부 local에서 받아와야 함.
  const isDarkMode = useRecoilValue(isDarkAtom)
  const isLoggedIn = useRecoilValue(isLoginAtom)

  return (
    <>
      <Outlet context={ {isLoggedIn, isDarkMode} } />
    </>
  )
}

export default App
