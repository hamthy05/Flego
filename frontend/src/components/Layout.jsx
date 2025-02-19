import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mail, Phone, MapPin } from "lucide-react";
import Logo from "../assets/logo.png";

export default function Layout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/services", label: "Service" },
    { path: "/industries", label: "Industries" },
    { path: "/future-plans", label: "Future Plans" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <nav className="fixed top-0 z-20  w-[100%] mx-auto px-6 py-6 bg-white border-b-2 text-black">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img className="h-12 w-12 " src={Logo} alt="" />
            {/* <Code2 className="h-8 w-8 text-purple-400" /> */}
            <span className="font-flego text-2xl font-bold text-black">
              Flego Innovation
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors ${
                  isActive(link.path)
                    ? "font-bold"
                    : "text-black hover:font-bold"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-black p-2 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`
            md:hidden fixed inset-x-0 top-[80px] bg-black/95 backdrop-blur-lg transition-all duration-300 ease-in-out
            ${
              isMobileMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-full pointer-events-none"
            }
          `}
        >
          <div className="p-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 transition-colors ${
                  isActive(link.path)
                    ? "text-white font-semibold"
                    : "text-gray-300 hover:text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <main className="pb-20">{children}</main>

      {/* Footer */}
      <footer className="bg-[#DCDCDC] text-black py-10 ">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <img className="h-12 w-12 text-purple-400" src={Logo} alt="" />
                {/* <Code2 className="h-8 w-8 text-purple-400" /> */}
                <span className="text-2xl font-bold">Flego Innovation</span>
              </div>
              <p className="text-black/70">
                Our mission is your vision and your mission is to tell us your
                vision, so that what you envision will become our mission.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold  mb-6">Get in touch</h3>
              <div className="space-y-4 text-black/70">
                <a
                  href="mailto:info@flegoinnovation.com"
                  className="flex items-center hover:text-black"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  info@flegoinnovation.com
                </a>
                <a
                  href="tel:+94713006900"
                  className="flex items-center hover:text-black"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  +9471 300 6900
                </a>
                <p className="flex items-start hover:text-black">
                  <MapPin className="h-5 w-5 mr-2 mt-1" />
                  173/1 B, Kandy road, Mahara Kadawatha, Sri Lanka
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Opening hours</h3>
              <div className="space-y-4 text-black/70">
                <p>
                  Monday - Friday:
                  <br />
                  8:00 AM - 8:00 PM
                </p>
                <p>
                  Saturday:
                  <br />
                  9:00 AM - 8:00 PM
                </p>
                <p>
                  Sunday:
                  <br />
                  Close
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Useful Links</h3>
              <ul className="space-y-3">
                {[
                  { name: "Home", path: "/" },
                  { name: "About", path: "/about" },
                  { name: "Projects", path: "/projects" },
                  { name: "Customized Project", path: "/contact" },
                  { name: "Service", path: "/services" },
                  { name: "Industries", path: "/industries" },
                  { name: "Contact", path: "/contact" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-black/70 hover:text-black"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-black text-center text-black/70">
            <p>© Flego Innovation - Copyright 2024</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
