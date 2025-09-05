'use client';

import { CheckCircle, Shield, Clock, Bluetooth, Wrench, Award, ShoppingCart, ArrowRight } from "lucide-react";
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

export default function DevicePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div 
              className="space-y-6 sm:space-y-8"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="space-y-3 sm:space-y-4"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.h1 
                  className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
                  variants={staggerItem}
                >
                  SXAN Device
                  <span className="block text-byki-green">RM59 Only</span>
                </motion.h1>
                <motion.p 
                  className="text-lg sm:text-xl text-gray-600 max-w-xl"
                  variants={staggerItem}
                >
                  Enhance your BYKI app experience with professional-grade OBD2 diagnostics. Universal compatibility, professional accuracy, and exceptional value.
                </motion.p>
              </motion.div>

              <motion.div 
                className="space-y-3 sm:space-y-4"
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
                    <span className="text-2xl sm:text-3xl font-bold text-byki-green">59</span>
                    <span className="text-gray-600 ml-2 text-sm sm:text-base">Exceptional value</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm"
                  variants={staggerContainer}
                >
                  <motion.div className="flex items-center space-x-2" variants={staggerItem}>
                    <CheckCircle className="w-4 h-4 text-byki-green" />
                    <span className="text-gray-700">Universal compatibility</span>
                  </motion.div>
                  <motion.div className="flex items-center space-x-2" variants={staggerItem}>
                    <CheckCircle className="w-4 h-4 text-byki-green" />
                    <span className="text-gray-700">2-year warranty</span>
                  </motion.div>
                  <motion.div className="flex items-center space-x-2" variants={staggerItem}>
                    <CheckCircle className="w-4 h-4 text-byki-green" />
                    <span className="text-gray-700">Bluetooth 4.0+</span>
                  </motion.div>
                  <motion.div className="flex items-center space-x-2" variants={staggerItem}>
                    <CheckCircle className="w-4 h-4 text-byki-green" />
                    <span className="text-gray-700">30-second setup</span>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="flex items-center space-x-2">
                    <ShoppingCart className="w-5 h-5" />
                    <span className="text-white">Order Now - RM59</span>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="lg">
                    <Link href="/app" className="flex items-center space-x-2">
                      <span className="text-gray-900">Download BYKI App First</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
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
              {/* Placeholder for SXAN Device Hero Photo */}
              <motion.div 
                className="bg-gray-200 rounded-3xl p-12 relative overflow-hidden h-96 flex items-center justify-center"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-gray-500 text-center">
                  <div className="text-sm font-medium">SXAN Device Hero Photo</div>
                  <div className="text-xs">600x400px</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Technical Specifications
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Professional-grade hardware designed for Malaysian driving conditions
            </p>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-gray-50 rounded-xl p-4 sm:p-6 space-y-3 sm:space-y-4"
              variants={staggerItem}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.div 
                className="w-10 h-10 sm:w-12 sm:h-12 bg-byki-green/10 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(25, 91, 76, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <Bluetooth className="w-5 h-5 sm:w-6 sm:h-6 text-byki-green" />
              </motion.div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Connectivity</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Bluetooth 4.0+ Low Energy</li>
                  <li>• 10-meter range</li>
                  <li>• Auto-connect capability</li>
                  <li>• Low power consumption</li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-50 rounded-xl p-4 sm:p-6 space-y-3 sm:space-y-4"
              variants={staggerItem}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.div 
                className="w-10 h-10 sm:w-12 sm:h-12 bg-byki-green/10 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(25, 91, 76, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-byki-green" />
              </motion.div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Compatibility</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• All 2008+ vehicles</li>
                  <li>• OBD2/EOBD protocols</li>
                  <li>• Supports all major brands</li>
                  <li>• Malaysian market optimized</li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-50 rounded-xl p-4 sm:p-6 space-y-3 sm:space-y-4"
              variants={staggerItem}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.div 
                className="w-10 h-10 sm:w-12 sm:h-12 bg-byki-green/10 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(25, 91, 76, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-byki-green" />
              </motion.div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Professional diagnostic accuracy</li>
                  <li>• 30-second setup time</li>
                  <li>• Real-time data streaming</li>
                  <li>• 24/7 operation capability</li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-50 rounded-xl p-4 sm:p-6 space-y-3 sm:space-y-4"
              variants={staggerItem}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.div 
                className="w-10 h-10 sm:w-12 sm:h-12 bg-byki-green/10 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(25, 91, 76, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-byki-green" />
              </motion.div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Diagnostic Coverage</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Engine management systems</li>
                  <li>• Transmission diagnostics</li>
                  <li>• Emissions monitoring</li>
                  <li>• ABS and safety systems</li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-50 rounded-xl p-4 sm:p-6 space-y-3 sm:space-y-4"
              variants={staggerItem}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.div 
                className="w-10 h-10 sm:w-12 sm:h-12 bg-byki-green/10 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(25, 91, 76, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-byki-green" />
              </motion.div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• CE/FCC certified</li>
                  <li>• 2-year comprehensive warranty</li>
                  <li>• Quality tested in Malaysia</li>
                  <li>• 24/7 technical support</li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-50 rounded-xl p-4 sm:p-6 space-y-3 sm:space-y-4"
              variants={staggerItem}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.div 
                className="w-10 h-10 sm:w-12 sm:h-12 bg-byki-green/10 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(25, 91, 76, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-byki-green" />
              </motion.div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What&apos;s Included</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• SXAN OBD2 device</li>
                  <li>• Quick start guide</li>
                  <li>• 2-year warranty card</li>
                  <li>• Free BYKI app download</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Why Choose SXAN?
            </h2>
            <p className="text-xl text-gray-600">
              Compare SXAN with traditional diagnostic solutions
            </p>
          </motion.div>

          <motion.div 
            className="overflow-x-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.table 
              className="w-full bg-white rounded-xl shadow-lg overflow-hidden"
              whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <thead className="bg-byki-green text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Feature</th>
                  <th className="px-6 py-4 text-center">SXAN + BYKI</th>
                  <th className="px-6 py-4 text-center">Workshop Diagnostic</th>
                  <th className="px-6 py-4 text-center">Basic OBD2 Scanner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <motion.tr
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <td className="px-6 py-4 font-medium text-gray-900">Cost</td>
                  <td className="px-6 py-4 text-center text-byki-green font-semibold">RM59 (one-time)</td>
                  <td className="px-6 py-4 text-center text-red-600">RM200-500 (per visit)</td>
                  <td className="px-6 py-4 text-center text-gray-600">RM150-300</td>
                </motion.tr>
                <motion.tr 
                  className="bg-gray-50"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <td className="px-6 py-4 font-medium text-gray-900">Convenience</td>
                  <td className="px-6 py-4 text-center text-byki-green">✓ Use anywhere</td>
                  <td className="px-6 py-4 text-center text-red-600">✗ Workshop visit required</td>
                  <td className="px-6 py-4 text-center text-yellow-600">△ Basic readings only</td>
                </motion.tr>
                <motion.tr
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <td className="px-6 py-4 font-medium text-gray-900">Report Quality</td>
                  <td className="px-6 py-4 text-center text-byki-green">✓ Professional detailed</td>
                  <td className="px-6 py-4 text-center text-byki-green">✓ Professional</td>
                  <td className="px-6 py-4 text-center text-red-600">✗ Basic codes only</td>
                </motion.tr>
                <motion.tr 
                  className="bg-gray-50"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <td className="px-6 py-4 font-medium text-gray-900">Workshop Network</td>
                  <td className="px-6 py-4 text-center text-byki-green">✓ 200+ verified partners</td>
                  <td className="px-6 py-4 text-center text-yellow-600">△ Limited to one workshop</td>
                  <td className="px-6 py-4 text-center text-red-600">✗ No network</td>
                </motion.tr>
                <motion.tr
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <td className="px-6 py-4 font-medium text-gray-900">Real-time Monitoring</td>
                  <td className="px-6 py-4 text-center text-byki-green">✓ 24/7 monitoring</td>
                  <td className="px-6 py-4 text-center text-red-600">✗ Visit-based only</td>
                  <td className="px-6 py-4 text-center text-red-600">✗ Manual checking</td>
                </motion.tr>
              </tbody>
            </motion.table>
          </motion.div>
        </div>
      </section>

      {/* Purchase CTA */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-16">
            
            {/* Main CTA Content */}
            <motion.div 
              className="space-y-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.div 
                className="space-y-6"
                variants={staggerItem}
              >
                <motion.div 
                  className="inline-flex items-center space-x-2 bg-byki-green/5 rounded-full px-6 py-3 border border-byki-green/10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="w-2 h-2 bg-byki-green rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-sm font-medium text-byki-green">Limited Time Offer</span>
                </motion.div>
                
                <motion.h2 
                  className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                  variants={staggerItem}
                >
                  Get Your SXAN Device
                </motion.h2>
                
                <motion.p 
                  className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
                  variants={staggerItem}
                >
                  Professional diagnostics at an unbeatable price. Transform your vehicle maintenance experience today.
                </motion.p>
              </motion.div>

              {/* Pricing Card */}
              <motion.div 
                className="max-w-md mx-auto"
                variants={staggerItem}
              >
                <motion.div 
                  className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 relative overflow-hidden"
                  whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-byki-green to-byki-green-light"></div>
                  
                  <motion.div 
                    className="text-center space-y-6"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                  >
                    <motion.div 
                      className="space-y-2"
                      variants={staggerItem}
                    >
                      <motion.div 
                        className="text-5xl font-bold text-gray-900"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        RM59
                      </motion.div>
                      <div className="text-gray-500">One-time purchase</div>
                    </motion.div>
                    
                    <motion.div 
                      className="space-y-3 text-left"
                      variants={staggerItem}
                    >
                      <div className="flex items-center space-x-3">
                        <motion.div 
                          className="w-5 h-5 bg-byki-green/10 rounded-full flex items-center justify-center"
                          whileHover={{ scale: 1.2, backgroundColor: "rgba(25, 91, 76, 0.2)" }}
                          transition={{ duration: 0.3 }}
                        >
                          <CheckCircle className="w-3 h-3 text-byki-green" />
                        </motion.div>
                        <span className="text-gray-700">SXAN OBD2 Device</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <motion.div 
                          className="w-5 h-5 bg-byki-green/10 rounded-full flex items-center justify-center"
                          whileHover={{ scale: 1.2, backgroundColor: "rgba(25, 91, 76, 0.2)" }}
                          transition={{ duration: 0.3 }}
                        >
                          <CheckCircle className="w-3 h-3 text-byki-green" />
                        </motion.div>
                        <span className="text-gray-700">2-Year Comprehensive Warranty</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <motion.div 
                          className="w-5 h-5 bg-byki-green/10 rounded-full flex items-center justify-center"
                          whileHover={{ scale: 1.2, backgroundColor: "rgba(25, 91, 76, 0.2)" }}
                          transition={{ duration: 0.3 }}
                        >
                          <CheckCircle className="w-3 h-3 text-byki-green" />
                        </motion.div>
                        <span className="text-gray-700">Free Shipping Nationwide</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <motion.div 
                          className="w-5 h-5 bg-byki-green/10 rounded-full flex items-center justify-center"
                          whileHover={{ scale: 1.2, backgroundColor: "rgba(25, 91, 76, 0.2)" }}
                          transition={{ duration: 0.3 }}
                        >
                          <CheckCircle className="w-3 h-3 text-byki-green" />
                        </motion.div>
                        <span className="text-gray-700">24/7 Technical Support</span>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div 
                className="space-y-6"
                variants={staggerItem}
              >
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Button 
                      size="lg" 
                      className="bg-byki-green hover:bg-byki-green-dark text-white px-8 py-4 rounded-xl font-semibold shadow-lg border-0"
                    >
                      <ShoppingCart className="w-5 h-5 mr-3" />
                      <span className="text-white">Order Now - RM59</span>
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-2 border-gray-200 text-gray-700 hover:border-byki-green hover:text-byki-green px-8 py-4 rounded-xl font-semibold bg-white"
                    >
                      <Link href="/app" className="flex items-center space-x-3">
                        <span className="text-gray-700">Download BYKI App First</span>
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>
                
                {/* Trust Indicators */}
                <motion.div 
                  className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <span>30-day money-back guarantee</span>
                  </div>
                  <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Free shipping across Malaysia</span>
                  </div>
                  <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>Ships within 24 hours</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Bottom Call-to-Action */}
            <motion.div 
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <motion.div 
                className="grid md:grid-cols-3 gap-8 items-center"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <motion.div 
                  className="text-center space-y-2"
                  variants={staggerItem}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-bold text-gray-900">50,000+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </motion.div>
                <motion.div 
                  className="text-center space-y-2"
                  variants={staggerItem}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-bold text-gray-900">200+</div>
                  <div className="text-gray-600">Partner Workshops</div>
                </motion.div>
                <motion.div 
                  className="text-center space-y-2"
                  variants={staggerItem}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-bold text-gray-900">4.9★</div>
                  <div className="text-gray-600">Customer Rating</div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
