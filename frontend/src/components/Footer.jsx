import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaWhatsapp
} from "react-icons/fa"

import { FaXTwitter } from "react-icons/fa6"

function Footer() {
  return (
    <footer
      className="
      w-full
     bg-blue-400/20 dark:bg-gray-900/90
      backdrop-blur-md
      border-t border-gray-200 dark:border-gray-700
      text-gray-700 dark:text-gray-300
      md:fixed md:bottom-0 md:left-0
      "
    >
      
      {/* MOBILE LAYOUT */}
      <div className="md:hidden text-center py-6 space-y-4">

        <p className="text-sm">
          Built with React + Tailwind CSS
        </p>

        <div className="flex justify-center gap-6 text-xl">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaXTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaWhatsapp /></a>
        </div>

        <p className="text-sm">
          © 2026 Productivity Assistant ~ Subramanya V
        </p>

      </div>


      {/* DESKTOP LAYOUT */}
      <div className="hidden md:flex justify-between items-center px-10 py-4">

        <p className="text-sm">
          © 2026 Productivity Assistant ~ Subramanya V | Built with React + Tailwind CSS
        </p>

        <div className="flex gap-6 text-lg">
        <a href="#" className="hover:text-blue-500 transition"><FaFacebook /></a>
        <a href="#" className="hover:text-blue-500 transition"><FaXTwitter /></a>
        <a href="#" className="hover:text-blue-500 transition"><FaInstagram /></a>
        <a href="#" className="hover:text-blue-500 transition"><FaYoutube /></a>
        <a href="#" className="hover:text-blue-500 transition"><FaLinkedin /></a>
        <a href="#" className="hover:text-blue-500 transition"><FaWhatsapp /></a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;