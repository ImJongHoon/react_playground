import { Outlet } from "react-router-dom"
import Header from "./components/Header"

function Root() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Root</h1>
      <Header />
      <Outlet />
    </>
  )
}

export default Root
