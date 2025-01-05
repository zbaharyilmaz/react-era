import { Image } from 'react-bootstrap';
import logo from "../assets/nba-logo.png"


const Header = () => {

    return (
        <div className='header'>
            <Image src={logo}></Image>
            <h1 className=' fw-bold my-3 p-3'>NBA Legends</h1>
        </div>

    )
}

export default Header
