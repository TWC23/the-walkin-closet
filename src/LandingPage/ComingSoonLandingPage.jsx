import Navbar from "./Components/Navbar/navbar"
import { ComingSoonBlur } from '../assets/index'
import './ComingSoonLandingPage.css'

export const ComingSoonLandingPage = () => {
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>

      <a className="coming-soon">
        <img src={ComingSoonBlur} alt="Coming Soon" />
      </a>
    </>
  )
}
{/* <img style={{ width: '100%', height: '85%'}} src={ComingSoonBlur} alt="Coming Soon" /> */}