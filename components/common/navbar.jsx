"use client";

// import { Link, useLocation } from 'react-router';
import { Menu, X } from "lucide-react";
import { useState } from "react";
// import { AnnouncementBanner } from './AnnouncementBanner';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  //   const location = useLocation();

  const links = [
    { name: "Home", path: "#home" },
    { name: "Work", path: "#projects" },
    { name: "Services", path: "#services" },
    { name: "About", path: "#about" },
    { name: "Contact", path: "#contact" },
  ];

  const handleScroll = (e, hash) => {
    // if (location.pathname !== '/') {
    //   // If we are not on the home page, let the link naturally navigate to /#hash
    //   return;
    // }
    e.preventDefault();
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 backdrop-blur-3xl right-0 z-[1]">
      {/* <AnnouncementBanner /> */}
      <nav className="bg-bg-base/80 border-b border-border-subtle transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a
            href="/"
            className="text-xl font-bold tracking-tighter text-text-primary flex items-center gap-2"
          >
            <span className="w-8 h-8 rounded-full bg-text-primary text-bg-base hidden md:flex items-center justify-center text-sm">
              J
            </span>
            Junaid Parkar
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {links.map((link) => (
                <a
                  key={link.path}
                  //   href={location.pathname === '/' ? link.path : `/${link.path}`}
                  onClick={(e) => handleScroll(e, link.path)}
                  className="text-sm transition-colors text-text-secondary hover:text-text-primary"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="h-4 w-px bg-border-subtle"></div>
            <a
              href="/login"
              className="text-sm font-medium text-bg-base bg-accent-primary hover:bg-accent-hover px-4 py-2 rounded-full transition-colors"
            >
              Sign In
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-zinc-400 hover:text-zinc-100" onClick={() => {setIsOpen(!isOpen);}}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-bg-base border-b border-border-subtle px-6 py-4 flex flex-col gap-4 shadow-2xl">
            {links.map((link) => (
              <a
                key={link.path}
                //   href={location.pathname === '/' ? link.path : `/${link.path}`}
                onClick={(e) => handleScroll(e, link.path)}
                className="text-lg py-2 text-text-secondary hover:text-text-primary"
              >
                {link.name}
              </a>
            ))}
            <div className="h-px w-full bg-border-subtle my-2"></div>
            <a
              //   to="/admin"
              onClick={() => setIsOpen(false)}
              className="text-lg py-2 text-text-primary"
            >
              Admin Dashboard
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
