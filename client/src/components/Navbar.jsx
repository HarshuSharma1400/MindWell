import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { logout, reset } from "../features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

import { IoClose } from "react-icons/io5";
import { BsList } from "react-icons/bs";

function Navbar() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [click, setClick] = useState(false);

  const onLogout = () => {
    toast.success("Logged out successfully 🌿");
    setTimeout(() => {
      dispatch(logout());
      dispatch(reset());
      navigate("/");
    }, 1500);
  };

  const handleClick = () => setClick(!click);

  return (
    <nav className="bg-white border-b border-[#E6EFF2] shadow-sm sticky top-0 z-50">
      <ToastContainer />

      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">

        {/* Logo */}
        <div
          className="text-[#457B9D] text-3xl md:text-4xl font-bold tracking-wide cursor-pointer transition duration-300 hover:text-[#81B29A]"
          onClick={() => navigate("/")}
        >
          MindWell
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-[#2E2E2E] font-medium">

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#457B9D]"
                  : "hover:text-[#81B29A] transition duration-300"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/features"
              className={({ isActive }) =>
                isActive
                  ? "text-[#457B9D]"
                  : "hover:text-[#81B29A] transition duration-300"
              }
            >
              Features
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/testimonials"
              className={({ isActive }) =>
                isActive
                  ? "text-[#457B9D]"
                  : "hover:text-[#81B29A] transition duration-300"
              }
            >
              Testimonials
            </NavLink>
          </li>

          {user && (
            <li>
              <button
                onClick={onLogout}
                className="bg-[#A8DADC] hover:bg-[#81B29A] px-4 py-2 rounded-full transition duration-300"
              >
                Logout
              </button>
            </li>
          )}
        </ul>

        {/* Mobile Icon */}
        <div className="md:hidden cursor-pointer" onClick={handleClick}>
          {click ? (
            <IoClose size={28} className="text-[#457B9D]" />
          ) : (
            <BsList size={28} className="text-[#457B9D]" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {click && (
        <div className="md:hidden bg-white border-t border-[#E6EFF2] px-6 py-4 space-y-4 text-[#2E2E2E] font-medium">

          <NavLink
            to="/"
            onClick={handleClick}
            className="block hover:text-[#81B29A]"
          >
            Home
          </NavLink>

          <NavLink
            to="/features"
            onClick={handleClick}
            className="block hover:text-[#81B29A]"
          >
            Features
          </NavLink>

          <NavLink
            to="/testimonials"
            onClick={handleClick}
            className="block hover:text-[#81B29A]"
          >
            Testimonials
          </NavLink>

          {user && (
            <button
              onClick={onLogout}
              className="w-full bg-[#A8DADC] hover:bg-[#81B29A] py-2 rounded-full transition duration-300"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;