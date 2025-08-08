"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
  const [activeLink, setActiveLink] = useState("Find Doctors");
  const [showDropdown, setShowDropdown] = useState({
    corporate: false,
    security: false,
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown({
          corporate: false,
          security: false,
        });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (dropdown: keyof typeof showDropdown) => {
    setShowDropdown((prev) => ({
      corporate: false,
      security: false,
      [dropdown]: !prev[dropdown],
    }));
  };

  const closeAllDropdowns = () => {
    setShowDropdown({
      corporate: false,
      security: false,
    });
  };

  return (
    <header className="w-full bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3" ref={dropdownRef}>
        <div className="hidden xl:flex justify-between items-center">
          <Link
            href="/"
            className="text-3xl font-extrabold text-[#002872] shrink-0 flex items-center"
          >
            <span className="text-blue-600">.</span>
            <span className="mx-1">practo</span>
            <span className="text-blue-600">.</span>
          </Link>

          <nav className="flex gap-8 items-center">
            <Link
              href="#"
              className={`px-3 py-2 font-bold relative ${
                activeLink === "Find Doctors"
                  ? "text-blue-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600"
                  : "text-gray-800 hover:text-blue-600"
              }`}
              onClick={() => {
                setActiveLink("Find Doctors");
                closeAllDropdowns();
              }}
            >
              Find Doctors
            </Link>
            <Link
              href="#"
              className={`px-3 py-2 font-bold relative ${
                activeLink === "Video Consult"
                  ? "text-blue-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600"
                  : "text-gray-800 hover:text-blue-600"
              }`}
              onClick={() => {
                setActiveLink("Video Consult");
                closeAllDropdowns();
              }}
            >
              Video Consult
            </Link>
            <Link
              href="#"
              className={`px-3 py-2 font-bold relative ${
                activeLink === "Surgeries"
                  ? "text-blue-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600"
                  : "text-gray-800 hover:text-blue-600"
              }`}
              onClick={() => {
                setActiveLink("Surgeries");
                closeAllDropdowns();
              }}
            >
              Surgeries
            </Link>
          </nav>

          <div className="flex items-center gap-8">
            <div className="relative">
              <button
                className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-normal group"
                onClick={() => toggleDropdown("corporate")}
              >
                <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full mr-1">
                  NEW
                </span>
                For Corporates
                <ChevronDown
                  size={14}
                  className="group-hover:rotate-180 transition-transform"
                />
              </button>
              {showDropdown.corporate && (
                <div className="absolute right-0 top-8 bg-white border shadow-sm p-2 w-48 text-sm z-10">
                  <Link href="#" className="block hover:bg-gray-100 px-3 py-2">
                    Corporate Solutions
                  </Link>
                  <Link href="#" className="block hover:bg-gray-100 px-3 py-2">
                    Employee Health
                  </Link>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-normal group"
                onClick={() => toggleDropdown("security")}
              >
                Security & help
                <ChevronDown
                  size={14}
                  className="group-hover:rotate-180 transition-transform"
                />
              </button>
              {showDropdown.security && (
                <div className="absolute right-0 top-8 bg-white border shadow-sm p-2 w-48 text-sm z-10">
                  <Link href="#" className="block hover:bg-gray-100 px-3 py-2">
                    Help Center
                  </Link>
                  <Link href="#" className="block hover:bg-gray-100 px-3 py-2">
                    Privacy Policy
                  </Link>
                </div>
              )}
            </div>

            <div className="flex items-center ml-4 border">
              <Link
                href="#"
                className="text-gray-500 hover:text-blue-600 font-medium text-sm px-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
              <span className="text-gray-300">/</span>
              <Link
                href="#"
                className="text-gray-500 hover:text-blue-600 font-medium text-sm px-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Signup
              </Link>
            </div>
          </div>
        </div>

        <div className="xl:hidden flex justify-between items-center">
          <Link
            href="/"
            className="text-3xl font-extrabold text-[#002872] flex items-center"
          >
            <span className="text-blue-600">.</span>
            <span className="mx-1">practo</span>
            <span className="text-blue-600">.</span>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-blue-600" />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="xl:hidden bg-white py-2 border-t">
            <nav className="flex flex-col">
              <Link
                href="#"
                className={`px-4 py-3 text-xl font-bold ${
                  activeLink === "Find Doctors"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-800"
                }`}
                onClick={() => {
                  setActiveLink("Find Doctors");
                  setMobileMenuOpen(false);
                }}
              >
                Find Doctors
              </Link>
              <Link
                href="#"
                className={`px-4 py-3 text-xl font-bold ${
                  activeLink === "Video Consult"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-800"
                }`}
                onClick={() => {
                  setActiveLink("Video Consult");
                  setMobileMenuOpen(false);
                }}
              >
                Video Consult
              </Link>
              <Link
                href="#"
                className={`px-4 py-3 text-xl font-bold ${
                  activeLink === "Surgeries"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-800"
                }`}
                onClick={() => {
                  setActiveLink("Surgeries");
                  setMobileMenuOpen(false);
                }}
              >
                Surgeries
              </Link>

              <div className="border-t border-gray-200 my-1"></div>

              <button
                className={`px-4 py-3 text-lg text-left flex justify-between items-center font-normal ${
                  showDropdown.corporate ? "text-blue-600" : "text-gray-700"
                }`}
                onClick={() => toggleDropdown("corporate")}
              >
                <span className="flex items-center">
                  <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full mr-2">
                    NEW
                  </span>
                  For Corporates
                </span>
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    showDropdown.corporate ? "rotate-180" : ""
                  }`}
                />
              </button>
              {showDropdown.corporate && (
                <div className="pl-6 bg-gray-50">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:text-blue-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Corporate Solutions
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:text-blue-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Employee Health
                  </Link>
                </div>
              )}

              <button
                className={`px-4 py-3 text-lg text-left flex justify-between items-center font-normal ${
                  showDropdown.security ? "text-blue-600" : "text-gray-700"
                }`}
                onClick={() => toggleDropdown("security")}
              >
                Security & help
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    showDropdown.security ? "rotate-180" : ""
                  }`}
                />
              </button>
              {showDropdown.security && (
                <div className="pl-6 bg-gray-50">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:text-blue-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Help Center
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:text-blue-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Privacy Policy
                  </Link>
                </div>
              )}

              <div className="border-t border-gray-200 my-1"></div>

              <div className="flex items-center justify-center px-4 py-3">
                <Link
                  href="#"
                  className="text-gray-500 hover:text-blue-600 font-medium text-sm px-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <span className="text-gray-300">/</span>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-blue-600 font-medium text-sm px-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Signup
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
