'use client';

import Link from "next/link";
import { Download, Shield, Users, Clock, CheckCircle, ArrowRight, Smartphone, Award } from "lucide-react";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const staggerItem = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-16 sm:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div 
              className="space-y-6 sm:space-y-8"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="space-y-4 sm:space-y-6"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                <motion.div 
                  className="inline-flex items-center space-x-2 bg-byki-green/10 rounded-full px-4 py-2 text-byki-green border border-byki-green/20"
                  variants={staggerItem}
                >
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-medium text-byki-green">Malaysia's Most Advanced Platform</span>
                </motion.div>
                
                <motion.h1 
                  className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-gray-900"
                  variants={staggerItem}
                >
                  Malaysia&apos;s Most
                  <span className="block text-byki-green">Advanced</span>
                  <span className="block text-gray-900">Diagnostic Platform</span>
                </motion.h1>
                
                <motion.p 
                  className="text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed"
                  variants={staggerItem}
                >
                  Professional automotive diagnostics in your pocket. Download the BYKI app for comprehensive vehicle insights and connect to our network of 200+ certified workshops.
                </motion.p>
              </motion.div>

              {/* App Download CTAs */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    className="bg-byki-green text-white hover:bg-byki-green-dark shadow-xl transition-all duration-300"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download BYKI App
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/device" className="inline-flex items-center justify-center px-6 py-3 text-lg border-2 border-byki-green text-byki-green hover:bg-byki-green hover:text-white focus:ring-byki-green rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 space-x-2">
                    <span className="hidden sm:inline">Get SXAN Device - RM59</span>
                    <span className="sm:hidden">SXAN Device - RM59</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div 
                className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-gray-200"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                <motion.div className="text-center" variants={staggerItem}>
                  <div className="text-xl sm:text-2xl font-bold text-byki-green">4.8★</div>
                  <div className="text-xs sm:text-sm text-gray-600">App Store Rating</div>
                </motion.div>
                <motion.div className="text-center" variants={staggerItem}>
                  <div className="text-xl sm:text-2xl font-bold text-byki-green">50K+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Active Users</div>
                </motion.div>
                <motion.div className="text-center" variants={staggerItem}>
                  <div className="text-xl sm:text-2xl font-bold text-byki-green">200+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Partner Workshops</div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div 
                className="relative z-10"
                whileHover={{ y: -10, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Placeholder for BYKI App Dashboard Screenshot */}
                <div className="bg-gray-200 rounded-2xl p-8 shadow-2xl h-96 flex items-center justify-center">
                  <div className="text-gray-500 text-center">
                    <div className="text-sm font-medium">Hero Dashboard Image</div>
                    <div className="text-xs">600x800px</div>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-byki-green/10 to-transparent rounded-2xl transform rotate-3"
                initial={{ rotate: 0, opacity: 0 }}
                whileInView={{ rotate: 3, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Why Choose BYKI?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience professional-grade automotive diagnostics with unmatched convenience and reliability
            </p>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="text-center space-y-4 p-4 sm:p-6 rounded-xl transition-all duration-300"
              variants={staggerItem}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.div 
                className="w-14 h-14 sm:w-16 sm:h-16 bg-byki-green/10 rounded-full flex items-center justify-center mx-auto"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(25, 91, 76, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <Smartphone className="w-7 h-7 sm:w-8 sm:h-8 text-byki-green" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">App-First Experience</h3>
              <p className="text-gray-600">
                Professional diagnostics in your pocket. No need for expensive equipment or workshop visits for basic checks.
              </p>
            </motion.div>

            <motion.div 
              className="text-center space-y-4 p-4 sm:p-6 rounded-xl transition-all duration-300"
              variants={staggerItem}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.div 
                className="w-14 h-14 sm:w-16 sm:h-16 bg-byki-green/10 rounded-full flex items-center justify-center mx-auto"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(25, 91, 76, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-byki-green" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Economic Protection</h3>
              <p className="text-gray-600">
                Prevent overcharging and unnecessary repairs. Save RM500+ per diagnostic session with transparent pricing.
              </p>
            </motion.div>

            <motion.div 
              className="text-center space-y-4 p-4 sm:p-6 rounded-xl transition-all duration-300"
              variants={staggerItem}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.div 
                className="w-14 h-14 sm:w-16 sm:h-16 bg-byki-green/10 rounded-full flex items-center justify-center mx-auto"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(25, 91, 76, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <Clock className="w-7 h-7 sm:w-8 sm:h-8 text-byki-green" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Time Efficiency</h3>
              <p className="text-gray-600">
                Instant diagnostics and workshop recommendations. Reduce uncertainty and get accurate solutions faster.
              </p>
            </motion.div>

            <motion.div 
              className="text-center space-y-4 p-4 sm:p-6 rounded-xl transition-all duration-300"
              variants={staggerItem}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.div 
                className="w-14 h-14 sm:w-16 sm:h-16 bg-byki-green/10 rounded-full flex items-center justify-center mx-auto"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(25, 91, 76, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <Users className="w-7 h-7 sm:w-8 sm:h-8 text-byki-green" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Trusted Network</h3>
              <p className="text-gray-600">
                Access 200+ verified workshops across Malaysia with quality assurance and transparent service standards.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="space-y-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.h2 
                  className="text-3xl lg:text-4xl font-bold text-gray-900"
                  variants={staggerItem}
                >
                  BYKI App
                  <span className="block text-byki-green">The Smart Choice</span>
                </motion.h2>
                <motion.p 
                  className="text-xl text-gray-600"
                  variants={staggerItem}
                >
                  Start with our comprehensive mobile app. Get professional diagnostics, workshop recommendations, and vehicle insights - all for free.
                </motion.p>
              </motion.div>

              <motion.div 
                className="space-y-4"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div className="flex items-start space-x-3" variants={staggerItem}>
                  <CheckCircle className="w-6 h-6 text-byki-green mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Comprehensive Diagnostics</h4>
                    <p className="text-gray-600">Engine, transmission, emissions, and safety system analysis</p>
                  </div>
                </motion.div>
                <motion.div className="flex items-start space-x-3" variants={staggerItem}>
                  <CheckCircle className="w-6 h-6 text-byki-green mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Bilingual Support</h4>
                    <p className="text-gray-600">Full support in English and Bahasa Malaysia</p>
                  </div>
                </motion.div>
                <motion.div className="flex items-start space-x-3" variants={staggerItem}>
                  <CheckCircle className="w-6 h-6 text-byki-green mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Offline Capabilities</h4>
                    <p className="text-gray-600">Access diagnostics even without internet connection</p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    className="bg-byki-green text-white hover:bg-byki-green-dark shadow-xl transition-all duration-300"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Free App
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Placeholder for BYKI App Feature Grid */}
              <motion.div 
                className="bg-gray-200 rounded-2xl p-8 shadow-2xl h-96 flex items-center justify-center"
                whileHover={{ y: -10, scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-gray-500 text-center">
                  <div className="text-sm font-medium">App Feature Grid (4 Screenshots)</div>
                  <div className="text-xs">300x200px each</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SXAN Device Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Placeholder for SXAN Device Photo */}
              <motion.div 
                className="bg-gray-200 rounded-2xl p-8 relative overflow-hidden h-80 flex items-center justify-center"
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-gray-500 text-center">
                  <div className="text-sm font-medium">SXAN Device Photo</div>
                  <div className="text-xs">400x300px</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="order-1 lg:order-2 space-y-8"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="space-y-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.h2 
                  className="text-3xl lg:text-4xl font-bold text-gray-900"
                  variants={staggerItem}
                >
                  SXAN Device
                  <span className="block text-byki-green">Enhanced Diagnostics</span>
                </motion.h2>
                <motion.p 
                  className="text-xl text-gray-600"
                  variants={staggerItem}
                >
                  Upgrade your BYKI experience with the SXAN OBD2 device. Get hardware-level diagnostics for deeper vehicle insights.
                </motion.p>
              </motion.div>

              <motion.div 
                className="space-y-4"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div className="flex items-center space-x-3" variants={staggerItem}>
                  <motion.div 
                    className="w-8 h-8 bg-byki-green text-white rounded-full flex items-center justify-center text-sm font-bold"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    RM
                  </motion.div>
                  <div>
                    <span className="text-2xl font-bold text-byki-green">59</span>
                    <span className="text-gray-600 ml-2">Exceptional value</span>
                  </div>
                </motion.div>
                <motion.div 
                  className="grid grid-cols-2 gap-4 text-sm text-gray-700"
                  variants={staggerContainer}
                >
                  <motion.div className="flex items-center space-x-2" variants={staggerItem}>
                    <CheckCircle className="w-4 h-4 text-byki-green" />
                    <span>Universal compatibility</span>
                  </motion.div>
                  <motion.div className="flex items-center space-x-2" variants={staggerItem}>
                    <CheckCircle className="w-4 h-4 text-byki-green" />
                    <span>2-year warranty</span>
                  </motion.div>
                  <motion.div className="flex items-center space-x-2" variants={staggerItem}>
                    <CheckCircle className="w-4 h-4 text-byki-green" />
                    <span>Bluetooth 4.0+</span>
                  </motion.div>
                  <motion.div className="flex items-center space-x-2" variants={staggerItem}>
                    <CheckCircle className="w-4 h-4 text-byki-green" />
                    <span>30-second setup</span>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/device" className="inline-flex items-center justify-center px-6 py-3 text-lg border-2 border-byki-green text-byki-green hover:bg-byki-green hover:text-white focus:ring-byki-green rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 space-x-2">
                    <span>Learn More About SXAN</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-byki-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            className="space-y-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="space-y-6"
              variants={staggerItem}
            >
              <motion.h2 
                className="text-3xl lg:text-4xl font-bold text-white"
                variants={staggerItem}
              >
                Start Your Diagnostic Journey Today
              </motion.h2>
              <motion.p 
                className="text-xl text-byki-green-light max-w-2xl mx-auto"
                variants={staggerItem}
              >
                Join 50,000+ Malaysian drivers who trust BYKI for their automotive diagnostic needs
              </motion.p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={staggerItem}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="bg-white text-byki-green hover:bg-gray-100 shadow-xl transition-all duration-300"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download BYKI App
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/workshops"
                  className="inline-flex items-center justify-center px-6 py-3 text-lg border-2 border-white text-white hover:bg-white hover:text-byki-green rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                  Find Workshops Near You
                </Link>
              </motion.div>
            </motion.div>

            <motion.p 
              className="text-sm text-byki-green-light"
              variants={staggerItem}
            >
              Free app download • No subscription required • 2-year device warranty
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
