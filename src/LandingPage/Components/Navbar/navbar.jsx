import { useNavigate } from 'react-router-dom'
import {bag, Profile, favorite, search, logo, walkincloset, UpdatedLogo} from '../../../assets/index'
import './navbar.css'

const Navbar = () => {
    const navigate = useNavigate()

    return (
        <nav>
            <a href="/" onClick={() => navigate("/")}>
                <img src={UpdatedLogo} alt="TWC logo" className='logo-img' />
            </a>
            <ul>
                <li>
                    <a href="#">Men</a>
                </li>
                <li>
                    <a href="#">Women</a>
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
                <li>
                    <a href="/bulk-order" onClick={() => navigate("/bulk-order")}>
                        College Merch
                    </a>
                </li>
            </ul>


            {/* <ul>
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
            </ul> */}
        </nav>
    )
}

export default Navbar