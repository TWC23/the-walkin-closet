
import { Route, Routes } from "react-router-dom"
// import { LandingPage } from "./LandingPage/LandingPage"
import BulkOrder from "./BulkOrder/bulkOrder"
import Form from "./BulkOrder/Component/Form/Form"
import ThanksPage from "./BulkOrder/Component/Thanks/thanksPage"
// import { LandingPage } from "./LandingPage/LandingPage"
import { ComingSoonLandingPage } from "./LandingPage/ComingSoonLandingPage"


const App = () => {
  return (
    <>
    <Routes>
      {/* <Route path="/" Component={LandingPage}></Route> */}
      <Route path="/thanks" Component={ThanksPage}></Route>
      <Route path="/order-form/:category" Component={Form}></Route>
      <Route path="/bulk-order" Component={BulkOrder}></Route>
      <Route path="/" Component={ComingSoonLandingPage}></Route>
      </Routes>

      
    </>
  )
}

export default App