import { Phone, Mail, MessageCircle, Book, Search, Clock, CheckCircle, HelpCircle, Shield, Smartphone, Bluetooth, Settings, AlertCircle, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function SupportPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-byki-green/10 rounded-full px-4 py-2 text-byki-green border border-byki-green/20">
                <HelpCircle className="w-4 h-4" />
                <span className="text-sm font-medium">24/7 Customer Support</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900">
                Support
                <span className="block text-byki-green">
                  Center
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Get help with BYKI App, SXAN device, workshop bookings, and technical support. We're here to assist you 24/7.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help articles, guides, or FAQs..."
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-byki-green focus:border-byki-green shadow-sm"
                />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="text-4xl font-bold text-byki-green mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="text-4xl font-bold text-byki-green mb-2">&lt;2hrs</div>
                <div className="text-gray-600">Average Response</div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="text-4xl font-bold text-byki-green mb-2">4.9★</div>
                <div className="text-gray-600">Support Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Contact Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the best way to reach our support team. We're here to help with any questions or issues.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Live Chat */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-byki-green transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Live Chat</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Get instant help from our support team. Available 24/7 for urgent issues and general questions.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4 text-green-600" />
                  <span>Average response: 2 minutes</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Available 24/7</span>
                </div>
              </div>
              <Button className="w-full" size="lg">
                Start Live Chat
              </Button>
            </div>

            {/* Email Support */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-byki-green transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Email Support</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Send us detailed questions or technical issues. Perfect for complex problems requiring documentation.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>Response within 2 hours</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span>support@byki.my</span>
                </div>
              </div>
              <Button variant="outline" className="w-full" size="lg">
                Send Email
              </Button>
            </div>

            {/* Phone Support */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-byki-green transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <Phone className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Phone Support</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Speak directly with our technical support team. Available for urgent issues and device troubleshooting.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4 text-purple-600" />
                  <span>Mon-Sun: 8AM-10PM</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Phone className="w-4 h-4 text-purple-600" />
                  <span>1-300-88-BYKI</span>
                </div>
              </div>
              <Button variant="outline" className="w-full" size="lg">
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about BYKI App, SXAN device, and workshop services
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* BYKI App FAQs */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center space-x-3">
                <Smartphone className="w-6 h-6 text-byki-green" />
                <span>BYKI App</span>
              </h3>
              
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Is the BYKI App really free?</h4>
                  <p className="text-gray-600">Yes, the BYKI App is completely free to download and use. No subscription fees, no hidden charges. You only pay if you choose to purchase the SXAN device (RM59) for enhanced diagnostics.</p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Does the app work without internet?</h4>
                  <p className="text-gray-600">Yes, most BYKI App features work offline, including basic vehicle diagnostics and maintenance tracking. Internet is only required for workshop bookings and app updates.</p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Which phones are compatible?</h4>
                  <p className="text-gray-600">BYKI App works on iPhone (iOS 13.0+) and Android phones (Android 7.0+). Most phones from 2018 onwards are compatible.</p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Is the app available in Bahasa Malaysia?</h4>
                  <p className="text-gray-600">Yes, BYKI App supports both English and Bahasa Malaysia. You can switch languages anytime in the app settings.</p>
                </div>
              </div>
            </div>

            {/* SXAN Device FAQs */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center space-x-3">
                <Bluetooth className="w-6 h-6 text-byki-green" />
                <span>SXAN Device</span>
              </h3>
              
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Will SXAN work with my car?</h4>
                  <p className="text-gray-600">SXAN works with all cars manufactured from 2008 onwards that have an OBD2 port. This includes petrol, diesel, and hybrid vehicles from all major brands.</p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">How do I set up the SXAN device?</h4>
                  <p className="text-gray-600">Simply plug SXAN into your car's OBD2 port (usually under the dashboard), turn on your car, and pair it with the BYKI App via Bluetooth. Setup takes about 30 seconds.</p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">What's included with SXAN purchase?</h4>
                  <p className="text-gray-600">You get the SXAN OBD2 device, quick start guide, 2-year warranty card, and free shipping anywhere in Malaysia. Total price: RM59.</p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Can I return the device if it doesn't work?</h4>
                  <p className="text-gray-600">Yes, we offer a 30-day money-back guarantee. If SXAN doesn't work with your vehicle or you're not satisfied, return it for a full refund.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg">
              <Book className="w-5 h-5 mr-2" />
              View All FAQs
            </Button>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Browse Help Topics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find detailed guides and tutorials organized by topic
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Getting Started */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-byki-green transition-all duration-300 hover:shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Settings className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Getting Started</h3>
              <p className="text-gray-600 mb-6">App installation, account setup, and first diagnostics</p>
              <Button variant="outline" size="sm" className="w-full">
                <ArrowRight className="w-4 h-4 mr-2" />
                View Guides
              </Button>
            </div>

            {/* Device Setup */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-byki-green transition-all duration-300 hover:shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Bluetooth className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Device Setup</h3>
              <p className="text-gray-600 mb-6">SXAN pairing, troubleshooting, and compatibility</p>
              <Button variant="outline" size="sm" className="w-full">
                <ArrowRight className="w-4 h-4 mr-2" />
                View Guides
              </Button>
            </div>

            {/* Workshop Booking */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-byki-green transition-all duration-300 hover:shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Workshop Services</h3>
              <p className="text-gray-600 mb-6">Booking appointments, finding workshops, pricing</p>
              <Button variant="outline" size="sm" className="w-full">
                <ArrowRight className="w-4 h-4 mr-2" />
                View Guides
              </Button>
            </div>

            {/* Troubleshooting */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-byki-green transition-all duration-300 hover:shadow-lg text-center">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <AlertCircle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Troubleshooting</h3>
              <p className="text-gray-600 mb-6">Common issues, error codes, and solutions</p>
              <Button variant="outline" size="sm" className="w-full">
                <ArrowRight className="w-4 h-4 mr-2" />
                View Guides
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Support CTA */}
      <section className="py-24 bg-byki-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Need Immediate Help?
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Our support team is available 24/7 for urgent issues, device problems, or technical emergencies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-byki-green hover:bg-gray-100 shadow-xl transition-all duration-300 text-lg px-8 py-4"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                <span className="text-byki-green">Start Live Chat</span>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-byki-green transition-all duration-300 text-lg px-8 py-4"
              >
                <Phone className="w-6 h-6 mr-3" />
                <span className="text-white">Call 1-300-88-BYKI</span>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-white/80">Always available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">&lt;2hrs</div>
                <div className="text-sm text-white/80">Average response</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.9★</div>
                <div className="text-sm text-white/80">Customer rating</div>
              </div>
            </div>

            <p className="text-sm text-white/80">
              English & Bahasa Malaysia support • Free for all users • Professional technical assistance
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
