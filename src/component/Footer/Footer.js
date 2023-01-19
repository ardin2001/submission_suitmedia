import './style.css'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

function Footer() {
    return(
        <footer className='footer'>
            <h5>Copyright © 2016. PT Company</h5>
            <div className="sosmed">
                <a href="https:facebook.com"><FaFacebookSquare /></a>
                <a href="https:facebook.com"><FaTwitter /></a>
            </div>
        </footer>
    )
}
export default Footer