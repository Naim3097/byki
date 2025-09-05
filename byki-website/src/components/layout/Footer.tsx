import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* Placeholder for BYKI Logo */}
              <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-xs">LOGO</span>
              </div>
              <span className="text-xl font-bold">BYKI</span>
            </div>
            <p className="text-gray-300 text-sm">
              Malaysia&apos;s most advanced automotive diagnostic platform. Professional diagnostics made accessible for every Malaysian driver.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-byki-green transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-byki-green transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-byki-green transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/app" className="text-gray-300 hover:text-byki-green transition-colors">
                  BYKI App
                </Link>
              </li>
              <li>
                <Link href="/device" className="text-gray-300 hover:text-byki-green transition-colors">
                  SXAN Device (RM59)
                </Link>
              </li>
              <li>
                <Link href="/workshops" className="text-gray-300 hover:text-byki-green transition-colors">
                  Workshop Network
                </Link>
              </li>
              <li>
                <Link href="/enterprise" className="text-gray-300 hover:text-byki-green transition-colors">
                  Enterprise Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/support" className="text-gray-300 hover:text-byki-green transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-gray-300 hover:text-byki-green transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="text-gray-300 hover:text-byki-green transition-colors">
                  Warranty
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-byki-green transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-byki-green" />
                <span className="text-gray-300">+60 3-1234 5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-byki-green" />
                <span className="text-gray-300">support@byki.my</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-byki-green mt-0.5" />
                <span className="text-gray-300">
                  Kuala Lumpur, Malaysia
                </span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="pt-4">
              <h4 className="text-sm font-medium mb-2">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-sm focus:outline-none focus:border-byki-green"
                />
                <button className="px-4 py-2 bg-byki-green text-white rounded-r-lg hover:bg-byki-green-dark transition-colors text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-800" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            © 2025 BYKI Malaysia. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-byki-green transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-byki-green transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-byki-green transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
