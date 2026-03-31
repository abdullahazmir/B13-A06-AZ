
import { FaShoppingCart } from "react-icons/fa";


const NavBar = ({ carts }) => {
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
        <div
          className="relative"
          aria-label={`Cart (${carts.length})`}
        >
          <FaShoppingCart size={25} />

          <span className="absolute -top-4 -right-4 bg-blue-500 text-white  px-2 py-0.5 rounded-full">
            {carts.length}
          </span>
        </div>

        <p className="font-semibold">Log In</p>

        <a className="btn bg-linear-to-r from-blue-500 to-blue-400 rounded-full text-white"> Get Started</a>
      </div>
    </div>
  );
};

export default NavBar;