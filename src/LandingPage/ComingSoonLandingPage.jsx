import Navbar from "./Components/Navbar/navbar"
import Footer from "./Components/Footer/footer"
import ComingImage from "./Components/Image display/ComingImage"
import './ComingSoonLandingPage.css'

export const ComingSoonLandingPage = () => {
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>

      {/* <div className="coming-soon">
        <img src={ComingSoonBlur} alt="Coming Soon" />
      </div> */}
      <div className="coming-soon">
        <ComingImage />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  )
}
{/* <img style={{ width: '100%', height: '85%'}} src={ComingSoonBlur} alt="Coming Soon" /> */}