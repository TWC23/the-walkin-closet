
import { Route, Routes } from "react-router-dom"
import { LandingPage } from "./LandingPage/LandingPage"
import BulkOrder from "./BulkOrder/bulkOrder"
import Form from "./BulkOrder/Component/Form/Form"
import ThanksPage from "./BulkOrder/Component/Thanks/thanksPage"


const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" Component={LandingPage}></Route>
      <Route path="/thanks" Component={ThanksPage}></Route>
      <Route path="/order-form/:category" Component={Form}></Route>
      <Route path="/bulk-order" Component={BulkOrder}></Route>
      </Routes>

      
    </>
  )
}

export default App