
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoClose, IoMenu } from "react-icons/io5";


const NavBar = ({ carts }) => {

  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!open)

  }

  return (
    <div className="navbar">
      <div className="navbar-start gap-4">
        {
          open ? (
            <IoClose
              className="md:hidden cursor-pointer"
              onClick={toggleMenu}
              size={40}
              color="blue"
            />
          ) : (
            <IoMenu
              className="md:hidden cursor-pointer"
              onClick={toggleMenu}
              size={40}
              color="blue"
            />
          )
        }
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

      {/* for small device */}
      
      {
        open && (
          <div className="absolute top-16 left-0 w-40 bg-white shadow-md md:hidden z-50">
            <ul className="flex flex-col items-center gap-5 py-5 text-lg">
              <li><a>Products</a></li>
              <li><a>Features</a></li>
              <li><a>Pricing</a></li>
              <li><a>Testimonials</a></li>
              <li><a>FAQ</a></li>
            </ul>
          </div>
        )
      }








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