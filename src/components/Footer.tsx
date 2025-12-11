import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">YouthHub</h3>
            <p className="text-gray-400 mb-4">
              Empowering Kenyan youth with practical skills, entrepreneurship training, and leadership development.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/impact" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Impact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/donate" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  123 Innovation Drive<br />
                  Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-500 flex-shrink-0" />
                <a href="tel:+254712345678" className="text-gray-400 hover:text-primary-500 transition-colors">
                  +254 (0) 712 345 678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-500 flex-shrink-0" />
                <a href="mailto:info@youthhub.ke" className="text-gray-400 hover:text-primary-500 transition-colors">
                  info@youthhub.ke
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Newsletter</h4>
              <p className="text-gray-400 mb-3 text-sm">
                Subscribe to get updates about our latest programs and events.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button
                  type="submit"
                  className="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>

            <div className="text-right md:text-left">
              <p className="text-gray-400 text-sm">
                Proud member of Kenya NGO Board<br />
                Certified Social Enterprise
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>
              Copyright © {currentYear} YouthHub. All rights reserved. | Empowering Youth, Building Futures
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
