import React from "react";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";

function ProductPage() {
  return (
    <>
      <Navbar />
      <product-page>
        <details-section>
          <prod-images></prod-images>
          <prod-details></prod-details>
        </details-section>
        <prod-recommendations></prod-recommendations>
        <prod-reviews></prod-reviews>
      </product-page>
      <Footer/>
    </>
  );
}

export default ProductPage;
