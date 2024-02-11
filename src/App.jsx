
import { Route, Routes } from "react-router-dom"
// import { LandingPage } from "./LandingPage/LandingPage"
import { ComingSoonLandingPage } from "./LandingPage/ComingSoonLandingPage"


const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" Component={ComingSoonLandingPage}></Route>
      </Routes>

      
    </>
  )
}

export default App