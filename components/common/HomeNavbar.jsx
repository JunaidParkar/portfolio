"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // Added Next.js routing hook
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current route

  const links = [
    { name: "Home", path: "#home" },
    { name: "Work", path: "#projects" },
    { name: "Services", path: "#services" },
    { name: "About", path: "#about" },
    { name: "Contact", path: "#contact" },
  ];

  const handleScroll = (e, path) => {
    // If we are already on the home page, intercept the click and manually smooth scroll
    if (pathname === "/") {
      e.preventDefault();
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    // If we are on a different page (like /login), we do NOT prevent default, 
    // letting Next.js navigate to /#section naturally.
    
    setIsOpen(false); // Close mobile menu
  };

  return (
    <div className="fixed top-0 left-0 backdrop-blur-3xl right-0 z-[1]">
      <nav className="bg-bg-base/80 border-b border-border-subtle transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter text-text-primary flex items-center gap-2"
          >
            <span className="w-8 h-8 rounded-full bg-text-primary text-bg-base hidden md:flex items-center justify-center text-sm">
              J
            </span>
            Junaid Parkar
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {links.map((link) => (
                <Link
                  key={link.path}
                  href={`/${link.path}`}
                  onClick={(e) => handleScroll(e, link.path)}
                  className="text-sm transition-colors text-text-secondary hover:text-text-primary"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="h-4 w-px bg-border-subtle"></div>
            
            <Link
              href="/login"
              className="text-sm font-medium text-bg-base bg-accent-primary hover:bg-accent-hover px-4 py-2 rounded-full transition-colors"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-zinc-400 hover:text-zinc-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-bg-base border-b border-border-subtle px-6 py-4 flex flex-col gap-4 shadow-2xl">
            {links.map((link) => (
              <Link
                key={link.path}
                href={`/${link.path}`}
                onClick={(e) => handleScroll(e, link.path)}
                className="text-lg py-2 text-text-secondary hover:text-text-primary"
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px w-full bg-border-subtle my-2"></div>
            <Link
              href="/admin"
              onClick={() => setIsOpen(false)}
              className="text-lg py-2 text-text-primary"
            >
              Admin Dashboard
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;