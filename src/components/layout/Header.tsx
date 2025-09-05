'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Smartphone, Shield, HelpCircle, Building, FileText, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Handle hover events for dropdowns
  const handleProductsMouseEnter = () => setIsProductsOpen(true);
  const handleProductsMouseLeave = () => setIsProductsOpen(false);
  const handleMoreMouseEnter = () => setIsMoreOpen(true);
  const handleMoreMouseLeave = () => setIsMoreOpen(false);

  if (!isMounted) {
    return (
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-byki-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-bold text-gray-900">BYKI</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-1 text-gray-700">
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <span className="text-gray-700">Workshops</span>
              <span className="text-gray-700">Support</span>
              <span className="text-gray-700">About</span>
            </nav>
            <div className="hidden md:flex items-center space-x-4">
              <span className="px-4 py-2 text-byki-green border border-byki-green rounded-lg">
                Download App
              </span>
              <span className="px-4 py-2 bg-byki-green text-white rounded-lg">
                Get Device - RM59
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            {/* Placeholder for BYKI Logo */}
            <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-xs">LOGO</span>
            </div>
            <span className="text-xl font-bold text-gray-900">BYKI</span>
          </Link>

          {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-byki-green transition-colors">
                Home
              </Link>
              <div 
                className="relative"
                onMouseEnter={handleProductsMouseEnter}
                onMouseLeave={handleProductsMouseLeave}
              >
                <button
                  className="flex items-center space-x-1 text-gray-700 hover:text-byki-green transition-colors focus:outline-none focus:ring-2 focus:ring-byki-green focus:ring-offset-2 rounded-md px-2 py-1"
                  aria-haspopup="true"
                  aria-expanded={isProductsOpen}
                >
                  <span>Products</span>
                  <motion.div
                    animate={{ rotate: isProductsOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isProductsOpen && (
                    <motion.div 
                      className="absolute top-full left-0 mt-2 w-52 bg-white border border-gray-200 rounded-lg shadow-xl py-2 z-50"
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -5, scale: 0.98 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.2 }}
                      >
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1, duration: 0.2 }}
                        >
                          <Link href="/app" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-byki-green transition-colors focus:outline-none focus:bg-gray-50">
                            <Smartphone className="w-4 h-4 mr-2" /> BYKI App
                          </Link>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.15, duration: 0.2 }}
                        >
                          <Link href="/device" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-byki-green transition-colors focus:outline-none focus:bg-gray-50">
                            <Shield className="w-4 h-4 mr-2" /> SXAN Device
                          </Link>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link href="/workshops" className="text-gray-700 hover:text-byki-green transition-colors">
                Workshops
              </Link>
              <div 
                className="relative"
                onMouseEnter={handleMoreMouseEnter}
                onMouseLeave={handleMoreMouseLeave}
              >
                <button
                  className="flex items-center space-x-1 text-gray-700 hover:text-byki-green transition-colors focus:outline-none focus:ring-2 focus:ring-byki-green focus:ring-offset-2 rounded-md px-2 py-1"
                  aria-haspopup="true"
                  aria-expanded={isMoreOpen}
                >
                  <span>More</span>
                  <motion.div
                    animate={{ rotate: isMoreOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isMoreOpen && (
                    <motion.div 
                      className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-xl py-2 z-50"
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -5, scale: 0.98 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.2 }}
                      >
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1, duration: 0.2 }}
                        >
                          <Link href="/about" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-byki-green transition-colors focus:outline-none focus:bg-gray-50">
                            <Building className="w-4 h-4 mr-2" /> About
                          </Link>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.15, duration: 0.2 }}
                        >
                          <Link href="/support" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-byki-green transition-colors focus:outline-none focus:bg-gray-50">
                            <HelpCircle className="w-4 h-4 mr-2" /> Support
                          </Link>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2, duration: 0.2 }}
                        >
                          <Link href="/blog" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-byki-green transition-colors focus:outline-none focus:bg-gray-50">
                            <BookOpen className="w-4 h-4 mr-2" /> Blog
                          </Link>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.25, duration: 0.2 }}
                        >
                          <Link href="/privacy" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-byki-green transition-colors focus:outline-none focus:bg-gray-50">
                            <FileText className="w-4 h-4 mr-2" /> Privacy Policy
                          </Link>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3, duration: 0.2 }}
                        >
                          <Link href="/terms" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-byki-green transition-colors focus:outline-none focus:bg-gray-50">
                            <FileText className="w-4 h-4 mr-2" /> Terms of Service
                          </Link>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/download"
              className="px-4 py-2 text-byki-green border border-byki-green rounded-lg hover:bg-byki-green hover:text-white transition-colors"
            >
              Download App
            </Link>
            <Link
              href="/device"
              className="px-4 py-2 bg-byki-green text-white rounded-lg hover:bg-byki-green-dark transition-colors"
            >
              Get Device - RM59
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-byki-green focus:ring-offset-2 transition-all"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-byki-green transition-colors py-2 px-2 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-byki-green focus:ring-offset-2">Home</Link>
              <Link href="/app" className="text-gray-700 hover:text-byki-green transition-colors py-2 px-2 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-byki-green focus:ring-offset-2">BYKI App</Link>
              <Link href="/device" className="text-gray-700 hover:text-byki-green transition-colors py-2 px-2 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-byki-green focus:ring-offset-2">SXAN Device</Link>
              <Link href="/workshops" className="text-gray-700 hover:text-byki-green transition-colors py-2 px-2 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-byki-green focus:ring-offset-2">Workshops</Link>
              <Link href="/about" className="text-gray-700 hover:text-byki-green transition-colors py-2 px-2 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-byki-green focus:ring-offset-2">About</Link>
              <Link href="/support" className="text-gray-700 hover:text-byki-green transition-colors py-2 px-2 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-byki-green focus:ring-offset-2">Support</Link>
              <Link href="/blog" className="text-gray-700 hover:text-byki-green transition-colors py-2 px-2 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-byki-green focus:ring-offset-2">Blog</Link>
              <Link href="/privacy" className="text-gray-700 hover:text-byki-green transition-colors py-2 px-2 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-byki-green focus:ring-offset-2">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-700 hover:text-byki-green transition-colors py-2 px-2 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-byki-green focus:ring-offset-2">Terms of Service</Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
