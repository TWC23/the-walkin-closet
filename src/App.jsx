import { Route, Routes } from "react-router-dom";
import BulkOrder from "./BulkOrder/bulkOrder";
import Form from "./BulkOrder/Component/Form/Form";
import ThanksPage from "./BulkOrder/Component/Thanks/thanksPage";
import LandingPage from "./LandingPage/LandingPage";
import Login from "./Auth/Login/login";
import SignUp from "./Auth/Signup/signup";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" Component={LandingPage}></Route>
        <Route path="/login" Component={Login}></Route>
        <Route path="/signup" Component={SignUp}></Route>
        <Route path="/bulk-order" Component={BulkOrder}></Route>
        <Route path="/order-form/:category" Component={Form}></Route>
        <Route path="/thanks" Component={ThanksPage}></Route>
      </Routes>
    </>
  );
};

export default App;
