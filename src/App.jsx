
import { Route, Routes } from "react-router-dom"
import { LandingPage } from "./LandingPage/LandingPage"


const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" Component={LandingPage}></Route>
      </Routes>

      
    </>
  )
}

export default App