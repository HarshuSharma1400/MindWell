import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#EAF4F4] text-[#2E2E2E] py-10 border-t border-[#DDEEEE]">
      <div className="container mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Logo / Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-[#457B9D]">
              MindWell
            </h2>
            <p className="text-sm text-[#6C757D] mt-1">
              Your gentle partner in mental wellness
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <Link
              to="/"
              className="text-[#2E2E2E] hover:text-[#457B9D] transition duration-300"
            >
              Home
            </Link>

            <Link
              to="/features"
              className="text-[#2E2E2E] hover:text-[#457B9D] transition duration-300"
            >
              Features
            </Link>

            <Link
              to="/benefits"
              className="text-[#2E2E2E] hover:text-[#457B9D] transition duration-300"
            >
              Benefits
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 text-[#6C757D] text-lg">
            <a
              href="https://facebook.com"
              className="hover:text-[#81B29A] transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>

            <a
              href="https://twitter.com"
              className="hover:text-[#81B29A] transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>

            <a
              href="https://instagram.com"
              className="hover:text-[#81B29A] transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://linkedin.com"
              className="hover:text-[#81B29A] transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;