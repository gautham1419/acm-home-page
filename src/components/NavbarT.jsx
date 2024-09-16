import { FaInstagram, FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom"; // For route navigation
import { Link } from "react-scroll"; // For scrolling within the same page
import logo from "../assets/ACM-logo.png";

const NavbarT = () => {
  return (
    <nav className="mb-10 flex items-center justify-between py-4 bg-gray-800">
      {/* Left Section: Logo and Title */}
      <div className="flex flex-shrink-0 items-center">
        <a href="/">
          <img className="mx-0.2 w-16 h-10 rounded-lg" src={logo} alt="logo" />
        </a>
        <div className="text-lg text-white ml-2">
          Association For <br />
          Computing Machinery
        </div>
      </div>

      {/* Middle Section: Navigation Links */}
      <div className="m-6 flex items-center justify-center gap-6 text-xl text-white">
        {/* Links to different routes */}
        <NavLink
          to="/"
          exact
          className="hover:text-blue-400 transition duration-300"
          activeClassName="text-blue-500"
        >
          Home
        </NavLink>
        <NavLink
          to="/execom"
          className="hover:text-blue-400 transition duration-300"
          activeClassName="text-blue-500"
        >
          Execom
        </NavLink>
        <NavLink
          to="/events"
          className="hover:text-blue-400 transition duration-300"
          activeClassName="text-blue-500"
        >
          Events
        </NavLink>

        {/* Scroll to About section on the home page */}
        <Link
          to="about" // Matches the id of the section
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-blue-400 transition duration-300"
        >
          About
        </Link>

        {/* Link to Contact Us page */}
        <Link
          to="contact" // Matches the id of the section
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-blue-400 transition duration-300"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default NavbarT;
