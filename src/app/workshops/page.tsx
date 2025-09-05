'use client';

import { MapPin, CheckCircle, Star, Shield, Clock, Phone, Award, Search } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";
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

export default function WorkshopsPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-16 sm:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 sm:space-y-8">
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
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">Certified & Verified Partners</span>
              </motion.div>
              
              <motion.h1 
                className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-gray-900"
                variants={staggerItem}
              >
                Malaysia&apos;s
                <span className="block text-byki-green">
                  Largest
                </span>
                <span className="block text-gray-900">Workshop Network</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
                variants={staggerItem}
              >
                Connect with 200+ certified automotive workshops across Malaysia. Transparent pricing, quality assurance, and trusted professionals at your service.
              </motion.p>
            </motion.div>

            {/* Key Stats */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-200 shadow-sm"
                variants={staggerItem}
                whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-byki-green mb-1 sm:mb-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  200+
                </motion.div>
                <div className="text-sm sm:text-base text-gray-600">Certified Workshops</div>
              </motion.div>
              <motion.div 
                className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-200 shadow-sm"
                variants={staggerItem}
                whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-byki-green mb-1 sm:mb-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  13
                </motion.div>
                <div className="text-sm sm:text-base text-gray-600">States Covered</div>
              </motion.div>
              <motion.div 
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
                variants={staggerItem}
                whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="text-4xl font-bold text-byki-green mb-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  4.8★
                </motion.div>
                <div className="text-gray-600">Average Rating</div>
              </motion.div>
            </motion.div>

            {/* CTA */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="bg-white text-byki-green hover:bg-gray-100 shadow-xl transition-all duration-300"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Find Workshops Near You
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-byki-green text-byki-green hover:bg-byki-green hover:text-white transition-all duration-300"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Partner With Us
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workshop Benefits */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Why Choose BYKI Partners
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Every workshop in our network meets strict quality standards and provides transparent, fair pricing
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Certified Quality */}
            <motion.div 
              className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200 hover:border-byki-green transition-all duration-300 hover:shadow-lg"
              variants={staggerItem}
              whileHover={{ y: -10, backgroundColor: "rgba(249, 250, 251, 1)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="w-12 h-12 sm:w-16 sm:h-16 bg-byki-green/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(25, 91, 76, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-byki-green" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Certified Quality</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                All workshops undergo rigorous certification process including equipment standards, technician qualifications, and customer service training.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-byki-green" />
                  <span>Equipment certification</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-byki-green" />
                  <span>Qualified technicians</span>
                </div>
              </div>
            </motion.div>

            {/* Transparent Pricing */}
            <motion.div 
              className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200 hover:border-byki-green transition-all duration-300 hover:shadow-lg"
              variants={staggerItem}
              whileHover={{ y: -10, backgroundColor: "rgba(249, 250, 251, 1)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="w-12 h-12 sm:w-16 sm:h-16 bg-byki-green/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(25, 91, 76, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-byki-green" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Transparent Pricing</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                No hidden charges or surprise fees. All pricing is upfront and standardized across our network for fair, competitive rates.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-byki-green" />
                  <span>Upfront pricing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-byki-green" />
                  <span>No hidden fees</span>
                </div>
              </div>
            </motion.div>

            {/* Quality Guarantee */}
            <motion.div 
              className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200 hover:border-byki-green transition-all duration-300 hover:shadow-lg"
              variants={staggerItem}
              whileHover={{ y: -10, backgroundColor: "rgba(249, 250, 251, 1)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="w-12 h-12 sm:w-16 sm:h-16 bg-byki-green/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(25, 91, 76, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-byki-green" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Quality Guarantee</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Every service comes with our quality guarantee. Unsatisfied with the work? We&apos;ll make it right or provide a full refund.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-byki-green" />
                  <span>Service guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-byki-green" />
                  <span>Customer protection</span>
                </div>
              </div>
            </motion.div>

            {/* 24/7 Support */}
            <motion.div 
              className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200 hover:border-byki-green transition-all duration-300 hover:shadow-lg"
              variants={staggerItem}
              whileHover={{ y: -10, backgroundColor: "rgba(249, 250, 251, 1)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="w-12 h-12 sm:w-16 sm:h-16 bg-byki-green/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(25, 91, 76, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-byki-green" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">24/7 Support</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Round-the-clock customer support for booking assistance, service inquiries, and emergency roadside guidance.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-byki-green" />
                  <span>24/7 hotline</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-byki-green" />
                  <span>Emergency assistance</span>
                </div>
              </div>
            </motion.div>

            {/* Fast Booking */}
            <motion.div 
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-byki-green transition-all duration-300 hover:shadow-lg"
              variants={staggerItem}
              whileHover={{ y: -10, backgroundColor: "rgba(249, 250, 251, 1)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="w-16 h-16 bg-byki-green/10 rounded-2xl flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(25, 91, 76, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <Clock className="w-8 h-8 text-byki-green" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fast Booking</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Book appointments instantly through the BYKI app. Real-time availability, confirmation in seconds, and flexible scheduling.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-byki-green" />
                  <span>Instant booking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-byki-green" />
                  <span>Real-time availability</span>
                </div>
              </div>
            </motion.div>

            {/* Nationwide Coverage */}
            <motion.div 
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-byki-green transition-all duration-300 hover:shadow-lg"
              variants={staggerItem}
              whileHover={{ y: -10, backgroundColor: "rgba(249, 250, 251, 1)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="w-16 h-16 bg-byki-green/10 rounded-2xl flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(25, 91, 76, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <MapPin className="w-8 h-8 text-byki-green" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nationwide Coverage</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                From Perlis to Johor, our workshop network covers all 13 states. Find quality service wherever you are in Malaysia.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-byki-green" />
                  <span>All 13 states</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-byki-green" />
                  <span>Urban & rural areas</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Workshops */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Featured Partner Workshops
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Meet some of our top-rated workshops across Malaysia
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Workshop 1 - KL */}
            <motion.div 
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200"
              variants={staggerItem}
              whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">AutoCare Pro</h3>
                  <p className="text-sm text-gray-600">Kuala Lumpur</p>
                </div>
                <motion.div 
                  className="flex items-center space-x-1"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold">4.9</span>
                </motion.div>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 text-byki-green" />
                  <span>Jalan Ampang, KL</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-byki-green" />
                  <span>Honda, Toyota, Nissan specialist</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4 text-byki-green" />
                  <span>Mon-Sat: 8AM-6PM</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  <span className="font-semibold text-byki-green">RM80</span> avg service
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Workshop 2 - Penang */}
            <motion.div 
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
              variants={staggerItem}
              whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Northern Auto Service</h3>
                  <p className="text-sm text-gray-600">Penang</p>
                </div>
                <motion.div 
                  className="flex items-center space-x-1"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold">4.8</span>
                </motion.div>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 text-byki-green" />
                  <span>Georgetown, Penang</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-byki-green" />
                  <span>Proton, Perodua expert</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4 text-byki-green" />
                  <span>Mon-Fri: 9AM-5PM</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  <span className="font-semibold text-byki-green">RM65</span> avg service
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Workshop 3 - JB */}
            <motion.div 
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
              variants={staggerItem}
              whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Southern Motors</h3>
                  <p className="text-sm text-gray-600">Johor Bahru</p>
                </div>
                <motion.div 
                  className="flex items-center space-x-1"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold">4.7</span>
                </motion.div>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 text-byki-green" />
                  <span>Taman Molek, JB</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-byki-green" />
                  <span>BMW, Mercedes specialist</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4 text-byki-green" />
                  <span>Mon-Sat: 8AM-7PM</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  <span className="font-semibold text-byki-green">RM120</span> avg service
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="text-center mt-12"
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
                <Search className="w-5 h-5 mr-2" />
                Browse All 200+ Workshops
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              How It Works
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Book and manage workshop visits seamlessly through the BYKI App
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Step 1 */}
            <motion.div 
              className="text-center space-y-6"
              variants={staggerItem}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="w-20 h-20 bg-byki-green rounded-full flex items-center justify-center mx-auto"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-2xl font-bold text-white">1</span>
              </motion.div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Diagnose Issue</h3>
                <p className="text-gray-600">
                  Use your BYKI App to run diagnostics and identify vehicle issues that need professional attention.
                </p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              className="text-center space-y-6"
              variants={staggerItem}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="w-20 h-20 bg-byki-green rounded-full flex items-center justify-center mx-auto"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-2xl font-bold text-white">2</span>
              </motion.div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Find Workshop</h3>
                <p className="text-gray-600">
                  Browse nearby certified workshops, compare ratings, pricing, and specialties to find the perfect match.
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              className="text-center space-y-6"
              variants={staggerItem}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="w-20 h-20 bg-byki-green rounded-full flex items-center justify-center mx-auto"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-2xl font-bold text-white">3</span>
              </motion.div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Book Appointment</h3>
                <p className="text-gray-600">
                  Schedule your appointment instantly with real-time availability and receive immediate confirmation.
                </p>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div 
              className="text-center space-y-6"
              variants={staggerItem}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="w-20 h-20 bg-byki-green rounded-full flex items-center justify-center mx-auto"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-2xl font-bold text-white">4</span>
              </motion.div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Get Service</h3>
                <p className="text-gray-600">
                  Enjoy transparent pricing, quality service, and real-time updates on your vehicle&apos;s repair progress.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partner Application CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-byki-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            className="space-y-6 sm:space-y-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="space-y-4 sm:space-y-6"
              variants={staggerItem}
            >
              <motion.h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
                variants={staggerItem}
              >
                Partner With BYKI
              </motion.h2>
              <motion.p 
                className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto"
                variants={staggerItem}
              >
                Join Malaysia&apos;s largest automotive workshop network. Grow your business with verified customer referrals and digital tools.
              </motion.p>
            </motion.div>

            {/* Partner Benefits */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-left"
              variants={staggerContainer}
            >
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20"
                variants={staggerItem}
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center space-x-3 mb-2 sm:mb-3">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                  </motion.div>
                  <span className="font-semibold text-white text-sm sm:text-base">Verified Customers</span>
                </div>
                <p className="text-sm text-white/80">
                  Get quality customer referrals through our platform with pre-diagnosed vehicle issues.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20"
                variants={staggerItem}
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center space-x-3 mb-2 sm:mb-3">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                  </motion.div>
                  <span className="font-semibold text-white text-sm sm:text-base">Digital Tools</span>
                </div>
                <p className="text-sm text-white/80">
                  Access workshop management tools, inventory tracking, and customer communication systems.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20"
                variants={staggerItem}
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center space-x-3 mb-2 sm:mb-3">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                  </motion.div>
                  <span className="font-semibold text-white text-sm sm:text-base">Marketing Support</span>
                </div>
                <p className="text-sm text-white/80">
                  Benefit from our digital marketing campaigns and customer acquisition initiatives.
                </p>
              </motion.div>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
              variants={staggerItem}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="bg-white text-byki-green hover:bg-gray-100 shadow-xl transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                >
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                  <span className="text-byki-green">Apply to Partner</span>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/app">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-byki-green transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                  >
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                    <span className="text-white">Find Workshops</span>
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.p 
              className="text-sm text-white/80"
              variants={staggerItem}
            >
              Join 200+ certified workshops • Free partnership program • 24/7 support
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
