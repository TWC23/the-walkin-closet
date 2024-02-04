import {bag, Profile, favorite, search, logo, walkincloset} from '../../../assets/index'
import './navbar.css'


const Navbar = () => {
  return (
    <nav>
        
        <a href="#" className="logo">
        <img src={walkincloset}  className='logo-img1'/>
            <img src={logo} className='logo-img2' />
            </a>

       
        

        <ul>

            <li>
                <a href="#">Men</a>
            </li>
            <li>
                <a href="#">Women</a>
            </li>
            <li>
                <a href="#">Wardrobe collections</a>
            </li>
            <li>
                <a href="#">Blog</a>
            </li>
            <li>
                <a href="#">Originals</a>
            </li>
            <li>
                <a href="#">Boutique Boulevard</a>
            </li>
            <li>
                <a href="#">Rentals</a>
            </li>
        </ul>

        <ul>
            <li>
                <img src={search} alt="" />
</li>
            
                <li>
                <img src={favorite} alt="" />


                </li>
                <li>
                <img src={bag} alt="" />
                </li>
                <li>
            <img src={Profile} alt="" />

            </li>
        </ul>
        
    </nav>
  )
}

export default Navbar