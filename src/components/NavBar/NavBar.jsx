
import { FaShoppingCart } from "react-icons/fa";


const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold text-4xl pb-2 bg-linear-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent ">
          
           DigiTools
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-10 px-1 text-lg">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
  <FaShoppingCart />

        <p className="font-semibold">Log In</p>

        <a className="btn bg-linear-to-r from-blue-500 to-blue-400 rounded-full text-white"> Get Started</a>
      </div>
    </div>
  );
};

export default NavBar;