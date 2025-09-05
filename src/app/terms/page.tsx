import { FileText, AlertTriangle, CheckCircle, Shield, Wrench, Smartphone, DollarSign, Clock } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-byki-green/10 rounded-full px-4 py-2 text-byki-green border border-byki-green/20">
                <FileText className="w-4 h-4" />
                <span className="text-sm font-medium">Legal Terms</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900">
                Terms of
                <span className="block text-byki-green">
                  Service
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Clear terms for using BYKI App, SXAN device, and workshop services. Fair, honest, and legally compliant conditions for all users.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm max-w-md mx-auto">
              <div className="text-gray-900 text-center space-y-2">
                <div className="text-lg font-semibold">Effective Date</div>
                <div className="text-byki-green">August 14, 2025</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Terms Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The essential terms you need to know when using BYKI services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
                <Smartphone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">BYKI App</h3>
              <p className="text-gray-600">Free diagnostic app with in-app purchases for advanced features.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">SXAN Device</h3>
              <p className="text-gray-600">RM59 OBD2 device with 1-year warranty and technical support.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto">
                <Wrench className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Workshop Network</h3>
              <p className="text-gray-600">Access to 200+ certified workshops with quality guarantees.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto">
                <DollarSign className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Fair Pricing</h3>
              <p className="text-gray-600">Transparent pricing with no hidden fees or surprise charges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            
            {/* Acceptance of Terms */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center space-x-3 mb-6">
                <FileText className="w-6 h-6 text-byki-green" />
                <h3 className="text-2xl font-bold text-gray-900">Acceptance of Terms</h3>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <p>
                  By downloading, installing, or using the BYKI application, purchasing the SXAN device, or booking workshop services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
                <p>
                  These terms apply to all users in Malaysia and other supported regions. We may update these terms from time to time, and continued use of our services constitutes acceptance of any changes.
                </p>
              </div>
            </div>

            {/* BYKI App Terms */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center space-x-3 mb-6">
                <Smartphone className="w-6 h-6 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">BYKI App Usage</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">App License</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-byki-green mt-0.5" />
                      <span>Personal, non-commercial use of BYKI app is granted free of charge</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-byki-green mt-0.5" />
                      <span>Premium features require in-app purchase or SXAN device connection</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-byki-green mt-0.5" />
                      <span>You may use the app on multiple devices with the same account</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Diagnostic Accuracy</h4>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                    <div className="flex items-start space-x-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                      <div className="text-yellow-800">
                        <p className="font-semibold">Important Disclaimer:</p>
                        <p className="text-sm mt-1">
                          BYKI provides diagnostic information based on OBD2 data. While accurate, this should not replace professional mechanical inspection. Always consult qualified mechanics for critical vehicle issues.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Prohibited Uses</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span>Commercial resale or redistribution of diagnostic data</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span>Reverse engineering or attempting to hack the app</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span>Using the app for illegal vehicle modifications</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* SXAN Device Terms */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="w-6 h-6 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">SXAN Device Terms</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Product Details</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-byki-green mt-0.5" />
                      <span>SXAN device costs RM59 including shipping within Malaysia</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-byki-green mt-0.5" />
                      <span>Compatible with most vehicles manufactured after 2000</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-byki-green mt-0.5" />
                      <span>Connects via Bluetooth to your smartphone</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Warranty & Returns</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                      <h5 className="font-semibold text-green-900 mb-2">1-Year Warranty</h5>
                      <ul className="space-y-1 text-green-800 text-sm">
                        <li>• Manufacturing defects covered</li>
                        <li>• Free replacement if device fails</li>
                        <li>• Technical support included</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                      <h5 className="font-semibold text-blue-900 mb-2">30-Day Returns</h5>
                      <ul className="space-y-1 text-blue-800 text-sm">
                        <li>• Full refund if unsatisfied</li>
                        <li>• Device must be in original condition</li>
                        <li>• Return shipping at your cost</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Usage Limitations</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                      <span>Device should not be left permanently connected to vehicle</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                      <span>May not work with hybrid or electric vehicles</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                      <span>Requires stable Bluetooth connection for accurate readings</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Workshop Services */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center space-x-3 mb-6">
                <Wrench className="w-6 h-6 text-purple-600" />
                <h3 className="text-2xl font-bold text-gray-900">Workshop Services</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Service Booking</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-byki-green mt-0.5" />
                      <span>Access to 200+ certified workshops across Malaysia</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-byki-green mt-0.5" />
                      <span>Real-time availability and booking confirmation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-byki-green mt-0.5" />
                      <span>Transparent pricing before booking appointment</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Service Quality</h4>
                  <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                    <p className="text-purple-800 text-sm">
                      <strong>Our Commitment:</strong> All workshops in our network are certified and regularly audited. We maintain quality standards but are not directly responsible for workshop services. Any disputes should be resolved directly with the workshop, though we're happy to assist with mediation.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Cancellation Policy</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                      <span>Free cancellation up to 24 hours before appointment</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                      <span>Late cancellation may incur workshop-specific fees</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                      <span>No-show appointments may result in booking restrictions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Liability and Limitations */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center space-x-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
                <h3 className="text-2xl font-bold text-gray-900">Liability & Limitations</h3>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Service Availability</h4>
                  <p>
                    We strive for 99.9% uptime but cannot guarantee uninterrupted service. Maintenance windows and unexpected outages may occur. We'll notify users in advance when possible.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Diagnostic Limitations</h4>
                  <p>
                    BYKI provides diagnostic assistance based on vehicle data. We are not liable for vehicle damage, missed diagnoses, or consequences of following our recommendations. Always consult professional mechanics for critical issues.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Third-Party Services</h4>
                  <p>
                    Workshop services are provided by independent businesses. While we maintain quality standards, we are not liable for workshop performance, pricing disputes, or service quality issues.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions About These Terms?</h3>
              <p className="text-lg text-gray-600 mb-6">
                Our legal team is available to clarify any questions about these terms of service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/support">
                  <button className="bg-byki-green text-white px-8 py-4 rounded-xl font-semibold hover:bg-byki-green-dark transition-colors">
                    Contact Support
                  </button>
                </Link>
                <Link href="/privacy">
                  <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                    Privacy Policy
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
