import { Link } from 'react-router-dom';

import { HiOutlineShoppingBag } from 'react-icons/hi';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <span>BOOK STORE</span>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/books'}>Livros</Link>
        </li>
        <li className="cart"> 
          <Link to={'/cart'}> 
            <span>20</span>
            <HiOutlineShoppingBag size={30} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
