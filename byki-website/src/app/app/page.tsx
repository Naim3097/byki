'use client';

import { Download, Smartphone, CheckCircle, Star, Users, Shield, Clock, Globe, Award, ArrowRight, Bell, BarChart3, MapPin, Wrench, FileText } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8 }
};

const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8 }
};

const slideInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8 }
};

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

export default function AppPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section - Clean & Professional */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-16 sm:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div 
              className="space-y-6 sm:space-y-8"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="space-y-4 sm:space-y-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
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
                  BYKI App
                  <span className="block text-byki-green">
                    Professional
                  </span>
                  <span className="block text-gray-900">Diagnostics</span>
                </motion.h1>
                
                <motion.p 
                  className="text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed"
                  variants={staggerItem}
                >
                  Professional-grade automotive diagnostics in your pocket. Connect to Malaysia's largest certified workshop network and get instant vehicle insights.
                </motion.p>
              </motion.div>

              {/* Download Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
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
                    Download for iOS
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-byki-green text-byki-green hover:bg-byki-green hover:text-white transition-all duration-300"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download for Android
                  </Button>
                </motion.div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div 
                className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-gray-200"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
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
                  <div className="text-sm text-gray-600">Partner Workshops</div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Phone Mockup */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="relative z-10"
                whileHover={{ y: -10, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Placeholder for iPhone with BYKI App */}
                <div className="bg-gray-200 rounded-[2.5rem] p-4 shadow-2xl border-8 border-gray-300 h-96 flex items-center justify-center">
                  <div className="text-gray-500 text-center">
                    <div className="text-sm font-medium">iPhone with BYKI App</div>
                    <div className="text-xs">400x800px</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Simplified */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-6 mb-20"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Everything You Need
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Professional automotive diagnostics designed for Malaysian drivers
            </p>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Real-time Diagnostics */}
            <motion.div 
              className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-byki-green transition-all duration-300 hover:shadow-lg"
              variants={staggerItem}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="w-14 h-14 sm:w-16 sm:h-16 bg-byki-green/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(25, 91, 76, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-byki-green" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Real-time Diagnostics</h3>
              <p className="text-gray-600 leading-relaxed">
                Monitor engine, transmission, emissions, and safety systems with professional accuracy. Get instant alerts for any issues.
              </p>
            </motion.div>

            {/* Workshop Network */}
            <motion.div 
              className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-byki-green transition-all duration-300 hover:shadow-lg"
              variants={staggerItem}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="w-14 h-14 sm:w-16 sm:h-16 bg-byki-green/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(25, 91, 76, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-byki-green" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">200+ Certified Workshops</h3>
              <p className="text-gray-600 leading-relaxed">
                Access Malaysia's largest network of verified workshops with transparent pricing and quality assurance.
              </p>
            </motion.div>

            {/* Bilingual Support */}
            <motion.div 
              className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-byki-green transition-all duration-300 hover:shadow-lg"
              variants={staggerItem}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="w-14 h-14 sm:w-16 sm:h-16 bg-byki-green/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(25, 91, 76, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <Globe className="w-7 h-7 sm:w-8 sm:h-8 text-byki-green" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Bilingual Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Full support in English and Bahasa Malaysia with offline capabilities for use anywhere.
              </p>
            </motion.div>

            {/* Maintenance Alerts */}
            <motion.div 
              className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-byki-green transition-all duration-300 hover:shadow-lg"
              variants={staggerItem}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="w-14 h-14 sm:w-16 sm:h-16 bg-byki-green/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(25, 91, 76, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <Bell className="w-7 h-7 sm:w-8 sm:h-8 text-byki-green" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Smart Alerts</h3>
              <p className="text-gray-600 leading-relaxed">
                Get timely reminders for service intervals, oil changes, and preventive maintenance tasks.
              </p>
            </motion.div>

            {/* Detailed Reports */}
            <motion.div 
              className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-byki-green transition-all duration-300 hover:shadow-lg"
              variants={staggerItem}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="w-14 h-14 sm:w-16 sm:h-16 bg-byki-green/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(25, 91, 76, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <FileText className="w-7 h-7 sm:w-8 sm:h-8 text-byki-green" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Comprehensive Reports</h3>
              <p className="text-gray-600 leading-relaxed">
                Generate detailed PDF reports for insurance claims, resale assessment, and maintenance tracking.
              </p>
            </motion.div>

            {/* Cost Savings */}
            <motion.div 
              className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-byki-green transition-all duration-300 hover:shadow-lg"
              variants={staggerItem}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="w-14 h-14 sm:w-16 sm:h-16 bg-byki-green/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(25, 91, 76, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <BarChart3 className="w-7 h-7 sm:w-8 sm:h-8 text-byki-green" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Economic Protection</h3>
              <p className="text-gray-600 leading-relaxed">
                Save RM500+ per diagnostic session by preventing overcharging and unnecessary repairs.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SXAN Device Cross-sell */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Want Enhanced Diagnostics?
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  The SXAN OBD2 device works seamlessly with the BYKI App to provide hardware-level vehicle data for deeper diagnostics when needed.
                </p>
                <motion.div 
                  className="space-y-4"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <motion.div className="flex items-center space-x-3" variants={staggerItem}>
                    <CheckCircle className="w-6 h-6 text-byki-green" />
                    <span className="text-gray-700">Universal compatibility (2008+ vehicles)</span>
                  </motion.div>
                  <motion.div className="flex items-center space-x-3" variants={staggerItem}>
                    <CheckCircle className="w-6 h-6 text-byki-green" />
                    <span className="text-gray-700">Bluetooth 4.0+ connectivity</span>
                  </motion.div>
                  <motion.div className="flex items-center space-x-3" variants={staggerItem}>
                    <CheckCircle className="w-6 h-6 text-byki-green" />
                    <span className="text-gray-700">30-second setup time</span>
                  </motion.div>
                  <motion.div className="flex items-center space-x-3" variants={staggerItem}>
                    <CheckCircle className="w-6 h-6 text-byki-green" />
                    <span className="text-gray-700">2-year warranty</span>
                  </motion.div>
                </motion.div>
                <motion.div 
                  className="pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Link href="/device" className="inline-flex items-center space-x-2 text-byki-green hover:text-byki-green-dark transition-colors font-medium">
                      <span className="text-byki-green">Learn about SXAN Device - RM59</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Placeholder for SXAN Device Cross-sell */}
                <motion.div 
                  className="bg-gray-200 rounded-2xl p-8 h-64 flex items-center justify-center"
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-gray-500 text-center">
                    <div className="text-sm font-medium">SXAN Device Photo</div>
                    <div className="text-xs">400x300px</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-24 bg-byki-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Download BYKI Today
              </h2>
              <p className="text-xl text-white max-w-2xl mx-auto">
                Join 50,000+ Malaysian drivers who trust BYKI for professional automotive diagnostics
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="bg-white text-byki-green hover:bg-gray-100 shadow-xl transition-all duration-300 text-lg px-8 py-4"
                >
                  <Download className="w-6 h-6 mr-3" />
                  Download for iOS
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="bg-white text-byki-green hover:bg-gray-100 shadow-xl transition-all duration-300 text-lg px-8 py-4"
                >
                  <Download className="w-6 h-6 mr-3" />
                  Download for Android
                </Button>
              </motion.div>
            </motion.div>

            <motion.p 
              className="text-sm text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Free download • No subscription required • Works offline
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
