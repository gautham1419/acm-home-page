import { FaInstagram, FaFacebook, FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import logo from "../assets/ACM-logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav  className="position-fixed bottom-0 w-full flex items-center justify-between py-6 bg-gray-800 text-white">
      <div  className="flex items-center">
        {/* Logo */}
        <a href="#">
          <img className="mx-0.2 w-19 h-12 rounded-lg" src={logo} alt="logo" />
        </a>

        {/* Social Icons */}
        <div id="contact" className="ml-20">
          <div className="mt-2 flex items-center gap-8 text-5xl">
            <a href="https://www.facebook.com/AssociationForComputingMachinery/" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/groups/36836/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/theofficialacm/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://x.com/theofficialacm" target="_blank" rel="noopener noreferrer">
              <FaSquareXTwitter />
            </a>
          </div>
        </div>

        {/* Contact Us, Mission, and About Us Section */}
        <div id="contact" className="ml-40 flex items-center gap-8">
          <div id="contact">
            <h1>Contact Us:</h1>
            {/* Email link with mailto for redirection to mail client */}
            <a href="mailto:acm@tkmce.ac.in" className="hover:underline">
              acm@tkmce.ac.in
            </a>
          </div>

          <Link
          to="vision" // Matches the id of the section
          smooth={true}
          duration={500}
          className="cursor-pointer hover:underline text-lg"
        >
          Mission
        </Link>
        <Link
          to="vision" // Matches the id of the section
          smooth={true}
          duration={500}
          className="cursor-pointer hover:underline text-lg"
        >
          Vision
        </Link>
          <Link
          to="about" // Matches the id of the section
          smooth={true}
          duration={500}
          className="cursor-pointer hover:underline text-lg"
        >
          About Us
        </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
