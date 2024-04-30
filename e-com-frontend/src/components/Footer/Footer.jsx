import { Link } from 'react-router-dom'
import IMG1 from './../../assets/logo.png'

const Footer = () => {
  return (
    <>
     <footer>
        <div className="footer_container">
            <div className="footer_column">
            <Link to='/'><img className="ecom_home" src={IMG1} alt="UgCaked Home"/></Link>
            </div>
            <div className="footer_column">
            <Link to='/'><img className="ecom_home" src={IMG1} alt="UgCaked Home"/></Link>
            </div>

            
            <div className="footer_column">
            <Link to='/'><img className="ecom_home" src={IMG1} alt="UgCaked Home"/></Link>
            </div>

            <div className="footer_column">
            <Link to='/'><img className="ecom_home" src={IMG1} alt="UgCaked Home"/></Link>
            </div>
            <div className="copyright">
            © 2023 www.UgCakes.com. All rights reserved.
        </div>
        </div>
       

        
    </footer>
    </>
  )
}

export default Footer