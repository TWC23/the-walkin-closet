import { Route, Routes } from "react-router-dom";
import BulkOrder from "./BulkOrder/bulkOrder";
import Form from "./BulkOrder/Component/Form/Form";
import ThanksPage from "./BulkOrder/Component/Thanks/thanksPage";
// import { LandingPage } from "./LandingPage/LandingPage"
import { ComingSoonLandingPage } from "./LandingPage/ComingSoonLandingPage";
import Login from "./Auth/Login/login";
import SignUp from "./Auth/Signup/signup";
import ProductPage from "./product/ProductPage";
import Cart from "./Cart/cart";
import OrderForm from "./Varsities/Order-Form/OrderForm";
import checkout from "./Checkout/checkout";

const App = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" Component={LandingPage}></Route> */}
        <Route path="/thanks" Component={ThanksPage}></Route>
        <Route path="/order-form/:category" Component={Form}></Route>
        <Route path="/bulk-order" Component={BulkOrder}></Route>
        <Route path="/product-details" Component={ProductPage} />
        <Route path="/cart" Component={Cart} />
        <Route path="/varsity-form" Component={OrderForm} />
        <Route path="/checkout" Component={checkout} />

        {/* Temporay landing page */}
        <Route path="/" Component={ComingSoonLandingPage}></Route>
        <Route path="/login" Component={Login}></Route>
        <Route path="/signup" Component={SignUp}></Route>
      </Routes>
    </>
  );
};

export default App;
