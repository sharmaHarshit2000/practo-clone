"use client";

import Link from "next/link";
import { MessageSquare, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-50 border-t border-blue-100 py-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-blue-800 mb-4">
              Practo Clone
            </h3>
            <p className="text-blue-600 mb-4">
              Your trusted healthcare partner connecting patients with doctors.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-blue-400 hover:text-blue-600 transition-colors"
              >
                <MessageSquare size={20} />
              </a>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-500 transition-colors"
              >
                <Mail size={20} />
              </a>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-500 transition-colors"
              >
                <Phone size={20} />
              </a>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-700 transition-colors"
              >
                <MapPin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-blue-800 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/doctors"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Find Doctors
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-blue-800 mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Video Consultation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Medicine Delivery
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Lab Tests
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Health Articles
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-blue-800 mb-4">
              Contact Us
            </h3>
            <address className="not-italic text-blue-600 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <p>123 Healthcare Street, Bangalore, India 560001</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <p>info@practoclone.com</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <p>+91 9876543210</p>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-100 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-blue-600 mb-2 md:mb-0">
              &copy; {currentYear} Practo Clone. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link
                href="#"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
