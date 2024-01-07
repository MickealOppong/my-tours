import PageLinks from '../Util/PageLinks';
import Logo from './Logo';

const Navbar = () => {
  return <nav className='nav' id="home">
    <Logo />
    <PageLinks mainClass='navbar-links' />
  </nav>
}

export default Navbar;